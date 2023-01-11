<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateCredentialAwsRequest(
    security=operations.CreateCredentialAwsSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateCredentialAwsCreateCredentialAwsRequest(
        account_sid="quis",
        credentials="illo",
        friendly_name="impedit",
    ),
)
    
res = s.create_credential_aws(req)

if res.accounts_v1_credential_credential_aws is not None:
    # handle response
```
<!-- End SDK Example Usage -->