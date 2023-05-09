<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateRequest;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateResponse;
import org.openapis.openapi.models.operations.CreateDeployedDevicesCertificateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeployedDevicesCertificateRequest req = new CreateDeployedDevicesCertificateRequest("corrupti") {{
                requestBody = new CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest("provident") {{
                    deviceSid = "distinctio";
                    friendlyName = "quibusdam";
                }};;
            }};            

            CreateDeployedDevicesCertificateResponse res = sdk.createDeployedDevicesCertificate(req, new CreateDeployedDevicesCertificateSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.previewDeployedDevicesFleetCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->