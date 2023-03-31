<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteAccountAccessConsentsConsentIDRequest(
    consent_id="corrupti",
    sandbox_id="provident",
    x_customer_user_agent="distinctio",
    x_fapi_auth_date="quibusdam",
    x_fapi_customer_ip_address="unde",
    x_fapi_interaction_id="nulla",
)
    
res = s.account_access.delete_account_access_consents_consent_id_(req, operations.DeleteAccountAccessConsentsConsentIDSecurity(
    client_credentials_token="Bearer YOUR_ACCESS_TOKEN_HERE",
    client_id="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->