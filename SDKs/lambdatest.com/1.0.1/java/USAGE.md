<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DevicesSecurity;
import org.openapis.openapi.models.operations.DevicesQueryParams;
import org.openapis.openapi.models.operations.DevicesRequest;
import org.openapis.openapi.models.operations.DevicesResponse;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesRequest req = new DevicesRequest() {{
                security = new DevicesSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                queryParams = new DevicesQueryParams() {{
                    os = "corrupti";
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