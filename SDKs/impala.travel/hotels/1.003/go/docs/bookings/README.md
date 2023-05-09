# Bookings

## Overview

Making and managing bookings.

### Available Operations

* [CancelBooking](#cancelbooking) - Cancel a booking
* [CreateBooking](#createbooking) - Create a booking
* [ListBookings](#listbookings) - List all bookings
* [RetrieveBooking](#retrievebooking) - Retrieve a booking
* [UpdateBooking](#updatebooking) - Change a booking
* [UpdateBookingContact](#updatebookingcontact) - Change a booking contact

## CancelBooking

<!-- theme: danger -->

> Cancels the specified booking with immediate effect. This action might result in a cancellation charge being charged.

Submitting this request means we'll notify the hotel of the cancellation and that they won't expect your guest.

You can use `GET /bookings/{bookingId}`to see the cancellation policies that apply to a booking at a given point in time. Please note that cancelling a booking will incur a cancellation fee according to the rules that apply at the time of cancellation. You can find the cancellation fee that has been charged in the response of this call in the `cancellation.fee` object.

If the booking you cancelled allows for a partial or full refund, we'll credit your Impala balance with the amount we charged you as the seller of this booking – meaning we'll deduct the amount the next time we're requesting payment for the sum of all the bookings you made.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuthentication: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Bookings.CancelBooking(ctx, operations.CancelBookingRequest{
        BookingID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Booking != nil {
        // handle response
    }
}
```

## CreateBooking

Creates a booking for for the rate and dates you specify in the request body.

You'll need a `roomTypes[].rates[].rateId` that's bookable for those dates, which you can find using the [Retrieve a hotel](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1hotels~1%7BhotelId%7D/get) endpoint.

If you have provided a credit card on the dashboard then **Impala will send the booking to the hotel immediately**. We'll ensure payment is taken care of before your guest arrives at the hotel.

* Your guest needs to be **paying you** the rate specified in `retailRate` (as listed in the [Retrieve a hotel](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1hotels~1%7BhotelId%7D/get) response) before you submit this request.
* Once your request is received and the booking is confirmed, **Impala will charge you** as the seller this `retailRate` minus the `sellerCommissionPercentage` (which is the affiliate commission you get to keep). We'll use the business credit card you've added to your account as payment method for this.
* The difference between the amount you charge your guest (`retailRate`, e.g. 200 €) and what Impala charges you (`retailRate` minus `sellerCommissionPercentage`, e.g. 200 €) is your commission (in this example: 20 €) to keep.

You can find more information on how money flows between your guest and you, and you and Impala, [in this article](https://impala.stoplight.io/docs/booking-api/branches/v1.003/docs/good-to-know/payments-and-commissions.md)

<!-- theme: warning -->

> **This request might take up to 20 seconds to load.** While we work to return a response to your request within milliseconds in most cases, some bookings require us to re-verify current pricing in real-time and doing so might take up to 20 seconds. Please make sure your app handles this waiting state appropriately.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuthentication: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Bookings.CreateBooking(ctx, shared.BookingRequest{
        BookingContact: shared.PersonInfo{
            Email: "jocelin.carreon.crespo@example.com",
            FirstName: "Jocelín",
            LastName: "Carreón Sample",
        },
        End: types.MustDateFromString("2021-04-24"),
        Notes: &shared.NotesBooking{
            FromGuest: sdk.String("unde"),
            FromSeller: sdk.String("nulla"),
        },
        PaymentType: shared.BookingRequestPaymentTypeEnumAPI.ToPointer(),
        Rooms: []shared.BookingRequestRooms{
            shared.BookingRequestRooms{
                Adults: 2,
                Notes: &shared.NotesBookedRoom{
                    FromGuest: "illum",
                    FromSeller: "vel",
                },
                RateID: "3rX3IaqkpJaPlttxoFoM3uDcHJEZCAuByqfBSLUPMvkBGyu7IAlhbxl3rZ7cVmVj6TbXL4EfiHlTA",
            },
            shared.BookingRequestRooms{
                Adults: 2,
                Notes: &shared.NotesBookedRoom{
                    FromGuest: "error",
                    FromSeller: "deserunt",
                },
                RateID: "3rX3IaqkpJaPlttxoFoM3uDcHJEZCAuByqfBSLUPMvkBGyu7IAlhbxl3rZ7cVmVj6TbXL4EfiHlTA",
            },
            shared.BookingRequestRooms{
                Adults: 2,
                Notes: &shared.NotesBookedRoom{
                    FromGuest: "suscipit",
                    FromSeller: "iure",
                },
                RateID: "3rX3IaqkpJaPlttxoFoM3uDcHJEZCAuByqfBSLUPMvkBGyu7IAlhbxl3rZ7cVmVj6TbXL4EfiHlTA",
            },
        },
        Start: types.MustDateFromString("2022-02-09"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Booking != nil {
        // handle response
    }
}
```

## ListBookings

Returns a list of all the bookings you've made.

You can filter the list based on when bookings were created or last updated, as well as their arrival (`start`) and departure (`end`). These date-based filters allow to narrow down the result with modifiers for less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`).

Example: Adding the query parameters `start[gt]=2021-05-20&updated[lte]=2020-11-20T11:11:00.000Z` would return bookings arriving after May 20th, 2020 that were updated before or on November 20th, 2020 at 11:11 am UTC.

You can specify the **sorting order** in which bookings are returned:
* This is done by using the `sortBy` query parameter.
* Results can be sorted by `createdAt` and `updatedAt`
* The parameter allows for a comma-separated list of arguments with `:asc` (ascending, the default if no sorting is specified) and `:desc` (descending) modifiers.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuthentication: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Bookings.ListBookings(ctx, operations.ListBookingsRequest{
        Created: map[string]interface{}{
            "delectus": "tempora",
        },
        End: map[string]interface{}{
            "molestiae": "minus",
            "placeat": "voluptatum",
        },
        Offset: sdk.Float64(4799.77),
        Size: sdk.Float64(5680.45),
        SortBy: sdk.String("createdAt:desc,updatedAt:asc"),
        Start: map[string]interface{}{
            "recusandae": "temporibus",
            "ab": "quis",
        },
        Updated: map[string]interface{}{
            "deserunt": "perferendis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBookings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RetrieveBooking

Returns all details for the specified booking.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuthentication: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Bookings.RetrieveBooking(ctx, operations.RetrieveBookingRequest{
        BookingID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Booking != nil {
        // handle response
    }
}
```

## UpdateBooking

<!-- theme: danger -->

> Updates the specified booking with immediate effect. This action might result in a cancellation charge being charged.

> Please note that if you wish to change the contact details associated with a booking, you should use the [Change a Booking's Contact Details](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings~1%7BbookingId%7D~1booking-contact/put) endpoint.

Changes / updates a confirmed booking with the details you provide in the request body.

When your guest needs to change their booking, you can use this endpoint to change any of the details you initially supplied when you [made their booking](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings/post), e.g. you'll need to query for availability and use the `roomTypes[].rates[].rateId` that are available currently for their new stay dates. Any new rates selected must be for the same hotel as the original booking.

A booking cannot be updated on or after the check in day of the original or new stay.

In addition, we require you do supply a `updateBookingVersionAtTimestamp` field with the `updatedAt` timestamp of the booking. You can find this value by looking up the booking via the [Retrieve a booking](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings~1%7BbookingId%7D/get) endpoint. This is to avoid race conditions where another update might have happened since the last time you have checked for the current details of this booking.

The `status` of this booking will switch back to `PENDING` until we have submitted and confirmed the new details with the hotel.

<!-- theme: warning -->

> **This request might take up to 20 seconds to load.** While we work to return a response to your request within milliseconds in most cases, some bookings require us to re-verify current pricing in real-time and doing so might take up to 20 seconds. Please make sure your app handles this waiting state appropriately.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuthentication: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Bookings.UpdateBooking(ctx, operations.UpdateBookingRequest{
        BookingID: "repellendus",
        UpdateBookingRequest: &shared.UpdateBookingRequest{
            BookingContact: shared.PersonInfo{
                Email: "jocelin.carreon.crespo@example.com",
                FirstName: "Jocelín",
                LastName: "Carreón Sample",
            },
            End: types.MustDateFromString("2020-08-31"),
            Notes: &shared.NotesBooking{
                FromGuest: sdk.String("odit"),
                FromSeller: sdk.String("at"),
            },
            PaymentType: shared.UpdateBookingRequestPaymentTypeEnumAPI.ToPointer(),
            Rooms: []shared.UpdateBookingRequestRooms{
                shared.UpdateBookingRequestRooms{
                    Adults: 2,
                    Notes: &shared.NotesBookedRoom{
                        FromGuest: "maiores",
                        FromSeller: "molestiae",
                    },
                    RateID: "3rX3IaqkpJaPlttxoFoM3uDcHJEZCAuByqfBSLUPMvkBGyu7IAlhbxl3rZ7cVmVj6TbXL4EfiHlTA",
                },
                shared.UpdateBookingRequestRooms{
                    Adults: 2,
                    Notes: &shared.NotesBookedRoom{
                        FromGuest: "quod",
                        FromSeller: "quod",
                    },
                    RateID: "3rX3IaqkpJaPlttxoFoM3uDcHJEZCAuByqfBSLUPMvkBGyu7IAlhbxl3rZ7cVmVj6TbXL4EfiHlTA",
                },
                shared.UpdateBookingRequestRooms{
                    Adults: 2,
                    Notes: &shared.NotesBookedRoom{
                        FromGuest: "esse",
                        FromSeller: "totam",
                    },
                    RateID: "3rX3IaqkpJaPlttxoFoM3uDcHJEZCAuByqfBSLUPMvkBGyu7IAlhbxl3rZ7cVmVj6TbXL4EfiHlTA",
                },
                shared.UpdateBookingRequestRooms{
                    Adults: 2,
                    Notes: &shared.NotesBookedRoom{
                        FromGuest: "porro",
                        FromSeller: "dolorum",
                    },
                    RateID: "3rX3IaqkpJaPlttxoFoM3uDcHJEZCAuByqfBSLUPMvkBGyu7IAlhbxl3rZ7cVmVj6TbXL4EfiHlTA",
                },
            },
            Start: types.MustDateFromString("2022-04-12"),
            UpdateBookingVersionAtTimestamp: types.MustTimeFromString("2020-12-20T11:01:30.745Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Booking != nil {
        // handle response
    }
}
```

## UpdateBookingContact

Updates a confirmed booking with the booking contact details you provide in the request body.

In addition, we require you to supply a `updateBookingVersionAtTimestamp` field with the `updatedAt` timestamp of the booking. You can find this value by looking up the booking via the [Retrieve a booking](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings~1%7BbookingId%7D/get) endpoint. This is to avoid race conditions where another update might have happened since the last time you have checked for the current details of this booking.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuthentication: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Bookings.UpdateBookingContact(ctx, operations.UpdateBookingContactRequest{
        BookingID: "officia",
        UpdateBookingContactRequest: &shared.UpdateBookingContactRequest{
            BookingContact: shared.PersonInfo{
                Email: "jocelin.carreon.crespo@example.com",
                FirstName: "Jocelín",
                LastName: "Carreón Sample",
            },
            UpdateBookingVersionAtTimestamp: types.MustTimeFromString("2020-12-20T11:01:30.745Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Booking != nil {
        // handle response
    }
}
```
