<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMediaProcessorCreateMediaProcessorRequest;
import org.openapis.openapi.models.operations.CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateMediaProcessorResponse;
import org.openapis.openapi.models.operations.CreateMediaProcessorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMediaProcessorCreateMediaProcessorRequest req = new CreateMediaProcessorCreateMediaProcessorRequest("corrupti", "provident") {{
                extensionEnvironment = "distinctio";
                maxDuration = 844266L;
                statusCallback = "https://tidy-mascara.org";
                statusCallbackMethod = CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum.POST;
            }};            

            CreateMediaProcessorResponse res = sdk.createMediaProcessor(req, new CreateMediaProcessorSecurity("error", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.mediaV1MediaProcessor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->