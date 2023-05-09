# tags

### Available Operations

* [tagsList](#tagslist) - Get a list of tags.
* [tagsRead](#tagsread) - Get details of the tag.

## tagsList

Get a list of tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsListRequest;
import org.openapis.openapi.models.operations.TagsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagsListRequest req = new TagsListRequest() {{
                page = 616934L;
                pageSize = 386489L;
            }};            

            TagsListResponse res = sdk.tags.tagsList(req);

            if (res.tagsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsRead

Get details of the tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsReadRequest;
import org.openapis.openapi.models.operations.TagsReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagsReadRequest req = new TagsReadRequest(943749L);            

            TagsReadResponse res = sdk.tags.tagsRead(req);

            if (res.tagSingle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
