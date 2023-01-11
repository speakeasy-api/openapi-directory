<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.Adexchangebuyer2AccountsClientsCreateRequest(
    security=operations.Adexchangebuyer2AccountsClientsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.Adexchangebuyer2AccountsClientsCreatePathParams(
        account_id="a",
    ),
    query_params=operations.Adexchangebuyer2AccountsClientsCreateQueryParams(
        dollar_xgafv="2",
        access_token="excepturi",
        alt="json",
        callback="qui",
        fields="quam",
        key="dolores",
        oauth_token="autem",
        pretty_print=False,
        quota_user="minima",
        upload_type="est",
        upload_protocol="minus",
    ),
    request=shared.Client(
        client_account_id="veniam",
        client_name="dignissimos",
        entity_id="voluptas",
        entity_name="nostrum",
        entity_type="ENTITY_TYPE_UNCLASSIFIED",
        partner_client_id="repellat",
        role="CLIENT_DEAL_VIEWER",
        status="CLIENT_STATUS_UNSPECIFIED",
        visible_to_seller=True,
    ),
)
    
res = s.accounts.adexchangebuyer2_accounts_clients_create(req)

if res.client is not None:
    # handle response
```
<!-- End SDK Example Usage -->