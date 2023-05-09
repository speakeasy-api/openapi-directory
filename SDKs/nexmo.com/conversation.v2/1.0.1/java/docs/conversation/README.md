# conversation

## Overview

A conversation is a shared core component that Vonage APIs rely on. Conversations happen over multiple mediums and and can have associated Users through Memberships.

### Available Operations

* [getConversations](#getconversations) - List Conversations

## getConversations

Please note that not all data is available in the list endpoint. Once 
you've identified the conversation you need to work with, use the 
[GET /conversations/:id](#get-conversation) endpoint to fetch all of the conversation details


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConversationsRequest;
import org.openapis.openapi.models.operations.GetConversationsResponse;
import org.openapis.openapi.models.shared.OrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConversationsRequest req = new GetConversationsRequest() {{
                cursor = "corrupti";
                dateEnd = "illum";
                dateStart = "vel";
                order = OrderEnum.DESC;
                pageSize = 645894L;
            }};            

            GetConversationsResponse res = sdk.conversation.getConversations(req);

            if (res.getConversations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
