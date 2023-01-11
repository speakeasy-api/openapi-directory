<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeparturesGetForStopRequest(
    path_params=operations.DeparturesGetForStopPathParams(
        route_type=1875779757757656623,
        stop_id=158847938390706278,
    ),
    query_params=operations.DeparturesGetForStopQueryParams(
        date_utc="2010-04-18T02:08:53Z",
        devid="reiciendis",
        direction_id=987590293786385272,
        expand=[
            "Direction",
        ],
        gtfs=False,
        include_cancelled=True,
        include_geopath=True,
        look_backwards=False,
        max_results=638447667090541478,
        platform_numbers=[
            4289703848110996868,
            684912401521822353,
        ],
        signature="natus",
        token="non",
    ),
)
    
res = s.departures.departures_get_for_stop(req)

if res.v3_departures_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->