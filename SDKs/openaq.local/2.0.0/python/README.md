# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/openaq.local/2.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.favico_favicon_ico_get()

if res.favico_favicon_ico_get_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `favico_favicon_ico_get` - Favico
* `pong_ping_get` - Pong

### v1

* `cities_getv1_v1_cities_get` - Provides a simple listing of cities within the platform
* `countries_get_v1_countries_country_id_get` - Countries Get
* `countries_getv1_v1_countries_get` - Countries Getv1
* `latest_v1_get_v1_latest_location_id_get` - Latest V1 Get
* `latest_v1_get_v1_latest_get` - Latest V1 Get
* `locationsv1_get_v1_locations_location_id_get` - Locationsv1 Get
* `locationsv1_get_v1_locations_get` - Locationsv1 Get
* `measurements_get_v1_v1_measurements_get` - Measurements Get V1
* `parameters_getv1_v1_parameters_get` - Parameters Getv1
* `sources_v1_get_v1_sources_get` - Sources V1 Get

### v2

* `averages_v2_get_v2_averages_get` - Averages V2 Get
* `cities_get_v2_cities_get` - Provides a simple listing of cities within the platform
* `countries_get_v2_countries_country_id_get` - Countries Get
* `countries_get_v2_countries_get` - Countries Get
* `demo_v2_locations_tiles_viewer_get` - Demo
* `get_mobilegentile_v2_locations_tiles_mobile_generalized_z_x_y_pbf_get` - Get Mobilegentile
* `get_mobiletile_v2_locations_tiles_mobile_z_x_y_pbf_get` - Get Mobiletile
* `get_tile_v2_locations_tiles_z_x_y_pbf_get` - Get Tile
* `latest_get_v2_latest_location_id_get` - Latest Get
* `latest_get_v2_latest_get` - Latest Get
* `locations_get_v2_locations_location_id_get` - Locations Get
* `locations_get_v2_locations_get` - Locations Get
* `measurements_get_v2_measurements_get` - Measurements Get
* `mfr_get_v2_manufacturers_get` - Mfr Get
* `mobilegentilejson_v2_locations_tiles_mobile_generalized_tiles_json_get` - Mobilegentilejson
* `mobiletilejson_v2_locations_tiles_mobile_tiles_json_get` - Mobiletilejson
* `model_get_v2_models_get` - Model Get
* `parameters_get_v2_parameters_get` - Parameters Get
* `projects_get_v2_projects_project_id_get` - Projects Get
* `projects_get_v2_projects_get` - Projects Get
* `readme_get_v2_sources_readme_slug_get` - Readme Get
* `sources_get_v2_sources_get` - Sources Get
* `summary_get_v2_summary_get` - Summary Get
* `tilejson_v2_locations_tiles_tiles_json_get` - Tilejson
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
