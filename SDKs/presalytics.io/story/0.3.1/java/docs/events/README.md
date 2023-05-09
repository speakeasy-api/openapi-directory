# events

### Available Operations

* [storyIdEventsGet](#storyideventsget) - Events: List Events
* [storyIdEventsPost](#storyideventspost) - Events: Manage Events

## storyIdEventsGet

Get a list of Events available to users of this story

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdEventsGetRequest;
import org.openapis.openapi.models.operations.StoryIdEventsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdEventsGetRequest req = new StoryIdEventsGetRequest("71b5e6e1-3b99-4d48-8e1e-91e450ad2abd");            

            StoryIdEventsGetResponse res = sdk.events.storyIdEventsGet(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdEventsPost

Add a message to the Story's conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdEventsPostRequest;
import org.openapis.openapi.models.operations.StoryIdEventsPostResponse;
import org.openapis.openapi.models.shared.ManageEvent;
import org.openapis.openapi.models.shared.ManageEventActionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdEventsPostRequest req = new StoryIdEventsPostRequest("44269802-d502-4a94-bb4f-63c969e9a3ef",                 new ManageEvent() {{
                                action = ManageEventActionEnum.CHANGE;
                                actionParams = new java.util.HashMap<String, Object>() {{
                                    put("in", "illum");
                                    put("maiores", "rerum");
                                }};
                                name = "Valerie Runolfsson";
                            }};);            

            StoryIdEventsPostResponse res = sdk.events.storyIdEventsPost(req);

            if (res.storyIdEventsPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
