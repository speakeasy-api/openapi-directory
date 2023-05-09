# schemas

### Available Operations

* [storyOutlineSchema](#storyoutlineschema) - Story Outline Schema

## storyOutlineSchema

Json Schema for validating Story Outline objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryOutlineSchemaRequest;
import org.openapis.openapi.models.operations.StoryOutlineSchemaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryOutlineSchemaRequest req = new StoryOutlineSchemaRequest("eaque");            

            StoryOutlineSchemaResponse res = sdk.schemas.storyOutlineSchema(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
