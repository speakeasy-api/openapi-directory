<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.TagmanagerAccountsContainersCreateRequest(
    dollar_xgafv="2",
    container=shared.Container(
        account_id="provident",
        container_id="distinctio",
        domain_name=[
            "unde",
            "nulla",
            "corrupti",
            "illum",
        ],
        enabled_built_in_variable=[
            "ampGtmEvent",
            "firebaseEventParameterCampaign",
        ],
        fingerprint="suscipit",
        name="iure",
        notes="magnam",
        public_id="debitis",
        time_zone_country_id="ipsa",
        time_zone_id="delectus",
        usage_context=[
            "ios",
            "ios",
        ],
    ),
    access_token="minus",
    account_id="placeat",
    alt="media",
    callback="iusto",
    fields_="excepturi",
    key="nisi",
    oauth_token="recusandae",
    pretty_print=False,
    quota_user="temporibus",
    upload_type="ab",
    upload_protocol="quis",
)
    
res = s.accounts.tagmanager_accounts_containers_create(req, operations.TagmanagerAccountsContainersCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.container is not None:
    # handle response
```
<!-- End SDK Example Usage -->