<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateMessageInteractionSecurity;
import org.openapis.openapi.models.operations.CreateMessageInteractionCreateMessageInteractionRequest;
import org.openapis.openapi.models.operations.CreateMessageInteractionRequest;
import org.openapis.openapi.models.operations.CreateMessageInteractionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMessageInteractionRequest req = new CreateMessageInteractionRequest() {{
                participantSid = "corrupti";
                requestBody = new CreateMessageInteractionCreateMessageInteractionRequest() {{
                    body = "provident";
                    mediaUrl = new String[]{{
                        add("https://outstanding-strait.name"),
                        add("https://impressive-ox.name"),
                        add("http://innocent-effect.org"),
                    }};
                }};
                serviceSid = "ipsa";
                sessionSid = "delectus";
            }}            

            CreateMessageInteractionResponse res = sdk.createMessageInteraction(req, new CreateMessageInteractionSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServiceSessionParticipantMessageInteraction.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->