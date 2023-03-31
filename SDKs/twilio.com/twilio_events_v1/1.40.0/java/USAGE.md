<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateSinkSecurity;
import org.openapis.openapi.models.operations.CreateSinkCreateSinkRequest;
import org.openapis.openapi.models.operations.CreateSinkRequest;
import org.openapis.openapi.models.operations.CreateSinkResponse;
import org.openapis.openapi.models.shared.SinkEnumSinkTypeEnum;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSinkRequest req = new CreateSinkRequest() {{
                security = new CreateSinkSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateSinkCreateSinkRequest() {{
                    description = "corrupti";
                    sinkConfiguration = "provident";
                    sinkType = "segment";
                }};
            }};            

            CreateSinkResponse res = sdk.createSink(req);

            if (res.eventsV1Sink.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->