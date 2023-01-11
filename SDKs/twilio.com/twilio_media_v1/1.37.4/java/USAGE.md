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

            CreateMediaProcessorRequest req = new CreateMediaProcessorRequest() {{
                security = new CreateMediaProcessorSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateMediaProcessorCreateMediaProcessorRequest() {{
                    extension = "quae";
                    extensionContext = "placeat";
                    extensionEnvironment = "vitae";
                    maxDuration = 7134140320308255526;
                    statusCallback = "officiis";
                    statusCallbackMethod = "PUT";
                }};
            }};

            CreateMediaProcessorResponse res = sdk.createMediaProcessor(req);

            if (res.mediaV1MediaProcessor.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->