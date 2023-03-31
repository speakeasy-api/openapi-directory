<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest(
    dollar_xgafv="2",
    bind_device_to_gateway_request=shared.BindDeviceToGatewayRequest(
        device_id="provident",
        gateway_id="distinctio",
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    parent="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.projects.cloudiot_projects_locations_registries_bind_device_to_gateway(req, operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity(
    option1=operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.bind_device_to_gateway_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->