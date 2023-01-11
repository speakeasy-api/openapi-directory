<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudbillingBillingAccountsCreateRequest(
    security=operations.CloudbillingBillingAccountsCreateSecurity(
        option1=operations.CloudbillingBillingAccountsCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.CloudbillingBillingAccountsCreateQueryParams(
        dollar_xgafv="2",
        access_token="tempore",
        alt="proto",
        callback="dolores",
        fields="quia",
        key="voluptatum",
        oauth_token="provident",
        pretty_print=True,
        quota_user="ex",
        upload_type="animi",
        upload_protocol="asperiores",
    ),
    request=shared.BillingAccountInput(
        display_name="qui",
        master_billing_account="earum",
    ),
)
    
res = s.billing_accounts.cloudbilling_billing_accounts_create(req)

if res.billing_account is not None:
    # handle response
```
<!-- End SDK Example Usage -->