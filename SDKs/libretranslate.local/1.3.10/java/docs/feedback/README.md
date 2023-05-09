# feedback

### Available Operations

* [postSuggest](#postsuggest) - Submit a suggestion to improve a translation

## postSuggest

Submit a suggestion to improve a translation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSuggestResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "es"            

            PostSuggestResponse res = sdk.feedback.postSuggest(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
