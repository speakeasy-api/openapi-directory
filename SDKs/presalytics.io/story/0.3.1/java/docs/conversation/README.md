# conversation

### Available Operations

* [storyIdMessagesGet](#storyidmessagesget) - Conversation: List Conversation Messages
* [storyIdMessagesPost](#storyidmessagespost) - Conversation: Send a Message

## storyIdMessagesGet

Get a list of messages that have been send in this story

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdMessagesGetRequest;
import org.openapis.openapi.models.operations.StoryIdMessagesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdMessagesGetRequest req = new StoryIdMessagesGetRequest("2c595590-7aff-41a3-a2fa-9467739251aa");            

            StoryIdMessagesGetResponse res = sdk.conversation.storyIdMessagesGet(req);

            if (res.messages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdMessagesPost

Add a message to the Story's conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdMessagesPostRequest;
import org.openapis.openapi.models.operations.StoryIdMessagesPostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdMessagesPostRequest req = new StoryIdMessagesPostRequest("enim", "2c3f5ad0-19da-41ff-a78f-097b0074f154");            

            StoryIdMessagesPostResponse res = sdk.conversation.storyIdMessagesPost(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
