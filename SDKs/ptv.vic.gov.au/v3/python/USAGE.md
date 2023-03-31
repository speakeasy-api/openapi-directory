<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeparturesGetForStopRequest(
    date_utc="2021-10-25T05:21:43.948Z",
    devid="distinctio",
    direction_id=844266,
    expand=[
        "VehiclePosition",
        "Direction",
        "VehiclePosition",
    ],
    gtfs=False,
    include_cancelled=False,
    include_geopath=False,
    look_backwards=False,
    max_results=423655,
    platform_numbers=[
        645894,
        384382,
        437587,
    ],
    route_type="1",
    signature="debitis",
    stop_id=56713,
    token="delectus",
)
    
res = s.departures.departures_get_for_stop(req)

if res.v3_departures_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->