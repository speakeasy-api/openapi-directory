<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateCompositionSecurity;
import org.openapis.openapi.models.operations.CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCompositionCreateCompositionRequest;
import org.openapis.openapi.models.operations.CreateCompositionRequest;
import org.openapis.openapi.models.operations.CreateCompositionResponse;
import org.openapis.openapi.models.shared.CompositionEnumFormatEnum;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCompositionRequest req = new CreateCompositionRequest() {{
                security = new CreateCompositionSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateCompositionCreateCompositionRequest() {{
                    audioSources = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    audioSourcesExcluded = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    format = "mp4";
                    resolution = "error";
                    roomSid = "deserunt";
                    statusCallback = "http://innocent-effect.org";
                    statusCallbackMethod = "HEAD";
                    trim = false;
                    videoLayout = "delectus";
                }};
            }};            

            CreateCompositionResponse res = sdk.createComposition(req);

            if (res.videoV1Composition.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->