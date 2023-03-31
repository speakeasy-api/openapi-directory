<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer="YOUR_API_KEY_HERE",
    ),
)


req = operations.AquiferCodesDemandListRequest(
    limit=548814,
    offset=592845,
)
    
res = s.aquifer_codes.aquifer_codes_demand_list(req)

if res.aquifer_codes_demand_list_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->