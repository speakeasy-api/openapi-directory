# collections

### Available Operations

* [getCollection](#getcollection)
* [getCollections](#getcollections)

## getCollection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCollectionRequest;
import org.openapis.openapi.models.operations.GetCollectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCollectionRequest req = new GetCollectionRequest("est", "quibusdam") {{
                ifMatch = "explicabo";
                ifNoneMatch = "deserunt";
                fields = new String[]{{
                    add("quibusdam"),
                    add("labore"),
                    add("modi"),
                }};
            }};            

            GetCollectionResponse res = sdk.collections.getCollection(req);

            if (res.objectSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCollections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCollectionsRequest;
import org.openapis.openapi.models.operations.GetCollectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCollectionsRequest req = new GetCollectionsRequest("qui") {{
                ifMatch = "aliquid";
                ifNoneMatch = "cupiditate";
                before = 552822L;
                fields = new String[]{{
                    add("magni"),
                }};
                limit = 828940L;
                since = 369808L;
                sort = new String[]{{
                    add("fugit"),
                }};
                to = 677817L;
                token = "excepturi";
                id = "4bb4f63c-969e-49a3-afa7-7dfb14cd66ae";
                lastModified = 249796L;
            }};            

            GetCollectionsResponse res = sdk.collections.getCollections(req);

            if (res.schema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
