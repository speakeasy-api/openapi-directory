<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateDeployedDevicesCertificateRequest(
    security=operations.CreateDeployedDevicesCertificateSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateDeployedDevicesCertificatePathParams(
        fleet_sid="unde",
    ),
    request=operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest(
        certificate_data="odio",
        device_sid="ab",
        friendly_name="dolor",
    ),
)
    
res = s.create_deployed_devices_certificate(req)

if res.preview_deployed_devices_fleet_certificate is not None:
    # handle response
```
<!-- End SDK Example Usage -->