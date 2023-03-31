<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateDeployedDevicesCertificateRequest(
    fleet_sid="corrupti",
    request_body=operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest(
        certificate_data="provident",
        device_sid="distinctio",
        friendly_name="quibusdam",
    ),
)
    
res = s.create_deployed_devices_certificate(req, operations.CreateDeployedDevicesCertificateSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.preview_deployed_devices_fleet_certificate is not None:
    # handle response
```
<!-- End SDK Example Usage -->