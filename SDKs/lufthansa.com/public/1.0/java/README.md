# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse;
import org.openapis.openapi.models.operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest req = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest("corrupti", "provident", "distinctio", "quibusdam", CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum.YNB);            

            CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse res = sdk.cargo.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet(req, new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity("nulla") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [cargo](docs/cargo/README.md)

* [cargoGetRouteFromDateProductCodeByOriginAndDestinationGet](docs/cargo/README.md#cargogetroutefromdateproductcodebyoriginanddestinationget) - Retrieve all flights
* [cargoShipmentTrackingByAWBPrefixAndAWBNumberGet](docs/cargo/README.md#cargoshipmenttrackingbyawbprefixandawbnumberget) - Shipment Tracking

### [offers](docs/offers/README.md)

* [offersLoungesByLocationGet](docs/offers/README.md#offersloungesbylocationget) - Lounges
* [offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet](docs/offers/README.md#offersseatmapsdestinationdatecabinclassbyflightnumberandoriginget) - Seat Maps

### [operations](docs/operations/README.md)

* [operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet](docs/operations/README.md#operationsflightstatusarrivalsbyairportcodeandfromdatetimeget) - Flight Status at Arrival Airport
* [operationsFlightstatusByFlightNumberAndDateGet](docs/operations/README.md#operationsflightstatusbyflightnumberanddateget) - Flight Status
* [operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet](docs/operations/README.md#operationsflightstatusdeparturesbyairportcodeandfromdatetimeget) - Flight Status at Departure Airport
* [operationsFlightstatusRouteDateByOriginAndDestinationGet](docs/operations/README.md#operationsflightstatusroutedatebyoriginanddestinationget) - Flight Status by Route
* [operationsSchedulesFromDateTimeByOriginAndDestinationGet](docs/operations/README.md#operationsschedulesfromdatetimebyoriginanddestinationget) - Flight Schedules

### [referenceData](docs/referencedata/README.md)

* [referencesAircraftByAircraftCodeGet](docs/referencedata/README.md#referencesaircraftbyaircraftcodeget) - Aircraft
* [referencesAirlinesByAirlineCodeGet](docs/referencedata/README.md#referencesairlinesbyairlinecodeget) - Airlines
* [referencesAirportsByAirportCodeGet](docs/referencedata/README.md#referencesairportsbyairportcodeget) - Airports
* [referencesAirportsNearestByLatitudeAndLongitudeGet](docs/referencedata/README.md#referencesairportsnearestbylatitudeandlongitudeget) - Nearest Airports
* [referencesCitiesByCityCodeGet](docs/referencedata/README.md#referencescitiesbycitycodeget) - Cities
* [referencesCountriesByCountryCodeGet](docs/referencedata/README.md#referencescountriesbycountrycodeget) - Countries
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
