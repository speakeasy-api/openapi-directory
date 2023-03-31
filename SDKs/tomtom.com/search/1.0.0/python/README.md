# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/tomtom.com/search/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetSearchVersionNumberAdditionalDataExtRequest(
    ext="json",
    geometries="corrupti",
    geometries_zoom="13",
    version_number="2",
)
    
res = s.additional_data.get_search_version_number_additional_data_ext_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### additional_data

* `get_search_version_number_additional_data_ext_` - Additional Data

### filters

* `get_search_version_number_geometry_filter_ext_` - Geometry Filter
* `get_search_version_number_routed_filter_position_heading_ext_` - Routed Filter
* `post_search_version_number_geometry_filter_ext_` - Geometry Filter
* `post_search_version_number_routed_filter_position_heading_ext_` - Routed Filter

### geocoding

* `get_search_version_number_geocode_query_ext_` - Geocode
* `get_search_version_number_structured_geocode_ext_` - Structured Geocode

### reverse_geocoding

* `get_search_version_number_reverse_geocode_cross_street_position_ext_` - Cross Street lookup
* `get_search_version_number_reverse_geocode_position_ext_` - Reverse Geocode

### search

* `get_search_version_number_c_s_category_ext_` - Low Bandwith Category Search
* `get_search_version_number_category_search_query_ext_` - Category Search
* `get_search_version_number_geometry_search_query_ext_` - Geometry Search
* `get_search_version_number_nearby_search_ext_` - Nearby Search
* `get_search_version_number_poi_search_query_ext_` - Points of Interest Search
* `get_search_version_number_routed_search_query_position_heading_ext_` - Routed Search
* `get_search_version_number_s_query_ext_` - Low bandwith Search
* `get_search_version_number_search_query_ext_` - Fuzzy Search
* `post_search_version_number_geometry_search_query_ext_` - Geometry Search
* `post_search_version_number_search_along_route_query_ext_` - Along Route Search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
