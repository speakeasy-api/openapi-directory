<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MybusinessAccountsCreateRequest(
    query_params=operations.MybusinessAccountsCreateQueryParams(
        dollar_xgafv="1",
        access_token="quas",
        alt="json",
        callback="quasi",
        fields="modi",
        key="blanditiis",
        oauth_token="hic",
        pretty_print=True,
        primary_owner="perferendis",
        quota_user="voluptatem",
        upload_type="quia",
        upload_protocol="animi",
    ),
    request=shared.Account(
        account_name="ea",
        account_number="velit",
        name="ratione",
        organization_info=shared.OrganizationInfo(
            phone_number="et",
            postal_address=shared.PostalAddress(
                address_lines=[
                    "repellendus",
                    "enim",
                    "veritatis",
                ],
                administrative_area="quidem",
                language_code="ut",
                locality="porro",
                organization="voluptatem",
                postal_code="saepe",
                recipients=[
                    "esse",
                ],
                region_code="quibusdam",
                revision=5367062260347718474,
                sorting_code="deleniti",
                sublocality="debitis",
            ),
            registered_domain="assumenda",
        ),
        permission_level="PERMISSION_LEVEL_UNSPECIFIED",
        role="COMMUNITY_MANAGER",
        state=shared.AccountState(
            status="VERIFICATION_REQUESTED",
        ),
        type="PERSONAL",
    ),
)
    
res = s.accounts.mybusiness_accounts_create(req)

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->