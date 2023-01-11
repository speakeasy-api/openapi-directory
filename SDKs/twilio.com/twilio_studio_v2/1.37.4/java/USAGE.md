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

            CreateExecutionRequest req = new CreateExecutionRequest() {{
                security = new CreateExecutionSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateExecutionPathParams() {{
                    flowSid = "sit";
                }};
                request = new CreateExecutionCreateExecutionRequest() {{
                    from = "voluptas";
                    parameters = "culpa";
                    to = "expedita";
                }};
            }};

            CreateExecutionResponse res = sdk.createExecution(req);

            if (res.studioV2FlowExecution.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->