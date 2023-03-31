# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/tomtom.com/routing/1.0.0/python
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


req = operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest(
    acceleration_efficiency=5488.14,
    arrive_at="provident",
    auxiliary_power_in_liters_per_hour=7151.9,
    avoid="quibusdam",
    callback="unde",
    constant_speed_consumption_in_liters_per_hundredkm="nulla",
    constant_speed_consumption_ink_wh_per_hundredkm="corrupti",
    content_type="jsonp",
    current_fuel_in_liters=4236.55,
    deceleration_efficiency=6235.64,
    depart_at="deserunt",
    downhill_efficiency=3843.82,
    energy_budget_ink_wh=4375.87,
    fuel_budget_in_liters=2975.34,
    fuel_energy_density_in_m_joules_per_liter=8917.73,
    hilliness="low",
    origin="delectus",
    report="effectiveSettings",
    route_type="shortest",
    time_budget_in_sec=3834.41,
    traffic=False,
    travel_mode="bus",
    uphill_efficiency=7917.25,
    vehicle_axle_weight=812169,
    vehicle_commercial=False,
    vehicle_engine_type="electric",
    vehicle_height=4799.77,
    vehicle_length=5680.45,
    vehicle_load_type="nisi",
    vehicle_max_speed=925597,
    vehicle_weight=836079,
    vehicle_width=710.36,
    version_number="1",
    windingness="normal",
)
    
res = s.routing.get_routing_version_number_calculate_reachable_range_origin_content_type_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### routing

* `get_routing_version_number_calculate_reachable_range_origin_content_type_` - Reachable Range
* `get_routing_version_number_calculate_route_locations_content_type_` - Calculate Route
* `post_routing_version_number_calculate_reachable_range_origin_content_type_json` - Reachable Range
* `post_routing_version_number_calculate_reachable_range_origin_content_type_raw` - Reachable Range
* `post_routing_version_number_calculate_route_locations_content_type_json` - Calculate Route
* `post_routing_version_number_calculate_route_locations_content_type_raw` - Calculate Route
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
