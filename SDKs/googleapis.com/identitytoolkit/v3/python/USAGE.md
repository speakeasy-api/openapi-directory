<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.IdentitytoolkitRelyingpartyCreateAuthURIRequest(
    identitytoolkit_relyingparty_create_auth_uri_request=shared.IdentitytoolkitRelyingpartyCreateAuthURIRequest(
        app_id="corrupti",
        auth_flow_type="provident",
        client_id="distinctio",
        context="quibusdam",
        continue_uri="unde",
        custom_parameter={
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
            "iure": "magnam",
        },
        hosted_domain="debitis",
        identifier="ipsa",
        oauth_consumer_key="delectus",
        oauth_scope="tempora",
        openid_realm="suscipit",
        ota_app="molestiae",
        provider_id="minus",
        session_id="placeat",
        tenant_id="voluptatum",
        tenant_project_number="iusto",
    ),
    alt="json",
    fields_="excepturi",
    key="nisi",
    oauth_token="recusandae",
    pretty_print=False,
    quota_user="temporibus",
    user_ip="ab",
)
    
res = s.relyingparty.identitytoolkit_relyingparty_create_auth_uri(req, operations.IdentitytoolkitRelyingpartyCreateAuthURISecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.create_auth_uri_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->