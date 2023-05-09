# Promotions

### Available Operations

* [PriceOffers](#priceoffers) - Price Offers

## PriceOffers

Retrieve a best price offer given an origin and destination.

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
    res, err := s.Promotions.PriceOffers(ctx, operations.PriceOffersRequest{
        DepartureDate: "tenetur",
        Destination: "ipsam",
        Origin: "id",
        ReturnDate: "possimus",
        Service: sdk.String("aut"),
    }, operations.PriceOffersSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PriceOffers200ApplicationJSONString != nil {
        // handle response
    }
}
```
