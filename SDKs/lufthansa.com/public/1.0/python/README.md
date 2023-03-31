# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/lufthansa.com/public/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest(
    accept="corrupti",
    destination="provident",
    from_date="distinctio",
    origin="quibusdam",
    product_code="YNB",
)
    
res = s.cargo.cargo_get_route_from_date_product_code_by_origin_and_destination_get(req, operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity(
    auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.cargo_get_route_from_date_product_code_by_origin_and_destination_get_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### cargo

* `cargo_get_route_from_date_product_code_by_origin_and_destination_get` - Retrieve all flights
* `cargo_shipment_tracking_by_awb_prefix_and_awb_number_get` - Shipment Tracking

### offers

* `offers_lounges_by_location_get` - Lounges
* `offers_seatmaps_destination_date_cabin_class_by_flight_number_and_origin_get` - Seat Maps

### operations

* `operations_flightstatus_arrivals_by_airport_code_and_from_date_time_get` - Flight Status at Arrival Airport
* `operations_flightstatus_by_flight_number_and_date_get` - Flight Status
* `operations_flightstatus_departures_by_airport_code_and_from_date_time_get` - Flight Status at Departure Airport
* `operations_flightstatus_route_date_by_origin_and_destination_get` - Flight Status by Route
* `operations_schedules_from_date_time_by_origin_and_destination_get` - Flight Schedules

### reference_data

* `references_aircraft_by_aircraft_code_get` - Aircraft
* `references_airlines_by_airline_code_get` - Airlines
* `references_airports_by_airport_code_get` - Airports
* `references_airports_nearest_by_latitude_and_longitude_get` - Nearest Airports
* `references_cities_by_city_code_get` - Cities
* `references_countries_by_country_code_get` - Countries
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
