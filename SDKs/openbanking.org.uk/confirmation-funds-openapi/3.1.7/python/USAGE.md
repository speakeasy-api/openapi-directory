<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateFundsConfirmationConsentsRequest(
    authorization="corrupti",
    ob_funds_confirmation_consent1=shared.OBFundsConfirmationConsent1(
        data=shared.OBFundsConfirmationConsent1Data(
            debtor_account=shared.OBFundsConfirmationConsent1DataDebtorAccount(
                identification="provident",
                name="distinctio",
                scheme_name="quibusdam",
                secondary_identification="unde",
            ),
            expiration_date_time="2021-05-14T08:28:11.899Z",
        ),
    ),
    x_customer_user_agent="illum",
    x_fapi_auth_date="vel",
    x_fapi_customer_ip_address="error",
    x_fapi_interaction_id="deserunt",
)
    
res = s.funds_confirmations.create_funds_confirmation_consents(req, operations.CreateFundsConfirmationConsentsSecurity(
    tppo_auth2_security="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.ob_funds_confirmation_consent_response1 is not None:
    # handle response
```
<!-- End SDK Example Usage -->