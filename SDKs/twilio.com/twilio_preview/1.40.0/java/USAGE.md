<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateSecurity;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeployedDevicesCertificateRequest req = new CreateDeployedDevicesCertificateRequest() {{
                fleetSid = "corrupti";
                requestBody = new CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest() {{
                    certificateData = "provident";
                    deviceSid = "distinctio";
                    friendlyName = "quibusdam";
                }};
            }}            

            CreateDeployedDevicesCertificateResponse res = sdk.createDeployedDevicesCertificate(req, new CreateDeployedDevicesCertificateSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetCertificate.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->