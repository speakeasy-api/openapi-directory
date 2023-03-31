<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudbillingBillingAccountsCreateRequest(
    dollar_xgafv="2",
    billing_account_input=shared.BillingAccountInput(
        display_name="provident",
        master_billing_account="distinctio",
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.billing_accounts.cloudbilling_billing_accounts_create(req, operations.CloudbillingBillingAccountsCreateSecurity(
    option1=operations.CloudbillingBillingAccountsCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.billing_account is not None:
    # handle response
```
<!-- End SDK Example Usage -->