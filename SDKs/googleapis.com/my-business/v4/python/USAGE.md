<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MybusinessAccountsCreateRequest(
    dollar_xgafv="2",
    account=shared.Account(
        account_name="provident",
        account_number="distinctio",
        name="quibusdam",
        organization_info=shared.OrganizationInfo(
            phone_number="unde",
            postal_address=shared.PostalAddress(
                address_lines=[
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                ],
                administrative_area="deserunt",
                language_code="suscipit",
                locality="iure",
                organization="magnam",
                postal_code="09234-7854",
                recipients=[
                    "nisi",
                    "recusandae",
                    "temporibus",
                ],
                region_code="ab",
                revision=337396,
                sorting_code="veritatis",
                sublocality="deserunt",
            ),
            registered_domain="perferendis",
        ),
        permission_level="OWNER_LEVEL",
        role="COMMUNITY_MANAGER",
        state=shared.AccountState(
            status="VERIFICATION_REQUESTED",
        ),
        type="USER_GROUP",
    ),
    access_token="odit",
    alt="proto",
    callback="at",
    fields_="maiores",
    key="molestiae",
    oauth_token="quod",
    pretty_print=False,
    primary_owner="quod",
    quota_user="esse",
    upload_type="totam",
    upload_protocol="porro",
)
    
res = s.accounts.mybusiness_accounts_create(req)

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->