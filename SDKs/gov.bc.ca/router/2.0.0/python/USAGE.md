<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apikey="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetDirectionsOutputFormatRequest(
    correct_side=False,
    criteria="fastest",
    departure="2021-07-27T21:52:56.087Z",
    disable="quibusdam",
    distance_unit="mi",
    output_format="html",
    output_srs="26908",
    points="illum",
    round_trip=False,
    route_description="vel",
)
    
res = s.directions.get_directions_output_format_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->