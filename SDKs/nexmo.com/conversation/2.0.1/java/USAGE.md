<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateConversationRequestBody;
import org.openapis.openapi.models.operations.CreateConversationResponse;
import org.openapis.openapi.models.shared.ConversationProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            CreateConversationRequestBody req = new CreateConversationRequestBody() {{
                displayName = "Customer Chat";
                imageUrl = "https://example.com/image.png";
                name = "customer_chat";
                properties = new ConversationProperties() {{
                    ttl = 60;
                }};
            }}            

            CreateConversationResponse res = sdk.conversation.createConversation(req);

            if (res.createConversation200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->