# collectionChangeset

### Available Operations

* [getCollectionChangeset](#getcollectionchangeset)

## getCollectionChangeset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCollectionChangesetRequest;
import org.openapis.openapi.models.operations.GetCollectionChangesetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCollectionChangesetRequest req = new GetCollectionChangesetRequest("repudiandae", "sint", "veritatis") {{
                limit = 929297L;
                since = "incidunt";
                bucket = "enim";
                collection = "consequatur";
            }};            

            GetCollectionChangesetResponse res = sdk.collectionChangeset.getCollectionChangeset(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
