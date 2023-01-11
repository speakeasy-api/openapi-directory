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

            CreateCompositionRequest req = new CreateCompositionRequest() {{
                security = new CreateCompositionSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateCompositionCreateCompositionRequest() {{
                    audioSources = new String[]() {{
                        add("temporibus"),
                        add("laborum"),
                        add("voluptas"),
                    }};
                    audioSourcesExcluded = new String[]() {{
                        add("atque"),
                        add("soluta"),
                    }};
                    format = "mp4";
                    resolution = "qui";
                    roomSid = "nihil";
                    statusCallback = "quas";
                    statusCallbackMethod = "GET";
                    trim = false;
                    videoLayout = "dolores";
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