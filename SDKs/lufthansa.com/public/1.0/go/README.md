# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/lufthansa.com/public/1.0/go
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

    req := operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest{
        Accept: "corrupti",
        Destination: "provident",
        FromDate: "distinctio",
        Origin: "quibusdam",
        ProductCode: "YNB",
    }

    ctx := context.Background()
    res, err := s.Cargo.CargoGetRouteFromDateProductCodeByOriginAndDestinationGet(ctx, req, operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Cargo

* `CargoGetRouteFromDateProductCodeByOriginAndDestinationGet` - Retrieve all flights
* `CargoShipmentTrackingByAWBPrefixAndAWBNumberGet` - Shipment Tracking

### Offers

* `OffersLoungesByLocationGet` - Lounges
* `OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet` - Seat Maps

### Operations

* `OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet` - Flight Status at Arrival Airport
* `OperationsFlightstatusByFlightNumberAndDateGet` - Flight Status
* `OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet` - Flight Status at Departure Airport
* `OperationsFlightstatusRouteDateByOriginAndDestinationGet` - Flight Status by Route
* `OperationsSchedulesFromDateTimeByOriginAndDestinationGet` - Flight Schedules

### ReferenceData

* `ReferencesAircraftByAircraftCodeGet` - Aircraft
* `ReferencesAirlinesByAirlineCodeGet` - Airlines
* `ReferencesAirportsByAirportCodeGet` - Airports
* `ReferencesAirportsNearestByLatitudeAndLongitudeGet` - Nearest Airports
* `ReferencesCitiesByCityCodeGet` - Cities
* `ReferencesCountriesByCountryCodeGet` - Countries
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
