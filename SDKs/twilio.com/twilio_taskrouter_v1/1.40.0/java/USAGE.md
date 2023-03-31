<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateActivitySecurity;
import org.openapis.openapi.models.operations.CreateActivityPathParams;
import org.openapis.openapi.models.operations.CreateActivityCreateActivityRequest;
import org.openapis.openapi.models.operations.CreateActivityRequest;
import org.openapis.openapi.models.operations.CreateActivityResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateActivityRequest req = new CreateActivityRequest() {{
                security = new CreateActivitySecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateActivityPathParams() {{
                    workspaceSid = "corrupti";
                }};
                request = new CreateActivityCreateActivityRequest() {{
                    available = false;
                    friendlyName = "provident";
                }};
            }};            

            CreateActivityResponse res = sdk.createActivity(req);

            if (res.taskrouterV1WorkspaceActivity.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->