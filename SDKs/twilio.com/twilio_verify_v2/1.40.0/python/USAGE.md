<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateAccessTokenRequest(
    request_body=operations.CreateAccessTokenCreateAccessTokenRequest(
        factor_friendly_name="corrupti",
        factor_type="push",
        identity="provident",
        ttl=715190,
    ),
    service_sid="quibusdam",
)
    
res = s.create_access_token(req, operations.CreateAccessTokenSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.verify_v2_service_access_token is not None:
    # handle response
```
<!-- End SDK Example Usage -->