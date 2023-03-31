<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest(
    aerodromes_by_distance=shared.AerodromesByDistance(
        distance=592845,
        latitude=844266,
        longitude=857946,
    ),
    x_api_key="corrupti",
)
    
res = s.aerodromes.aerodromes_by_distance_us_v1_aerodromes_distance_query_post(req)

if res.aerodrome_distance_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->