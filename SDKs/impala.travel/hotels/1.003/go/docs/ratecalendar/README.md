# RateCalendar

## Overview

Getting rates for future dates.

### Available Operations

* [ListRatePlanForHotelForRatePlanID](#listrateplanforhotelforrateplanid) - List a rate plan (rate calendar) for a hotel (Beta endpoint).
* [ListRatePlansForHotel](#listrateplansforhotel) - List all rate plans (rate calendar) for a hotel (Beta endpoint)

## ListRatePlanForHotelForRatePlanID

Returns a single rate plan available for you for a hotel.

Rate plans are products the hotel is offering. They typically consist of a combination of restrictiveness in case of cancellations or changes, the time they're bookable, minimum or maximum length of stay restrictions (e.g. week-long bookings), included components like breakfast or dinner and/or the conditions under which the room can be sold (e.g. private rates that can only be offered and sold to a closed user group behind login).

Examples of rate plans:

* Non-refundable room rate that includes breakfast
* Room-only rate with free cancellation up to 14 days before arrival

This endpoint returns a singular available rate plan.

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
    res, err := s.RateCalendar.ListRatePlanForHotelForRatePlanID(ctx, operations.ListRatePlanForHotelForRatePlanIDRequest{
        End: sdk.String("2022-05-12"),
        HotelID: "a9467739-251a-4a52-83f5-ad019da1ffe7",
        Offset: sdk.Float64(25),
        RatePlanID: 509624,
        RoomTypeID: sdk.String("6d3a255d-3b22-48a4-8076-3ae3d0ade3d7"),
        Size: sdk.Float64(40),
        Start: sdk.String("2022-05-12"),
        UpdatedAt: map[string]interface{}{
            "ipsa": "omnis",
            "voluptate": "cum",
            "perferendis": "doloremque",
            "reprehenderit": "ut",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RatePlan != nil {
        // handle response
    }
}
```

## ListRatePlansForHotel

Returns a list of all rate plans available for you for a hotel.

Rate plans are products the hotel is offering. They typically consist of a combination of restrictiveness in case of cancellations or changes, the time they're bookable, minimum or maximum length of stay restrictions (e.g. week-long bookings), included components like breakfast or dinner and/or the conditions under which the room can be sold (e.g. private rates that can only be offered and sold to a closed user group behind login).

Examples of rate plans:

* Non-refundable room rate that includes breakfast
* Room-only rate with free cancellation up to 14 days before arrival

For each such rate plan this endpoint returns the room types it's available for, alongside prices for each date and occupancy that can be sold – or the information that the room isn't available (closed) for a certain date.

For the vast majority of our customers, availability searches using the [List all hotels](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1hotels/get) endpoint are the best choice. It accepts the dates your guest is looking for and provides the rates to display.

This endpoint can help augment this for two additional use cases:

This endpoint allows you to query rate prices for all future dates in one go, making it a great choice to feed availability information and prices into your own system or displaying a rate calender to guide your guests to gain an overview of future availability and prices.

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
    res, err := s.RateCalendar.ListRatePlansForHotel(ctx, operations.ListRatePlansForHotelRequest{
        End: sdk.String("2022-05-12"),
        HotelID: "f15471b5-e6e1-43b9-9d48-8e1e91e450ad",
        Offset: sdk.Float64(25),
        RoomID: sdk.String("6d3a255d-3b22-48a4-8076-3ae3d0ade3d7"),
        Size: sdk.Float64(40),
        Start: sdk.String("2022-05-12"),
        UpdatedAt: map[string]interface{}{
            "deserunt": "distinctio",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRatePlansForHotel200ApplicationJSONObject != nil {
        // handle response
    }
}
```
