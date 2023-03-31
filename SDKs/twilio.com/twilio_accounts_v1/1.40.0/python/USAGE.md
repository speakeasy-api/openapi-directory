<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateCredentialAwsCreateCredentialAwsRequest(
    account_sid="corrupti",
    credentials="provident",
    friendly_name="distinctio",
)
    
res = s.create_credential_aws(req, operations.CreateCredentialAwsSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.accounts_v1_credential_credential_aws is not None:
    # handle response
```
<!-- End SDK Example Usage -->