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

            CreateMessageInteractionRequest req = new CreateMessageInteractionRequest() {{
                security = new CreateMessageInteractionSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateMessageInteractionPathParams() {{
                    participantSid = "ullam";
                    serviceSid = "architecto";
                    sessionSid = "architecto";
                }};
                request = new CreateMessageInteractionCreateMessageInteractionRequest() {{
                    body = "beatae";
                    mediaUrl = new String[]() {{
                        add("veniam"),
                        add("hic"),
                        add("beatae"),
                    }};
                }};
            }};

            CreateMessageInteractionResponse res = sdk.createMessageInteraction(req);

            if (res.proxyV1ServiceSessionParticipantMessageInteraction.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->