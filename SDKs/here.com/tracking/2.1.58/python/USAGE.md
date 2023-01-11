<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteAliasesV2TrackingIDRequest(
    security=operations.DeleteAliasesV2TrackingIDSecurity(
        auth_bearer=shared.SchemeAuthBearer(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.DeleteAliasesV2TrackingIDPathParams(
        tracking_id="velit",
    ),
    query_params=operations.DeleteAliasesV2TrackingIDQueryParams(
        app_id="nulla",
    ),
    headers=operations.DeleteAliasesV2TrackingIDHeaders(
        x_request_id="rerum",
        x_confirm="true",
    ),
)
    
res = s.aliases.delete_aliases_v2_tracking_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->