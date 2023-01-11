<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateDeployedDevicesCertificateRequest req = new CreateDeployedDevicesCertificateRequest() {{
                security = new CreateDeployedDevicesCertificateSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateDeployedDevicesCertificatePathParams() {{
                    fleetSid = "sunt";
                }};
                request = new CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest() {{
                    certificateData = "cupiditate";
                    deviceSid = "quam";
                    friendlyName = "repellendus";
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