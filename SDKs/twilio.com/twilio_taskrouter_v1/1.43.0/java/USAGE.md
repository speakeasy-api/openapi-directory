<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateActivityCreateActivityRequest;
import org.openapis.openapi.models.operations.CreateActivityRequest;
import org.openapis.openapi.models.operations.CreateActivityResponse;
import org.openapis.openapi.models.operations.CreateActivitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateActivityRequest req = new CreateActivityRequest("corrupti") {{
                requestBody = new CreateActivityCreateActivityRequest("provident") {{
                    available = false;
                }};;
            }};            

            CreateActivityResponse res = sdk.createActivity(req, new CreateActivitySecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.taskrouterV1WorkspaceActivity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->