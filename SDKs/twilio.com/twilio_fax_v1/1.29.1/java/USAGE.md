<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteFaxSecurity;
import org.openapis.openapi.models.operations.DeleteFaxRequest;
import org.openapis.openapi.models.operations.DeleteFaxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFaxRequest req = new DeleteFaxRequest() {{
                sid = "corrupti";
            }}            

            DeleteFaxResponse res = sdk.deleteFax(req, new DeleteFaxSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->