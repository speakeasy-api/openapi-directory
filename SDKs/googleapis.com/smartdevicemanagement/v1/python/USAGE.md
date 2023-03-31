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