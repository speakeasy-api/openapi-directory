# sessions

### Available Operations

* [sessionIdDelete](#sessioniddelete) - Sessions: Delete by Id
* [sessionIdGet](#sessionidget) - Sessions: Get
* [storyIdSessionPost](#storyidsessionpost) - Sessions: Create a Session
* [storyIdSessionsGet](#storyidsessionsget) - Sessions: List Story Sessions

## sessionIdDelete

Remove a session and dependant data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SessionIdDeleteRequest;
import org.openapis.openapi.models.operations.SessionIdDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SessionIdDeleteRequest req = new SessionIdDeleteRequest("d5f0d30c-5fbb-4258-b053-202c73d5fe9b");            

            SessionIdDeleteResponse res = sdk.sessions.sessionIdDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sessionIdGet

Get session metadata

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SessionIdGetRequest;
import org.openapis.openapi.models.operations.SessionIdGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SessionIdGetRequest req = new SessionIdGetRequest("90c28909-b3fe-449a-8d9c-bf48633323f9") {{
                includeRelationships = false;
            }};            

            SessionIdGetResponse res = sdk.sessions.sessionIdGet(req);

            if (res.session != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdSessionPost

Create a new session

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdSessionPostRequest;
import org.openapis.openapi.models.operations.StoryIdSessionPostResponse;
import org.openapis.openapi.models.shared.CreateSessionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdSessionPostRequest req = new StoryIdSessionPostRequest(                new CreateSessionRequest() {{
                                collaboratorUserId = "b77f3a41-0067-44eb-b692-80d1ba77a89e";
                                host = "distinctio";
                            }};, "f737ae42-03ce-45e6-a95d-8a0d446ce2af");            

            StoryIdSessionPostResponse res = sdk.sessions.storyIdSessionPost(req);

            if (res.session != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdSessionsGet

Get a list of sessions asscoaited with this story

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdSessionsGetRequest;
import org.openapis.openapi.models.operations.StoryIdSessionsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdSessionsGetRequest req = new StoryIdSessionsGetRequest("7a73cf3b-e453-4f87-8b32-6b5a73429cdb") {{
                includeRelationships = false;
            }};            

            StoryIdSessionsGetResponse res = sdk.sessions.storyIdSessionsGet(req);

            if (res.sessions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
