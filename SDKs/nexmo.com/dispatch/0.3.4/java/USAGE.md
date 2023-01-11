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

            CreateWorkflowRequest req = new CreateWorkflowRequest() {{
                security = new CreateWorkflowSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                request = new CreateWorkflow() {{
                    template = "failover";
                    workflow = new Object[]() {{
                        add("quasi"),
                        add("officia"),
                        add("doloremque"),
                    }};
                }};
            }};

            CreateWorkflowResponse res = sdk.createWorkflow(req);

            if (res.response.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->