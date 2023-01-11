<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateAssetRequest(
    security=operations.CreateAssetSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateAssetPathParams(
        service_sid="sint",
    ),
    request=operations.CreateAssetCreateAssetRequest(
        friendly_name="corrupti",
    ),
)
    
res = s.create_asset(req)

if res.serverless_v1_service_asset is not None:
    # handle response
```
<!-- End SDK Example Usage -->