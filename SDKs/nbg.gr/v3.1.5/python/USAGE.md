<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteAccountAccessConsentsConsentIDRequest(
    security=operations.DeleteAccountAccessConsentsConsentIDSecurity(
        client_credentials_token=shared.SchemeClientCredentialsToken(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.DeleteAccountAccessConsentsConsentIDPathParams(
        consent_id="vel",
    ),
    headers=operations.DeleteAccountAccessConsentsConsentIDHeaders(
        sandbox_id="aut",
        x_customer_user_agent="quos",
        x_fapi_auth_date="non",
        x_fapi_customer_ip_address="culpa",
        x_fapi_interaction_id="sit",
    ),
)
    
res = s.account_access.delete_account_access_consents_consent_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->