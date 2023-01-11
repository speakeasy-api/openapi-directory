<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest(
    security=operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams(
        name="facilis",
    ),
    query_params=operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandQueryParams(
        dollar_xgafv="2",
        access_token="vero",
        alt="media",
        callback="quia",
        fields="dolorem",
        key="et",
        oauth_token="doloremque",
        pretty_print=False,
        quota_user="delectus",
        upload_type="nemo",
        upload_protocol="consequatur",
    ),
    request=shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest(
        command="laudantium",
        params={
            "earum": "est",
        },
    ),
)
    
res = s.enterprises.smartdevicemanagement_enterprises_devices_execute_command(req)

if res.google_home_enterprise_sdm_v1_execute_device_command_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->