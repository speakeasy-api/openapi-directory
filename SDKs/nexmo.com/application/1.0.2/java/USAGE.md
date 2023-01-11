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
                    answerMethod = "consequatur";
                    answerUrl = "odit";
                    apiKey = "dolores";
                    apiSecret = "et";
                    eventMethod = "et";
                    eventUrl = "provident";
                    inboundMethod = "ut";
                    inboundUrl = "quod";
                    name = "nisi";
                    statusMethod = "voluptatum";
                    statusUrl = "id";
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