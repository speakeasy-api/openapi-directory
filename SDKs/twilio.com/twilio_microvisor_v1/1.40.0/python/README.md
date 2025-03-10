# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_microvisor_v1/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateAccountConfigCreateAccountConfigRequest(
    key="corrupti",
    value="provident",
)
    
res = s.create_account_config(req, operations.CreateAccountConfigSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.microvisor_v1_account_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_account_config` - Create a config for an Account.
* `create_account_secret` - Create a secret for an Account.
* `create_device_config` - Create a config for a Microvisor Device.
* `create_device_secret` - Create a secret for a Microvisor Device.
* `delete_account_config` - Delete a config for an Account.
* `delete_account_secret` - Delete a secret for an Account.
* `delete_app` - Delete a specific App.
* `delete_device_config` - Delete a config for a Microvisor Device.
* `delete_device_secret` - Delete a secret for a Microvisor Device.
* `fetch_account_config` - Retrieve a Config for an Account.
* `fetch_account_secret` - Retrieve a Secret for an Account.
* `fetch_app` - Fetch a specific App.
* `fetch_app_manifest` - Retrieve the Manifest for an App.
* `fetch_device` - Fetch a specific Device.
* `fetch_device_config` - Retrieve a Config for a Device.
* `fetch_device_secret` - Retrieve a Secret for a Device.
* `list_account_config` - Retrieve a list of all Configs for an Account.
* `list_account_secret` - Retrieve a list of all Secrets for an Account.
* `list_app` - Retrieve a list of all Apps for an Account.
* `list_device` - Retrieve a list of all Devices registered with the Account.
* `list_device_config` - Retrieve a list of all Configs for a Device.
* `list_device_secret` - Retrieve a list of all Secrets for a Device.
* `update_account_config` - Update a config for an Account.
* `update_account_secret` - Update a secret for an Account.
* `update_device` - Update a specific Device.
* `update_device_config` - Update a config for a Microvisor Device.
* `update_device_secret` - Update a secret for a Microvisor Device.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
