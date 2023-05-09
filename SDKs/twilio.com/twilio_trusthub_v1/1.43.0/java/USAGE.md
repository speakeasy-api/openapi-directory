<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomerProfileCreateCustomerProfileRequest;
import org.openapis.openapi.models.operations.CreateCustomerProfileResponse;
import org.openapis.openapi.models.operations.CreateCustomerProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCustomerProfileCreateCustomerProfileRequest req = new CreateCustomerProfileCreateCustomerProfileRequest("corrupti", "provident", "distinctio") {{
                statusCallback = "https://outstanding-strait.name";
            }};            

            CreateCustomerProfileResponse res = sdk.createCustomerProfile(req, new CreateCustomerProfileSecurity("illum", "vel") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1CustomerProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->