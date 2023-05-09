# BookingServices

## Overview

Booking services

### Available Operations

* [BookingAvailability](#bookingavailability) - /booking/availability
* [BookingAvailabilityDates](#bookingavailabilitydates) - /booking/availability/dates
* [BookingAvailabilityTourgrades](#bookingavailabilitytourgrades) - /booking/availability/tourgrades
* [BookingAvailabilityTourgradesPricingmatrix](#bookingavailabilitytourgradespricingmatrix) - /booking/availability/tourgrades/pricingmatrix
* [BookingBook](#bookingbook) - /booking/book
* [BookingCalculateprice](#bookingcalculateprice) - /booking/calculateprice
* [BookingHotels](#bookinghotels) - /booking/hotels
* [BookingMybookings](#bookingmybookings) - /booking/mybookings
* [BookingPastbooking](#bookingpastbooking) - /booking/pastbooking
* [BookingPricingmatrix](#bookingpricingmatrix) - /booking/pricingmatrix
* [BookingStatus](#bookingstatus) - /booking/status
* [BookingStatusItems](#bookingstatusitems) - /booking/status/items
* [BookingVoucher](#bookingvoucher) - /booking/voucher
* [CancelBooking](#cancelbooking) - /bookings/{booking-reference}/cancel
* [CancelBookingQuote](#cancelbookingquote) - /bookings/{booking-reference}/cancel-quote
* [CancellationReasons](#cancellationreasons) - /bookings/cancel-reasons

## BookingAvailability

Get the tour-grade with the lowest price that is available for a product on each day of the specified month

This service:
- returns 
- useful when displaying a calendar of available tours
- For more information, see: [Availability services](#section/Key-concepts/Availability-services)
- **Notes:** 
  - [/booking/availability/dates](#operation/bookingAvailabilityDates) provides all availability in one call and is more suitable for calendars, etc.

  - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingAvailability(ctx, operations.BookingAvailabilityRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.BookingAvailabilityRequestBody{
            AgeBands: []BookingAvailabilityRequestBodyAgeBands{
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: sdk.Int64(437587),
                    Count: sdk.Int64(297534),
                },
                operations.BookingAvailabilityRequestBodyAgeBands{
                    BandID: sdk.Int64(891773),
                    Count: sdk.Int64(56713),
                },
            },
            CurrencyCode: sdk.String("delectus"),
            Month: sdk.String("tempora"),
            ProductCode: sdk.String("suscipit"),
            Year: sdk.String("molestiae"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingAvailability200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BookingAvailabilityDates

Get dates on which a product is available

This service:
- retrieves all available dates for a product, excluding days it does not operate and blocked-out dates
- returns a multi-dimensional array of year-month -&gt; days that have any availabile tour grade or traveler mix
- useful to present the user with a list of dates for selection on which *this* product is available for booking
- **Notes**: 

  - The user's desired traveler mix may not be eligible for booking; these details can be displayed when you retrieve its list of tour grades
  - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingAvailabilityDates(ctx, operations.BookingAvailabilityDatesRequest{
        AcceptLanguage: "en-US",
        ProductCode: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingAvailabilityDates200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BookingAvailabilityTourgrades

Get the tour grades of a product that are currently available

This service reports:
- all tour grades for the specified product, on the specified day, that are available for the specified age bands
- the pricing breakdown and the total depending on the travel date and traveler mix

**Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingAvailabilityTourgrades(ctx, operations.BookingAvailabilityTourgradesRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.BookingAvailabilityTourgradesRequestBody{
            AgeBands: []BookingAvailabilityTourgradesRequestBodyAgeBands{
                operations.BookingAvailabilityTourgradesRequestBodyAgeBands{
                    BandID: sdk.Int64(528895),
                    Count: sdk.Int64(479977),
                },
                operations.BookingAvailabilityTourgradesRequestBodyAgeBands{
                    BandID: sdk.Int64(568045),
                    Count: sdk.Int64(392785),
                },
                operations.BookingAvailabilityTourgradesRequestBodyAgeBands{
                    BandID: sdk.Int64(925597),
                    Count: sdk.Int64(836079),
                },
                operations.BookingAvailabilityTourgradesRequestBodyAgeBands{
                    BandID: sdk.Int64(71036),
                    Count: sdk.Int64(337396),
                },
            },
            BookingDate: sdk.String("veritatis"),
            CurrencyCode: sdk.String("deserunt"),
            ProductCode: sdk.String("perferendis"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingAvailabilityTourgrades200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BookingAvailabilityTourgradesPricingmatrix

Get a pricing matrix that includes availability and tour-grades for a product

Given a month, this service returns days with available tour grades only (i.e., days which have at least one tourgrade available), and the pricing matrix for that tour grade for that day.

- **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. 


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingAvailabilityTourgradesPricingmatrix(ctx, operations.BookingAvailabilityTourgradesPricingmatrixRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.BookingAvailabilityTourgradesPricingmatrixRequestBody{
            CurrencyCode: sdk.String("ipsam"),
            Month: sdk.String("repellendus"),
            ProductCode: sdk.String("sapiente"),
            Year: sdk.String("quo"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BookingBook

Make a booking

For more information, see: 

  - [Cancellation policy](#section/Key-concepts/Cancellation-policy)
  - [Booking concepts](#section/Key-concepts/Booking-concepts)
  - [Booking process flow](#section/Common-workflows-and-data-validation/Booking-process-flow)
  - [Making a booking](#section/Common-workflows-and-data-validation/Making-a-booking)
  - [Supplier communications](#section/Key-concepts/Supplier-communications)


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingBook(ctx, operations.BookingBookRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.BookingBookRequestBody{
            Booker: &operations.BookingBookRequestBodyBooker{
                CellPhone: sdk.String("odit"),
                CellPhoneCountryCode: sdk.String("at"),
                Email: sdk.String("Wilford_Krajcik46@hotmail.com"),
                Firstname: "totam",
                HomePhone: sdk.String("porro"),
                Surname: "dolorum",
                Title: sdk.String("Mr."),
            },
            CurrencyCode: sdk.String("nam"),
            Demo: sdk.Bool(false),
            Items: []BookingBookRequestBodyItems{
                operations.BookingBookRequestBodyItems{
                    BookingQuestionAnswers: []BookingBookRequestBodyItemsBookingQuestionAnswers{
                        operations.BookingBookRequestBodyItemsBookingQuestionAnswers{
                            Answer: sdk.String("fugit"),
                            QuestionID: sdk.Int64(537373),
                        },
                        operations.BookingBookRequestBodyItemsBookingQuestionAnswers{
                            Answer: sdk.String("hic"),
                            QuestionID: sdk.Int64(758616),
                        },
                        operations.BookingBookRequestBodyItemsBookingQuestionAnswers{
                            Answer: sdk.String("totam"),
                            QuestionID: sdk.Int64(105907),
                        },
                    },
                    HotelID: sdk.String("commodi"),
                    LanguageOptionCode: sdk.String("molestiae"),
                    PartnerItemDetail: &operations.BookingBookRequestBodyItemsPartnerItemDetail{
                        DistributorItemRef: sdk.String("modi"),
                    },
                    PickupPoint: sdk.String("qui"),
                    ProductCode: sdk.String("impedit"),
                    SpecialRequirements: sdk.String("cum"),
                    TourGradeCode: sdk.String("esse"),
                    TravelDate: sdk.String("ipsum"),
                    Travellers: []BookingBookRequestBodyItemsTravellers{
                        operations.BookingBookRequestBodyItemsTravellers{
                            BandID: sdk.Int64(135218),
                            Firstname: sdk.String("Aiden"),
                            LeadTraveller: sdk.Bool(false),
                            Surname: sdk.String("ad"),
                            Title: sdk.String("Miss"),
                        },
                        operations.BookingBookRequestBodyItemsTravellers{
                            BandID: sdk.Int64(149675),
                            Firstname: sdk.String("Leora"),
                            LeadTraveller: sdk.Bool(false),
                            Surname: sdk.String("dolor"),
                            Title: sdk.String("Miss"),
                        },
                        operations.BookingBookRequestBodyItemsTravellers{
                            BandID: sdk.Int64(386489),
                            Firstname: sdk.String("Tyra"),
                            LeadTraveller: sdk.Bool(false),
                            Surname: sdk.String("saepe"),
                            Title: sdk.String("Miss"),
                        },
                    },
                },
                operations.BookingBookRequestBodyItems{
                    BookingQuestionAnswers: []BookingBookRequestBodyItemsBookingQuestionAnswers{
                        operations.BookingBookRequestBodyItemsBookingQuestionAnswers{
                            Answer: sdk.String("corporis"),
                            QuestionID: sdk.Int64(613064),
                        },
                        operations.BookingBookRequestBodyItemsBookingQuestionAnswers{
                            Answer: sdk.String("iure"),
                            QuestionID: sdk.Int64(902349),
                        },
                    },
                    HotelID: sdk.String("quidem"),
                    LanguageOptionCode: sdk.String("architecto"),
                    PartnerItemDetail: &operations.BookingBookRequestBodyItemsPartnerItemDetail{
                        DistributorItemRef: sdk.String("ipsa"),
                    },
                    PickupPoint: sdk.String("reiciendis"),
                    ProductCode: sdk.String("est"),
                    SpecialRequirements: sdk.String("mollitia"),
                    TourGradeCode: sdk.String("laborum"),
                    TravelDate: sdk.String("dolores"),
                    Travellers: []BookingBookRequestBodyItemsTravellers{
                        operations.BookingBookRequestBodyItemsTravellers{
                            BandID: sdk.Int64(358152),
                            Firstname: sdk.String("Braulio"),
                            LeadTraveller: sdk.Bool(false),
                            Surname: sdk.String("nobis"),
                            Title: sdk.String("Mrs."),
                        },
                    },
                },
                operations.BookingBookRequestBodyItems{
                    BookingQuestionAnswers: []BookingBookRequestBodyItemsBookingQuestionAnswers{
                        operations.BookingBookRequestBodyItemsBookingQuestionAnswers{
                            Answer: sdk.String("nemo"),
                            QuestionID: sdk.Int64(325047),
                        },
                        operations.BookingBookRequestBodyItemsBookingQuestionAnswers{
                            Answer: sdk.String("excepturi"),
                            QuestionID: sdk.Int64(38425),
                        },
                        operations.BookingBookRequestBodyItemsBookingQuestionAnswers{
                            Answer: sdk.String("iure"),
                            QuestionID: sdk.Int64(634274),
                        },
                    },
                    HotelID: sdk.String("doloribus"),
                    LanguageOptionCode: sdk.String("sapiente"),
                    PartnerItemDetail: &operations.BookingBookRequestBodyItemsPartnerItemDetail{
                        DistributorItemRef: sdk.String("architecto"),
                    },
                    PickupPoint: sdk.String("mollitia"),
                    ProductCode: sdk.String("dolorem"),
                    SpecialRequirements: sdk.String("culpa"),
                    TourGradeCode: sdk.String("consequuntur"),
                    TravelDate: sdk.String("repellat"),
                    Travellers: []BookingBookRequestBodyItemsTravellers{
                        operations.BookingBookRequestBodyItemsTravellers{
                            BandID: sdk.Int64(581850),
                            Firstname: sdk.String("Deon"),
                            LeadTraveller: sdk.Bool(false),
                            Surname: sdk.String("commodi"),
                            Title: sdk.String("Ms."),
                        },
                        operations.BookingBookRequestBodyItemsTravellers{
                            BandID: sdk.Int64(474697),
                            Firstname: sdk.String("Deion"),
                            LeadTraveller: sdk.Bool(false),
                            Surname: sdk.String("error"),
                            Title: sdk.String("Mr."),
                        },
                        operations.BookingBookRequestBodyItemsTravellers{
                            BandID: sdk.Int64(338007),
                            Firstname: sdk.String("Bernie"),
                            LeadTraveller: sdk.Bool(false),
                            Surname: sdk.String("laborum"),
                            Title: sdk.String("Miss"),
                        },
                    },
                },
            },
            PartnerDetail: &operations.BookingBookRequestBodyPartnerDetail{
                DistributorRef: sdk.String("enim"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingBook200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BookingCalculateprice

Confirm the price of a tour / activity prior to booking

For more information, see: [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices)  

- **Note**: Availability and pricing data is limited to a period of **six months** into the future from the present time


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingCalculateprice(ctx, operations.BookingCalculatepriceRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.BookingCalculatepriceRequestBody{
            CurrencyCode: sdk.String("odit"),
            Items: []BookingCalculatepriceRequestBodyItems{
                operations.BookingCalculatepriceRequestBodyItems{
                    ProductCode: sdk.String("sequi"),
                    TourGradeCode: sdk.String("tenetur"),
                    TravelDate: sdk.String("ipsam"),
                    Travellers: []BookingCalculatepriceRequestBodyItemsTravellers{
                        operations.BookingCalculatepriceRequestBodyItemsTravellers{
                            BandID: sdk.Int64(820994),
                        },
                        operations.BookingCalculatepriceRequestBodyItemsTravellers{
                            BandID: sdk.Int64(13571),
                        },
                        operations.BookingCalculatepriceRequestBodyItemsTravellers{
                            BandID: sdk.Int64(97101),
                        },
                    },
                },
                operations.BookingCalculatepriceRequestBodyItems{
                    ProductCode: sdk.String("error"),
                    TourGradeCode: sdk.String("temporibus"),
                    TravelDate: sdk.String("laborum"),
                    Travellers: []BookingCalculatepriceRequestBodyItemsTravellers{
                        operations.BookingCalculatepriceRequestBodyItemsTravellers{
                            BandID: sdk.Int64(971945),
                        },
                    },
                },
                operations.BookingCalculatepriceRequestBodyItems{
                    ProductCode: sdk.String("voluptatibus"),
                    TourGradeCode: sdk.String("vero"),
                    TravelDate: sdk.String("nihil"),
                    Travellers: []BookingCalculatepriceRequestBodyItemsTravellers{
                        operations.BookingCalculatepriceRequestBodyItemsTravellers{
                            BandID: sdk.Int64(976762),
                        },
                        operations.BookingCalculatepriceRequestBodyItemsTravellers{
                            BandID: sdk.Int64(55714),
                        },
                        operations.BookingCalculatepriceRequestBodyItemsTravellers{
                            BandID: sdk.Int64(604846),
                        },
                    },
                },
                operations.BookingCalculatepriceRequestBodyItems{
                    ProductCode: sdk.String("voluptate"),
                    TourGradeCode: sdk.String("cum"),
                    TravelDate: sdk.String("perferendis"),
                    Travellers: []BookingCalculatepriceRequestBodyItemsTravellers{
                        operations.BookingCalculatepriceRequestBodyItemsTravellers{
                            BandID: sdk.Int64(441711),
                        },
                    },
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingCalculateprice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BookingHotels

Get hotel pick-ups
Lists the hotel pickups available for either a product or a destination


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingHotels(ctx, operations.BookingHotelsRequest{
        AcceptLanguage: "en-US",
        DestID: sdk.Int64(282807),
        ProductCode: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingHotels200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BookingMybookings

Get a user's bookings with travel dates in the future. 

This service can also be used to check the status of a booking. 

**Provide either:** 
- A `voucherKey`, **or...** 
- An email address (`email`) and a booking reference (`itineraryOrItemId`) ([Booking Reference](#section/Key-concepts/Booking-references))


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingMybookings(ctx, operations.BookingMybookingsRequest{
        AcceptLanguage: "en-US",
        Email: sdk.String("Floy.Gulgowski@gmail.com"),
        ItineraryOrItemID: sdk.String("harum"),
        VoucherKey: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingMybookings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BookingPastbooking

Get the details of a single specific past booking based on the `voucherKey` or `itemId` and email address sent in the request.

**Note**: this service will only return past bookings that were made with the same API key that was used to make the booking

**Sample query parameters**:
- email=apitest@viator.com&amp;itemId=580669678

**or**
- voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678

**email**
- The email address passed must match the email address associated with the booking

**Departure details**

- Departure details such as the `departurePoint`, `departurePointAddress` and `departurePointDirections` is included in the response. 
- These fields may contain HTML escape characters such as &amp;amp; and special characters that are escaped by a backslash. Ensure that these fields are parsed after receiving the response as it will cause your JSON to be invalid.

For more information, see: [Reviewing bookings](#section/Common-workflows-and-data-validation/Reviewing-bookings)


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingPastbooking(ctx, operations.BookingPastbookingRequest{
        AcceptLanguage: "en-US",
        Email: sdk.String("Harry21@hotmail.com"),
        ItemID: sdk.String("quidem"),
        VoucherKey: sdk.String("molestias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingPastbooking200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BookingPricingmatrix

Get the pricing matrix for tour-grades, product age bands and pax mixes

For more information, see: [Get the tour-grade pricing matrix](#section/Common-workflows-and-data-validation/Get-the-tour-grade-pricing-matrix)


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingPricingmatrix(ctx, operations.BookingPricingmatrixRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.BookingPricingmatrixRequestBody{
            BookingDate: sdk.String("excepturi"),
            CurrencyCode: sdk.String("pariatur"),
            ProductCode: sdk.String("modi"),
            TourGradeCode: sdk.String("praesentium"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingPricingmatrix200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BookingStatus

Get the booking status for multiple items based on different criteria

This service: 
- is ideally be used in software for bulk updates of pending bookings
- returns a maximum of 1000 bookings (narrow your search if you expect a greater number of results)
- will return &lt;u&gt;both&lt;/u&gt; live &lt;u&gt;and&lt;/u&gt; test bookings
- rate limited to &lt;u&gt;one request every 30 minutes&lt;/u&gt;
- For more information, see: [Get the bookiing status for multiple items](#section/Common-workflows-and-data-validation/Get-the-booking-status-for-multiple-items)

**Exceeding the rate limit**
- You will receive the following error message if you exceed the rate limit allowed for this service. Set `test` to `true` to bypass this limit:
```javascript
{
    "data": null
    "vmid": 221002
    "errorMessage": ["Access allowed every 30 minutes"]
    "errorType": "EXCEPTION"
    "dateStamp": "2013-03-26T10:28:51+0000"
    "errorReference": 55315512721712161381352771
    "errorMessageText": ["Access allowed every 30 minutes"]
    "success": false
    "totalCount": 1
    "errorName": "PollingDeniedException"  
}
```


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingStatus(ctx, operations.BookingStatusRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.BookingStatusRequestBody{
            BookingDateFrom: sdk.String("rem"),
            BookingDateTo: sdk.String("voluptates"),
            DistributorItemRefs: []string{
                "repudiandae",
            },
            DistributorRefs: []string{
                "veritatis",
                "itaque",
                "incidunt",
            },
            ItemIds: []int64{
                9356,
                667411,
            },
            LeadFirstName: sdk.String("quibusdam"),
            LeadSurname: sdk.String("explicabo"),
            Test: sdk.Bool(false),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BookingStatusItems

Get brief booking statuses

This service is similar to [/booking/status](#operation/bookingStatus) in that it:
- retrieves the booking status for multiple items based on different criteria
- has the same request parameters as [/booking/status](#operation/bookingStatus)

However, it differs in that it returns a multi-item array of booking items with less detail than what would be received from [/booking/status](#operation/bookingStatus).


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingStatusItems(ctx, operations.BookingStatusItemsRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.BookingStatusItemsRequestBody{
            BookingDateFrom: sdk.String("deserunt"),
            BookingDateTo: sdk.String("distinctio"),
            DistributorItemRefs: []string{
                "labore",
                "modi",
                "qui",
                "aliquid",
            },
            DistributorRefs: []string{
                "quos",
                "perferendis",
                "magni",
            },
            ItemIds: []int64{
                369808,
                4695,
                146441,
                677817,
            },
            LeadFirstName: sdk.String("excepturi"),
            LeadSurname: sdk.String("tempora"),
            Test: sdk.Bool(false),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingStatusItems200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## BookingVoucher

Get voucher details
- Use this service to retrieve the voucher details of a booked item.
- The data returned is HTML-formatted and can be wrapped in a header and/or footer.

**Sample query parameters**
- leadLastName=Simpson test&amp;itemId=580669678

**or** 
- voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;fullHTML=true&amp;mobileVoucher=true


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.BookingVoucher(ctx, operations.BookingVoucherRequest{
        AcceptLanguage: "en-US",
        EmbeddedResources: sdk.Bool(false),
        FullHTML: sdk.Bool(false),
        ItemID: sdk.Int64(703737),
        LeadLastName: sdk.String("tempore"),
        MobileVoucher: sdk.Bool(false),
        VoucherKey: sdk.String("3299307:93c7f36a56b18ba1068787ba7fb7988da5c8ad08db77604110141ff21498603e:600033670"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingVoucher200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CancelBooking

Submits a cancellation request for the specified booking

For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)

**Note**: 

  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel`


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.CancelBooking(ctx, operations.CancelBookingRequest{
        AcceptLanguage: "en-US",
        CancellationRequest: &shared.CancellationRequest{
            ReasonCode: sdk.String("Customer_Service.I_canceled_my_entire_trip"),
        },
        BookingReference: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelBookingResponse != nil {
        // handle response
    }
}
```

## CancelBookingQuote

Retrieves a quote for the cancellation of a booking

For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)

**Note**: 

  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel-quote`


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.CancelBookingQuote(ctx, operations.CancelBookingQuoteRequest{
        BookingReference: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelBookingQuoteResponse != nil {
        // handle response
    }
}
```

## CancellationReasons

Retrieves a dictionary of unique identification codes (`cancellationReasonCode`) and their associated natural-language descriptions (`cancellationReasonText`).

For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)

**Note**: 

  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/cancel-reasons`


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
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.BookingServices.CancellationReasons(ctx, operations.CancellationReasonsRequest{
        AcceptLanguage: "en-US",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancellationReasonsResponses != nil {
        // handle response
    }
}
```
