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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.BaggageTripAndContactRequest{
        Accept: "corrupti",
        SearchID: "provident",
    }

    ctx := context.Background()
    res, err := s.Baggage.BaggageTripAndContact(ctx, req, operations.BaggageTripAndContactSecurity{
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


### Baggage

* `BaggageTripAndContact` - Baggage Trip and Contact

### Offers

* `AllFares` - All Fares
* `BestFares` - Best Fares
* `DeepLinks` - Deep Links
* `Fares` - Fares
* `FaresSubscriptions` - Fares Subscriptions
* `LHDeepLinksFFP` - LH Deep Links - FFP
* `LHDeepLinksITCO` - LH Deep Links - ITCO
* `LowestFares` - Lowest Fares
* `ONDRoute` - OND Route
* `ONDStatus` - OND Status
* `TopOND` - Top OND

### Orders

* `Orders` - Orders

### Preflight

* `AutoCheckIn` - Auto Check-In

### Promotions

* `PriceOffers` - Price Offers

### ReferenceData

* `SeatDetails` - Seat Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
