<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetDirectionsOutputFormatRequest(
    path_params=operations.GetDirectionsOutputFormatPathParams(
        output_format="kml",
    ),
    query_params=operations.GetDirectionsOutputFormatQueryParams(
        correct_side=False,
        criteria="shortest",
        departure="2012-09-29T14:14:23Z",
        disable="quia",
        distance_unit="mi",
        output_srs=2629240772588096916,
        points="distinctio",
        round_trip=False,
        route_description="nesciunt",
    ),
)
    
res = s.directions.get_directions_output_format_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->