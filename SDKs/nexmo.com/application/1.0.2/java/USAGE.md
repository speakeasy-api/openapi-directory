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

            CreateApplicationRequest req = new CreateApplicationRequest() {{
                request = new CreateApplicationRequestBody() {{
                    answerMethod = "sit";
                    answerUrl = "voluptas";
                    apiKey = "culpa";
                    apiSecret = "expedita";
                    eventMethod = "consequuntur";
                    eventUrl = "dolor";
                    inboundMethod = "expedita";
                    inboundUrl = "voluptas";
                    name = "fugit";
                    statusMethod = "et";
                    statusUrl = "nihil";
                    type = "messages";
                }};
            }};

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.applicationCreated.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->