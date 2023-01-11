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

            DevicesRequest req = new DevicesRequest() {{
                security = new DevicesSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                queryParams = new DevicesQueryParams() {{
                    os = "harum";
                }};
            }};

            DevicesResponse res = sdk.getDevices.devices(req);

            if (res.osDevices.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->