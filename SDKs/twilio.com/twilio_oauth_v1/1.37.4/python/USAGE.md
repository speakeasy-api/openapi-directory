<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateTokenRequest(
    security=operations.CreateTokenSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateTokenCreateTokenRequest(
        client_secret="impedit",
        client_sid="similique",
        code="omnis",
        code_verifier="autem",
        device_code="nam",
        device_id="quidem",
        grant_type="velit",
        refresh_token="voluptatem",
    ),
)
    
res = s.create_token(req)

if res.oauth_v1_token is not None:
    # handle response
```
<!-- End SDK Example Usage -->