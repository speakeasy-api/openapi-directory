<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateMessageInteractionSecurity;
import org.openapis.openapi.models.operations.CreateMessageInteractionPathParams;
import org.openapis.openapi.models.operations.CreateMessageInteractionCreateMessageInteractionRequest;
import org.openapis.openapi.models.operations.CreateMessageInteractionRequest;
import org.openapis.openapi.models.operations.CreateMessageInteractionResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMessageInteractionRequest req = new CreateMessageInteractionRequest() {{
                security = new CreateMessageInteractionSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateMessageInteractionPathParams() {{
                    participantSid = "corrupti";
                    serviceSid = "provident";
                    sessionSid = "distinctio";
                }};
                request = new CreateMessageInteractionCreateMessageInteractionRequest() {{
                    body = "quibusdam";
                    mediaUrl = new String[]{{
                        add("https://moral-star.info"),
                        add("https://present-giggle.info"),
                        add("http://unique-baboon.org"),
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