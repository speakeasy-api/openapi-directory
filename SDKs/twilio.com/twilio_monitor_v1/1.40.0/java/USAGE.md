<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FetchAlertSecurity;
import org.openapis.openapi.models.operations.FetchAlertRequest;
import org.openapis.openapi.models.operations.FetchAlertResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAlertRequest req = new FetchAlertRequest() {{
                sid = "corrupti";
            }}            

            FetchAlertResponse res = sdk.fetchAlert(req, new FetchAlertSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.monitorV1AlertInstance.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->