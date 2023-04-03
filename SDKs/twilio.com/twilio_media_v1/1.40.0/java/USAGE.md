<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateMediaProcessorSecurity;
import org.openapis.openapi.models.operations.CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateMediaProcessorCreateMediaProcessorRequest;
import org.openapis.openapi.models.operations.CreateMediaProcessorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMediaProcessorCreateMediaProcessorRequest req = new CreateMediaProcessorCreateMediaProcessorRequest() {{
                extension = "corrupti";
                extensionContext = "provident";
                extensionEnvironment = "distinctio";
                maxDuration = 844266;
                statusCallback = "https://tidy-mascara.org";
                statusCallbackMethod = "POST";
            }}            

            CreateMediaProcessorResponse res = sdk.createMediaProcessor(req, new CreateMediaProcessorSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.mediaV1MediaProcessor.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->