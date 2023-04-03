<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateApplicationRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateApplicationRequestBody;
import org.openapis.openapi.models.operations.CreateApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateApplicationRequestBody req = new CreateApplicationRequestBody() {{
                answerMethod = "GET";
                answerUrl = "https://example.com/webhooks/answer";
                apiKey = "ap1k3y";
                apiSecret = "230e6cf0709417176df1b4fc1e083adc";
                eventMethod = "POST";
                eventUrl = "https://example.com/webhooks/event";
                inboundMethod = "POST";
                inboundUrl = "https://example.com/webhooks/inbound";
                name = "My Application";
                statusMethod = "POST";
                statusUrl = "https://example.com/webhooks/status";
                type = "voice";
            }}            

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.applicationCreated.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->