# pathway

### Available Operations

* [getPathwaysWithDiagramsForCategoryUsingGET](#getpathwayswithdiagramsforcategoryusingget) - Return a list of pathways based on category provided
* [searchPathwaysUsingGET](#searchpathwaysusingget) - Return a list of pathways based on search term

## getPathwaysWithDiagramsForCategoryUsingGET

Return a list of pathways based on category provided

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPathwaysWithDiagramsForCategoryUsingGETRequest;
import org.openapis.openapi.models.operations.GETPathwaysWithDiagramsForCategoryUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETPathwaysWithDiagramsForCategoryUsingGETRequest req = new GETPathwaysWithDiagramsForCategoryUsingGETRequest("error");            

            GETPathwaysWithDiagramsForCategoryUsingGETResponse res = sdk.pathway.getPathwaysWithDiagramsForCategoryUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchPathwaysUsingGET

Return a list of pathways based on search term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPathwaysUsingGETRequest;
import org.openapis.openapi.models.operations.SearchPathwaysUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchPathwaysUsingGETRequest req = new SearchPathwaysUsingGETRequest("temporibus");            

            SearchPathwaysUsingGETResponse res = sdk.pathway.searchPathwaysUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
