# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/smartdevicemanagement/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest(
    dollar_xgafv="2",
    google_home_enterprise_sdm_v1_execute_device_command_request=shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest(
        command="provident",
        params={
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
        },
    ),
    access_token="error",
    alt="media",
    callback="suscipit",
    fields_="iure",
    key="magnam",
    name="debitis",
    oauth_token="ipsa",
    pretty_print=False,
    quota_user="delectus",
    upload_type="tempora",
    upload_protocol="suscipit",
)
    
res = s.enterprises.smartdevicemanagement_enterprises_devices_execute_command(req, operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_home_enterprise_sdm_v1_execute_device_command_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### enterprises

* `smartdevicemanagement_enterprises_devices_execute_command` - Executes a command to device managed by the enterprise.
* `smartdevicemanagement_enterprises_devices_list` - Lists devices managed by the enterprise.
* `smartdevicemanagement_enterprises_structures_list` - Lists structures managed by the enterprise.
* `smartdevicemanagement_enterprises_structures_rooms_get` - Gets a room managed by the enterprise.
* `smartdevicemanagement_enterprises_structures_rooms_list` - Lists rooms managed by the enterprise.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
