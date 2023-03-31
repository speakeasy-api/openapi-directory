<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateAssetRequest(
    request_body=operations.CreateAssetCreateAssetRequest(
        friendly_name="corrupti",
    ),
    service_sid="provident",
)
    
res = s.create_asset(req, operations.CreateAssetSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.serverless_v1_service_asset is not None:
    # handle response
```
<!-- End SDK Example Usage -->