<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContentRequest;
import org.openapis.openapi.models.operations.DeleteContentResponse;
import org.openapis.openapi.models.operations.DeleteContentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteContentRequest req = new DeleteContentRequest("corrupti");            

            DeleteContentResponse res = sdk.deleteContent(req, new DeleteContentSecurity("provident", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->