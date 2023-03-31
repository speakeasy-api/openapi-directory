# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/identitytoolkit/v3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### relyingparty

* `identitytoolkit_relyingparty_create_auth_uri` - Creates the URI used by the IdP to authenticate the user.
* `identitytoolkit_relyingparty_delete_account` - Delete user account.
* `identitytoolkit_relyingparty_download_account` - Batch download user accounts.
* `identitytoolkit_relyingparty_email_link_signin` - Reset password for a user.
* `identitytoolkit_relyingparty_get_account_info` - Returns the account info.
* `identitytoolkit_relyingparty_get_oob_confirmation_code` - Get a code for user action confirmation.
* `identitytoolkit_relyingparty_get_project_config` - Get project configuration.
* `identitytoolkit_relyingparty_get_public_keys` - Get token signing public key.
* `identitytoolkit_relyingparty_get_recaptcha_param` - Get recaptcha secure param.
* `identitytoolkit_relyingparty_reset_password` - Reset password for a user.
* `identitytoolkit_relyingparty_send_verification_code` - Send SMS verification code.
* `identitytoolkit_relyingparty_set_account_info` - Set account info for a user.
* `identitytoolkit_relyingparty_set_project_config` - Set project configuration.
* `identitytoolkit_relyingparty_sign_out_user` - Sign out user.
* `identitytoolkit_relyingparty_signup_new_user` - Signup new user.
* `identitytoolkit_relyingparty_upload_account` - Batch upload existing user accounts.
* `identitytoolkit_relyingparty_verify_assertion` - Verifies the assertion returned by the IdP.
* `identitytoolkit_relyingparty_verify_custom_token` - Verifies the developer asserted ID token.
* `identitytoolkit_relyingparty_verify_password` - Verifies the user entered password.
* `identitytoolkit_relyingparty_verify_phone_number` - Verifies ownership of a phone number and creates/updates the user account accordingly.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
