<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateExecutionSecurity;
import org.openapis.openapi.models.operations.CreateExecutionPathParams;
import org.openapis.openapi.models.operations.CreateExecutionCreateExecutionRequest;
import org.openapis.openapi.models.operations.CreateExecutionRequest;
import org.openapis.openapi.models.operations.CreateExecutionResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateExecutionRequest req = new CreateExecutionRequest() {{
                security = new CreateExecutionSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateExecutionPathParams() {{
                    flowSid = "corrupti";
                }};
                request = new CreateExecutionCreateExecutionRequest() {{
                    from = "provident";
                    parameters = "distinctio";
                    to = "quibusdam";
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