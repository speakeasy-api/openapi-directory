<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateSecurity;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificatePathParams;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeployedDevicesCertificateRequest req = new CreateDeployedDevicesCertificateRequest() {{
                security = new CreateDeployedDevicesCertificateSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateDeployedDevicesCertificatePathParams() {{
                    fleetSid = "corrupti";
                }};
                request = new CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest() {{
                    certificateData = "provident";
                    deviceSid = "distinctio";
                    friendlyName = "quibusdam";
                }};
            }};            

            CreateDeployedDevicesCertificateResponse res = sdk.createDeployedDevicesCertificate(req);

            if (res.previewDeployedDevicesFleetCertificate.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->