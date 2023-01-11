<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateAccessTokenRequest(
    security=operations.CreateAccessTokenSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateAccessTokenPathParams(
        service_sid="repudiandae",
    ),
    request=operations.CreateAccessTokenCreateAccessTokenRequest(
        factor_friendly_name="quia",
        factor_type="push",
        identity="voluptates",
        ttl=7097089687154157495,
    ),
)
    
res = s.create_access_token(req)

if res.verify_v2_service_access_token is not None:
    # handle response
```
<!-- End SDK Example Usage -->