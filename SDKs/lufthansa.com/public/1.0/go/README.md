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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cargo.CargoGetRouteFromDateProductCodeByOriginAndDestinationGet(ctx, operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest{
        Accept: "corrupti",
        Destination: "provident",
        FromDate: "distinctio",
        Origin: "quibusdam",
        ProductCode: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumYnb,
    }, operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity{
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


### [Cargo](docs/cargo/README.md)

* [CargoGetRouteFromDateProductCodeByOriginAndDestinationGet](docs/cargo/README.md#cargogetroutefromdateproductcodebyoriginanddestinationget) - Retrieve all flights
* [CargoShipmentTrackingByAWBPrefixAndAWBNumberGet](docs/cargo/README.md#cargoshipmenttrackingbyawbprefixandawbnumberget) - Shipment Tracking

### [Offers](docs/offers/README.md)

* [OffersLoungesByLocationGet](docs/offers/README.md#offersloungesbylocationget) - Lounges
* [OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet](docs/offers/README.md#offersseatmapsdestinationdatecabinclassbyflightnumberandoriginget) - Seat Maps

### [Operations](docs/operations/README.md)

* [OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet](docs/operations/README.md#operationsflightstatusarrivalsbyairportcodeandfromdatetimeget) - Flight Status at Arrival Airport
* [OperationsFlightstatusByFlightNumberAndDateGet](docs/operations/README.md#operationsflightstatusbyflightnumberanddateget) - Flight Status
* [OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet](docs/operations/README.md#operationsflightstatusdeparturesbyairportcodeandfromdatetimeget) - Flight Status at Departure Airport
* [OperationsFlightstatusRouteDateByOriginAndDestinationGet](docs/operations/README.md#operationsflightstatusroutedatebyoriginanddestinationget) - Flight Status by Route
* [OperationsSchedulesFromDateTimeByOriginAndDestinationGet](docs/operations/README.md#operationsschedulesfromdatetimebyoriginanddestinationget) - Flight Schedules

### [ReferenceData](docs/referencedata/README.md)

* [ReferencesAircraftByAircraftCodeGet](docs/referencedata/README.md#referencesaircraftbyaircraftcodeget) - Aircraft
* [ReferencesAirlinesByAirlineCodeGet](docs/referencedata/README.md#referencesairlinesbyairlinecodeget) - Airlines
* [ReferencesAirportsByAirportCodeGet](docs/referencedata/README.md#referencesairportsbyairportcodeget) - Airports
* [ReferencesAirportsNearestByLatitudeAndLongitudeGet](docs/referencedata/README.md#referencesairportsnearestbylatitudeandlongitudeget) - Nearest Airports
* [ReferencesCitiesByCityCodeGet](docs/referencedata/README.md#referencescitiesbycitycodeget) - Cities
* [ReferencesCountriesByCountryCodeGet](docs/referencedata/README.md#referencescountriesbycountrycodeget) - Countries
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
