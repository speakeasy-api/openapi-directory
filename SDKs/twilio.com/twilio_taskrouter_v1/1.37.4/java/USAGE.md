<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateActivityRequest req = new CreateActivityRequest() {{
                security = new CreateActivitySecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateActivityPathParams() {{
                    workspaceSid = "totam";
                }};
                request = new CreateActivityCreateActivityRequest() {{
                    available = false;
                    friendlyName = "blanditiis";
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