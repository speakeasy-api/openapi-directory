<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.IdentitytoolkitRelyingpartyCreateAuthURIRequest(
    security=operations.IdentitytoolkitRelyingpartyCreateAuthURISecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.IdentitytoolkitRelyingpartyCreateAuthURIQueryParams(
        alt="json",
        fields="provident",
        key="maxime",
        oauth_token="error",
        pretty_print=True,
        quota_user="quaerat",
        user_ip="omnis",
    ),
    request=shared.IdentitytoolkitRelyingpartyCreateAuthURIRequest(
        app_id="et",
        auth_flow_type="sed",
        client_id="dolorum",
        context="numquam",
        continue_uri="nostrum",
        custom_parameter={
            "autem": "harum",
            "veritatis": "in",
        },
        hosted_domain="totam",
        identifier="aut",
        oauth_consumer_key="dolores",
        oauth_scope="temporibus",
        openid_realm="molestias",
        ota_app="fugit",
        provider_id="quae",
        session_id="sed",
        tenant_id="voluptate",
        tenant_project_number="autem",
    ),
)
    
res = s.relyingparty.identitytoolkit_relyingparty_create_auth_uri(req)

if res.create_auth_uri_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->