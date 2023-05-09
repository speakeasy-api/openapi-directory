# search

### Available Operations

* [searchInIndex](#searchinindex) - Search in index
* [searchInIndex1](#searchinindex1) - Search in index

## searchInIndex

Search in index

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchInIndexRequest;
import org.openapis.openapi.models.operations.SearchInIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchInIndexRequest req = new SearchInIndexRequest() {{
                attributesToCrop = "title";
                attributesToHighlight = "*";
                attributesToRetrieve = "title,author";
                cropLength = "5";
                cropMarker = "[...]";
                facets = "genre";
                filter = "genre="fantasy"";
                highlightPostTag = "</mark>";
                highlightPreTag = "<mark>";
                hitsPerPage = "50";
                limit = "1";
                matchingStrategy = "all";
                offset = "0";
                page = "2";
                q = "prinec";
                showMatchesPosition = "true";
                sort = "price";
            }};            

            SearchInIndexResponse res = sdk.search.searchInIndex(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchInIndex1

Search in index

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchInIndex1RequestBody;
import org.openapis.openapi.models.operations.SearchInIndex1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchInIndex1RequestBody req = new SearchInIndex1RequestBody() {{
                attributesToHighlight = new String[]{{
                    add("title"),
                    add("title"),
                    add("title"),
                    add("title"),
                }};
                q = "tempora";
            }};            

            SearchInIndex1Response res = sdk.search.searchInIndex1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
