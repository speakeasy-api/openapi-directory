<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MybusinessaccountmanagementAccountsCreateRequest(
    dollar_xgafv="2",
    account_input=shared.AccountInput(
        account_name="provident",
        name="distinctio",
        organization_info=shared.OrganizationInfoInput(
            address=shared.PostalAddress(
                address_lines=[
                    "unde",
                    "nulla",
                    "corrupti",
                    "illum",
                ],
                administrative_area="vel",
                language_code="error",
                locality="deserunt",
                organization="suscipit",
                postal_code="28092",
                recipients=[
                    "molestiae",
                    "minus",
                ],
                region_code="placeat",
                revision=528895,
                sorting_code="iusto",
                sublocality="excepturi",
            ),
        ),
        primary_owner="nisi",
        type="ORGANIZATION",
    ),
    access_token="temporibus",
    alt="json",
    callback="quis",
    fields_="veritatis",
    key="deserunt",
    oauth_token="perferendis",
    pretty_print=False,
    quota_user="ipsam",
    upload_type="repellendus",
    upload_protocol="sapiente",
)
    
res = s.accounts.mybusinessaccountmanagement_accounts_create(req)

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->