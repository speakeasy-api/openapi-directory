<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExecutionCreateExecutionRequest;
import org.openapis.openapi.models.operations.CreateExecutionRequest;
import org.openapis.openapi.models.operations.CreateExecutionResponse;
import org.openapis.openapi.models.operations.CreateExecutionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateExecutionRequest req = new CreateExecutionRequest("corrupti") {{
                requestBody = new CreateExecutionCreateExecutionRequest("provident", "distinctio") {{
                    parameters = "quibusdam";
                }};;
            }};            

            CreateExecutionResponse res = sdk.createExecution(req, new CreateExecutionSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2FlowExecution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->