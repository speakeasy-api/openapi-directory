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

            CreateSinkRequest req = new CreateSinkRequest() {{
                security = new CreateSinkSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateSinkCreateSinkRequest() {{
                    description = "sit";
                    sinkConfiguration = "voluptas";
                    sinkType = "webhook";
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