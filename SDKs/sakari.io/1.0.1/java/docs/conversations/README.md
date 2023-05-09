# conversations

## Overview

Conversations group your message history with each contact into one thread

### Available Operations

* [conversationsClose](#conversationsclose) - Closes a conversation
* [conversationsFetch](#conversationsfetch) - Fetch conversation by ID
* [conversationsFetchAll](#conversationsfetchall) - Fetch conversations

## conversationsClose

Closes a conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversationsCloseRequest;
import org.openapis.openapi.models.operations.ConversationsCloseResponse;
import org.openapis.openapi.models.operations.ConversationsCloseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConversationsCloseRequest req = new ConversationsCloseRequest("vitae", "laborum");            

            ConversationsCloseResponse res = sdk.conversations.conversationsClose(req, new ConversationsCloseSecurity("animi") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversationsFetch

Fetch conversation by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversationsFetchRequest;
import org.openapis.openapi.models.operations.ConversationsFetchResponse;
import org.openapis.openapi.models.operations.ConversationsFetchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConversationsFetchRequest req = new ConversationsFetchRequest("enim", "odit");            

            ConversationsFetchResponse res = sdk.conversations.conversationsFetch(req, new ConversationsFetchSecurity("quo") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversationsFetchAll

Fetch conversations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversationsFetchAllRequest;
import org.openapis.openapi.models.operations.ConversationsFetchAllResponse;
import org.openapis.openapi.models.operations.ConversationsFetchAllSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConversationsFetchAllRequest req = new ConversationsFetchAllRequest("sequi") {{
                limit = 949572L;
                offset = 368725L;
            }};            

            ConversationsFetchAllResponse res = sdk.conversations.conversationsFetchAll(req, new ConversationsFetchAllSecurity("id") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
