# multiSearch

### Available Operations

* [searchOneOrMoreIndexes](#searchoneormoreindexes) - Search one or more indexes

## searchOneOrMoreIndexes

Search one or more indexes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchOneOrMoreIndexesRequestBody;
import org.openapis.openapi.models.operations.SearchOneOrMoreIndexesRequestBodyQueries;
import org.openapis.openapi.models.operations.SearchOneOrMoreIndexesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchOneOrMoreIndexesRequestBody req = new SearchOneOrMoreIndexesRequestBody() {{
                queries = new org.openapis.openapi.models.operations.SearchOneOrMoreIndexesRequestBodyQueries[]{{
                    add(new SearchOneOrMoreIndexesRequestBodyQueries() {{
                        attributesToHighlight = new String[]{{
                            add("title"),
                            add("title"),
                            add("title"),
                            add("title"),
                        }};
                        indexUid = "books";
                        q = "Pride and Prejudice";
                    }}),
                    add(new SearchOneOrMoreIndexesRequestBodyQueries() {{
                        attributesToHighlight = new String[]{{
                            add("title"),
                        }};
                        indexUid = "books";
                        q = "Pride and Prejudice";
                    }}),
                }};
            }};            

            SearchOneOrMoreIndexesResponse res = sdk.multiSearch.searchOneOrMoreIndexes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
