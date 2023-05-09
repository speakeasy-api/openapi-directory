# Offers

### Available Operations

* [OffersLoungesByLocationGet](#offersloungesbylocationget) - Lounges
* [OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet](#offersseatmapsdestinationdatecabinclassbyflightnumberandoriginget) - Seat Maps

## OffersLoungesByLocationGet

Lounge information

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Offers.OffersLoungesByLocationGet(ctx, operations.OffersLoungesByLocationGetRequest{
        Accept: "magnam",
        CabinClass: sdk.String("debitis"),
        Lang: sdk.String("ipsa"),
        Location: "delectus",
        TierCode: sdk.String("tempora"),
    }, operations.OffersLoungesByLocationGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OffersLoungesByLocationGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet

Cabin layout and seat characteristics.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Offers.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet(ctx, operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest{
        Accept: "suscipit",
        CabinClass: "molestiae",
        Date: "minus",
        Destination: "placeat",
        FlightNumber: "voluptatum",
        Origin: "iusto",
    }, operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```
