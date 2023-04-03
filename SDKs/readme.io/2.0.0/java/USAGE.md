<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteAPISpecificationSecurity;
import org.openapis.openapi.models.operations.DeleteAPISpecificationRequest;
import org.openapis.openapi.models.operations.DeleteAPISpecificationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAPISpecificationRequest req = new DeleteAPISpecificationRequest() {{
                id = "corrupti";
            }}            

            DeleteAPISpecificationResponse res = sdk.apiSpecification.deleteAPISpecification(req, new DeleteAPISpecificationSecurity() {{
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