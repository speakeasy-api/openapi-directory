<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DevicesSecurity;
import org.openapis.openapi.models.operations.DevicesRequest;
import org.openapis.openapi.models.operations.DevicesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesRequest req = new DevicesRequest() {{
                os = "corrupti";
            }}            

            DevicesResponse res = sdk.getDevices.devices(req, new DevicesSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.osDevices.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->