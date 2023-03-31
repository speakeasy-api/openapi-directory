<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.Adexchangebuyer2AccountsClientsCreateRequest(
    dollar_xgafv="2",
    client=shared.Client(
        client_account_id="provident",
        client_name="distinctio",
        entity_id="quibusdam",
        entity_name="unde",
        entity_type="ENTITY_TYPE_UNCLASSIFIED",
        partner_client_id="corrupti",
        role="CLIENT_DEAL_APPROVER",
        status="DISABLED",
        visible_to_seller=False,
    ),
    access_token="error",
    account_id="deserunt",
    alt="media",
    callback="iure",
    fields_="magnam",
    key="debitis",
    oauth_token="ipsa",
    pretty_print=False,
    quota_user="delectus",
    upload_type="tempora",
    upload_protocol="suscipit",
)
    
res = s.accounts.adexchangebuyer2_accounts_clients_create(req, operations.Adexchangebuyer2AccountsClientsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.client is not None:
    # handle response
```
<!-- End SDK Example Usage -->