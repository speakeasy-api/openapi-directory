# conversation

## Overview

A conversation is a shared core component that Vonage APIs rely on. Conversations happen over multiple mediums and and can have associated Users through Memberships.

### Available Operations

* [createConversation](#createconversation) - Create a conversation
* [deleteConversation](#deleteconversation) - Delete a conversation
* [~~listConversations~~](#listconversations) - List conversations :warning: **Deprecated**
* [recordConversation](#recordconversation) - Record a conversation
* [replaceConversation](#replaceconversation) - Update a conversation
* [retrieveConversation](#retrieveconversation) - Retrieve a conversation

## createConversation

Create a conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConversationRequestBody;
import org.openapis.openapi.models.operations.CreateConversationResponse;
import org.openapis.openapi.models.shared.ConversationProperties;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            CreateConversationRequestBody req = new CreateConversationRequestBody() {{
                displayName = "Customer Chat";
                imageUrl = "https://example.com/image.png";
                name = "customer_chat";
                properties = new ConversationProperties() {{
                    ttl = 60;
                }};;
            }};            

            CreateConversationResponse res = sdk.conversation.createConversation(req);

            if (res.createConversation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConversation

Delete a conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConversationRequest;
import org.openapis.openapi.models.operations.DeleteConversationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteConversationRequest req = new DeleteConversationRequest("quibusdam");            

            DeleteConversationResponse res = sdk.conversation.deleteConversation(req);

            if (res.deleteConversation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listConversations~~

This endpoint is **DEPRECATED**. Please use [/v0.2/conversations](/api/conversation.v2#get-conversations).

List all conversations associated with your application. This endpoint required an admin JWT. To find all conversations for the currently logged in user, see [GET /users/:id/conversations](#getuserConversations)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConversationsRequest;
import org.openapis.openapi.models.operations.ListConversationsResponse;
import org.openapis.openapi.models.shared.OrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            ListConversationsRequest req = new ListConversationsRequest() {{
                dateEnd = "2018-01-01 12:00:00";
                dateStart = "2018-01-01 10:00:00";
                order = OrderEnum.DESC_UPPER;
                pageSize = 50;
                recordIndex = 5448.83;
            }};            

            ListConversationsResponse res = sdk.conversation.listConversations(req);

            if (res.listConversations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recordConversation

Record a conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecordConversationRequest;
import org.openapis.openapi.models.operations.RecordConversationRequestBody;
import org.openapis.openapi.models.operations.RecordConversationResponse;
import org.openapis.openapi.models.shared.ActionEnum;
import org.openapis.openapi.models.shared.FormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RecordConversationRequest req = new RecordConversationRequest("vel") {{
                requestBody = new RecordConversationRequestBody(ActionEnum.START) {{
                    eventMethod = "POST";
                    eventUrl = new String[]{{
                        add("deserunt"),
                        add("suscipit"),
                        add("iure"),
                    }};
                    format = FormatEnum.MP3;
                    split = "conversation";
                }};;
            }};            

            RecordConversationResponse res = sdk.conversation.recordConversation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## replaceConversation

Update a conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplaceConversationRequest;
import org.openapis.openapi.models.operations.ReplaceConversationRequestBody;
import org.openapis.openapi.models.operations.ReplaceConversationResponse;
import org.openapis.openapi.models.shared.ConversationProperties;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            ReplaceConversationRequest req = new ReplaceConversationRequest("debitis") {{
                requestBody = new ReplaceConversationRequestBody() {{
                    displayName = "Customer Chat";
                    imageUrl = "https://example.com/image.png";
                    name = "customer_chat";
                    properties = new ConversationProperties() {{
                        ttl = 60;
                    }};;
                }};;
            }};            

            ReplaceConversationResponse res = sdk.conversation.replaceConversation(req);

            if (res.replaceConversation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveConversation

Retrieve a conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveConversationRequest;
import org.openapis.openapi.models.operations.RetrieveConversationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveConversationRequest req = new RetrieveConversationRequest("delectus");            

            RetrieveConversationResponse res = sdk.conversation.retrieveConversation(req);

            if (res.retrieveConversation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
