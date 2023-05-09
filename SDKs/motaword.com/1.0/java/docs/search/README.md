# search

### Available Operations

* [checkDocumentsReindex](#checkdocumentsreindex) - Check reindex status of the client source and translation documents.
* [reindexDocuments](#reindexdocuments) - Reindex for search all of the client source and translation documents.
* [searchEverywhere](#searcheverywhere) - Search everything in your account

## checkDocumentsReindex

Check reindex status of the client source and translation documents.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckDocumentsReindexRequest;
import org.openapis.openapi.models.operations.CheckDocumentsReindexResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CheckDocumentsReindexRequest req = new CheckDocumentsReindexRequest("quas");            

            CheckDocumentsReindexResponse res = sdk.search.checkDocumentsReindex(req);

            if (res.asyncOperationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reindexDocuments

Reindex for search all of the client source and translation documents.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReindexDocumentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ReindexDocumentsResponse res = sdk.search.reindexDocuments();

            if (res.asyncOperationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchEverywhere

Search through everything in your account, from projects to documents, from source strings to translations...

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchEverywhereIncludeEnum;
import org.openapis.openapi.models.operations.SearchEverywhereRequest;
import org.openapis.openapi.models.operations.SearchEverywhereResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SearchEverywhereRequest req = new SearchEverywhereRequest("culpa") {{
                include = new org.openapis.openapi.models.operations.SearchEverywhereIncludeEnum[]{{
                    add(SearchEverywhereIncludeEnum.STRINGS),
                    add(SearchEverywhereIncludeEnum.DOCUMENTS),
                    add(SearchEverywhereIncludeEnum.STRINGS),
                }};
                page = 348783L;
                perPage = 750765L;
            }};            

            SearchEverywhereResponse res = sdk.search.searchEverywhere(req);

            if (res.searchEverywhereResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
