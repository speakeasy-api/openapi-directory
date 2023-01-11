<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest(
    security=operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity(
        option1=operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams(
        parent="sed",
    ),
    query_params=operations.CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams(
        dollar_xgafv="1",
        access_token="et",
        alt="proto",
        callback="quasi",
        fields="pariatur",
        key="eius",
        oauth_token="soluta",
        pretty_print=True,
        quota_user="ex",
        upload_type="eos",
        upload_protocol="ratione",
    ),
    request=shared.BindDeviceToGatewayRequest(
        device_id="amet",
        gateway_id="ipsam",
    ),
)
    
res = s.projects.cloudiot_projects_locations_registries_bind_device_to_gateway(req)

if res.bind_device_to_gateway_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->