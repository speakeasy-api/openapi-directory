# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/meteosource.com/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FindPlacesFindPlacesGetRequest(
    key="corrupti",
    language="fr",
    text="distinctio",
)
    
res = s.location_endpoints.find_places_find_places_get(req, operations.FindPlacesFindPlacesGetSecurity(
    api_key_header="YOUR_API_KEY_HERE",
))

if res.find_places_models is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### location_endpoints

* `find_places_find_places_get` - Search for places. Complete words required.
* `find_places_prefix_find_places_prefix_get` - Prefix search for places. Useful for autocomplete forms.
* `nearest_place_nearest_place_get` - Returns the nearest named location for a given GPS coordinates.

### point_weather

* `air_quality_air_quality_get` - Returns air quality data for a single point (geographic name or GPS)
* `point_point_get` - Returns weather data for a single point (geographic name or GPS)

### time_machine_historical_weather

* `time_machine_time_machine_get` - Returns weather data for a single location and given day in the past

### weather_maps

* `map_map_get` - Returns PNG weather map for given area and variable
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
