# changess

### Available Operations

* [getChangess](#getchangess)

## getChangess

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChangessRequest;
import org.openapis.openapi.models.operations.GetChangessResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChangessRequest req = new GetChangessRequest() {{
                ifMatch = "odit";
                ifNoneMatch = "quo";
                before = 196582L;
                fields = new String[]{{
                    add("ipsam"),
                    add("id"),
                    add("possimus"),
                    add("aut"),
                }};
                limit = 97101L;
                since = 622846L;
                sort = new String[]{{
                    add("laborum"),
                    add("quasi"),
                    add("reiciendis"),
                    add("voluptatibus"),
                }};
                to = 878194L;
                token = "nihil";
                id = "8f097b00-74f1-4547-9b5e-6e13b99d488e";
                lastModified = 93940L;
            }};            

            GetChangessResponse res = sdk.changess.getChangess(req);

            if (res.schema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
