<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateConversationRequest req = new CreateConversationRequest() {{
                request = new CreateConversationRequestBody() {{
                    displayName = "non";
                    imageUrl = "debitis";
                    name = "deleniti";
                    properties = new ConversationProperties() {{
                        ttl = 6.100000;
                    }};
                }};
            }};

            CreateConversationResponse res = sdk.conversation.createConversation(req);

            if (res.createConversation200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->