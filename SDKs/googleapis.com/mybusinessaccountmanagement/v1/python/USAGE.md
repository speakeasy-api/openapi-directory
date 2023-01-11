<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MybusinessaccountmanagementAccountsCreateRequest(
    query_params=operations.MybusinessaccountmanagementAccountsCreateQueryParams(
        dollar_xgafv="1",
        access_token="atque",
        alt="proto",
        callback="nobis",
        fields="quod",
        key="ipsam",
        oauth_token="quibusdam",
        pretty_print=False,
        quota_user="itaque",
        upload_type="quae",
        upload_protocol="aliquid",
    ),
    request=shared.AccountInput(
        account_name="ut",
        name="magni",
        organization_info=shared.OrganizationInfoInput(
            address=shared.PostalAddress(
                address_lines=[
                    "facilis",
                    "fugiat",
                ],
                administrative_area="dolorem",
                language_code="quas",
                locality="sed",
                organization="quo",
                postal_code="cum",
                recipients=[
                    "culpa",
                    "omnis",
                ],
                region_code="sit",
                revision=5851310603061245360,
                sorting_code="totam",
                sublocality="magnam",
            ),
        ),
        primary_owner="culpa",
        type="USER_GROUP",
    ),
)
    
res = s.accounts.mybusinessaccountmanagement_accounts_create(req)

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->