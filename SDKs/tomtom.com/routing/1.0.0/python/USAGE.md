<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest(
    path_params=operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams(
        content_type="xml",
        origin="ullam",
        version_number=3739928040947553297,
    ),
    query_params=operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams(
        acceleration_efficiency=48.099998,
        arrive_at="necessitatibus",
        auxiliary_power_in_liters_per_hour=47.200001,
        avoid="voluptates",
        callback="rem",
        constant_speed_consumption_in_liters_per_hundredkm="dolores",
        constant_speed_consumption_ink_wh_per_hundredkm="impedit",
        current_fuel_in_liters=68.199997,
        deceleration_efficiency=66.099998,
        depart_at="et",
        downhill_efficiency=83.099998,
        energy_budget_ink_wh=25.100000,
        fuel_budget_in_liters=66.199997,
        fuel_energy_density_in_m_joules_per_liter=71.199997,
        hilliness="high",
        report="effectiveSettings",
        route_type="fastest",
        time_budget_in_sec=99.199997,
        traffic=False,
        travel_mode="truck",
        uphill_efficiency=58.200001,
        vehicle_axle_weight=6129931533401555651,
        vehicle_commercial=True,
        vehicle_engine_type="electric",
        vehicle_height=70.199997,
        vehicle_length=80.199997,
        vehicle_load_type="accusamus",
        vehicle_max_speed=8579507900689632853,
        vehicle_weight=4912381578407625911,
        vehicle_width=25.200001,
        windingness="high",
    ),
)
    
res = s.routing.get_routing_version_number_calculate_reachable_range_origin_content_type_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->