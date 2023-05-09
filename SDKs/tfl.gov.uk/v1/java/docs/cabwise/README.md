# cabwise

### Available Operations

* [cabwiseGet](#cabwiseget) - Gets taxis and minicabs contact information

## cabwiseGet

Gets taxis and minicabs contact information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CabwiseGetRequest;
import org.openapis.openapi.models.operations.CabwiseGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CabwiseGetRequest req = new CabwiseGetRequest(6027.63, 8579.46) {{
                forceXml = false;
                legacyFormat = false;
                maxResults = 544883;
                name = "Ben Mueller";
                optype = "iure";
                radius = 2975.34;
                twentyFourSevenOnly = false;
                wc = "debitis";
            }};            

            CabwiseGetResponse res = sdk.cabwise.cabwiseGet(req);

            if (res.systemObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
