<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAlphaSenderCreateAlphaSenderRequest;
import org.openapis.openapi.models.operations.CreateAlphaSenderRequest;
import org.openapis.openapi.models.operations.CreateAlphaSenderResponse;
import org.openapis.openapi.models.operations.CreateAlphaSenderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAlphaSenderRequest req = new CreateAlphaSenderRequest("corrupti") {{
                requestBody = new CreateAlphaSenderCreateAlphaSenderRequest("provident");;
            }};            

            CreateAlphaSenderResponse res = sdk.createAlphaSender(req, new CreateAlphaSenderSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1ServiceAlphaSender != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->