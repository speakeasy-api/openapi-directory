# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_wireless_v1/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateCommandCreateCommandRequest(
    callback_method="PATCH",
    callback_url="https://salty-stag.name",
    command="nulla",
    command_mode="binary",
    delivery_receipt_requested=False,
    include_sid="illum",
    sim="vel",
)
    
res = s.create_command(req, operations.CreateCommandSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.wireless_v1_command is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_command` - Send a Command to a Sim.
* `create_rate_plan`
* `delete_command` - Delete a Command instance from your account.
* `delete_rate_plan`
* `delete_sim` - Delete a Sim resource on your Account.
* `fetch_command` - Fetch a Command instance from your account.
* `fetch_rate_plan`
* `fetch_sim` - Fetch a Sim resource on your Account.
* `list_account_usage_record`
* `list_command` - Retrieve a list of Commands from your account.
* `list_data_session`
* `list_rate_plan`
* `list_sim` - Retrieve a list of Sim resources on your Account.
* `list_usage_record`
* `update_rate_plan`
* `update_sim` - Updates the given properties of a Sim resource on your Account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
