# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nexmo.com/external-accounts/0.1.5/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAllAccountsRequest(
    page_number=1,
    page_size=1,
    provider="viber_service_msg",
)
    
res = s.account.get_all_accounts(req, operations.GetAllAccountsSecurity(
    basic_auth=shared.SchemeBasicAuth(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
))

if res.get_all_accounts_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### account

* `get_all_accounts` - Retrieve all accounts you own

### application

* `link_application` - Link application to an account
* `unli_without_applicationnk_application` - Unlink application from an account

### facebook_messenger

* `create_messenger_account` - Create a Messenger account
* `delete_messenger_account` - Delete a Messenger account
* `get_messenger_account` - Retrieve a Messenger account
* `update_messenger_account` - Update a Messenger account

### viber_service_message

* `get_vsm_account` - Retrieve a Viber Service Message account

### whats_app

* `get_wa_account` - Retrieve a Whatsapp account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
