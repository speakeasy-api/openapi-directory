# conversationsCalls

## Overview

Conversations Calls

### Available Operations

* [postV2ConversationsCalls](#postv2conversationscalls) - Create Conversations Call

## postV2ConversationsCalls

Enqueue a Conversations Call for processing

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2ConversationsCallsRequestBody;
import org.openapis.openapi.models.operations.PostV2ConversationsCallsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2ConversationsCallsRequestBody req = new PostV2ConversationsCallsRequestBody(6774.12, "laborum",                 new java.util.HashMap<String, Object>() {{
                                put("velit", "eum");
                                put("autem", "nobis");
                                put("quas", "assumenda");
                                put("nulla", "voluptas");
                            }}, "libero") {{
                callCreatedAt = "quasi";
                direction = "tempora";
                userGuid = "numquam";
            }};            

            PostV2ConversationsCallsResponse res = sdk.conversationsCalls.postV2ConversationsCalls(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
