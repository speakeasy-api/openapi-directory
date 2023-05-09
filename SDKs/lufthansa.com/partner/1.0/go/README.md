# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/lufthansa.com/partner/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Baggage.BaggageTripAndContact(ctx, operations.BaggageTripAndContactRequest{
        Accept: "corrupti",
        SearchID: "provident",
    }, operations.BaggageTripAndContactSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaggageTripAndContact200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Baggage](docs/baggage/README.md)

* [BaggageTripAndContact](docs/baggage/README.md#baggagetripandcontact) - Baggage Trip and Contact

### [Offers](docs/offers/README.md)

* [AllFares](docs/offers/README.md#allfares) - All Fares
* [BestFares](docs/offers/README.md#bestfares) - Best Fares
* [DeepLinks](docs/offers/README.md#deeplinks) - Deep Links
* [Fares](docs/offers/README.md#fares) - Fares
* [FaresSubscriptions](docs/offers/README.md#faressubscriptions) - Fares Subscriptions
* [LHDeepLinksFFP](docs/offers/README.md#lhdeeplinksffp) - LH Deep Links - FFP
* [LHDeepLinksITCO](docs/offers/README.md#lhdeeplinksitco) - LH Deep Links - ITCO
* [LowestFares](docs/offers/README.md#lowestfares) - Lowest Fares
* [ONDRoute](docs/offers/README.md#ondroute) - OND Route
* [ONDStatus](docs/offers/README.md#ondstatus) - OND Status
* [TopOND](docs/offers/README.md#topond) - Top OND

### [Orders](docs/orders/README.md)

* [Orders](docs/orders/README.md#orders) - Orders

### [Preflight](docs/preflight/README.md)

* [AutoCheckIn](docs/preflight/README.md#autocheckin) - Auto Check-In

### [Promotions](docs/promotions/README.md)

* [PriceOffers](docs/promotions/README.md#priceoffers) - Price Offers

### [ReferenceData](docs/referencedata/README.md)

* [SeatDetails](docs/referencedata/README.md#seatdetails) - Seat Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
