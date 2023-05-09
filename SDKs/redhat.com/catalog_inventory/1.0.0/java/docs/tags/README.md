# tags

### Available Operations

* [listTags](#listtags) - List Tags

## listTags

Returns an array of Tag objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsRequest;
import org.openapis.openapi.models.operations.ListTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet", "dolorum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListTagsRequest req = new ListTagsRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("veritatis", "ipsa");
                    put("ipsa", "iure");
                }};
                limit = 487838L;
                offset = 311796L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("quidem", "voluptatibus");
                    put("voluptas", "natus");
                    put("eos", "atque");
                    put("sit", "fugiat");
                }};
            }};            

            ListTagsResponse res = sdk.tags.listTags(req);

            if (res.tagsCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
