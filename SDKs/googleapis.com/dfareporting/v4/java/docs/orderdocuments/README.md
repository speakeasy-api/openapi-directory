# orderDocuments

### Available Operations

* [dfareportingOrderDocumentsGet](#dfareportingorderdocumentsget) - Gets one order document by ID.
* [dfareportingOrderDocumentsList](#dfareportingorderdocumentslist) - Retrieves a list of order documents, possibly filtered. This method supports paging.

## dfareportingOrderDocumentsGet

Gets one order document by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingOrderDocumentsGetRequest;
import org.openapis.openapi.models.operations.DfareportingOrderDocumentsGetResponse;
import org.openapis.openapi.models.operations.DfareportingOrderDocumentsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingOrderDocumentsGetRequest req = new DfareportingOrderDocumentsGetRequest("rem", "eligendi", "optio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "ratione";
                fields = "alias";
                key = "delectus";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "dolores";
                uploadProtocol = "illo";
            }};            

            DfareportingOrderDocumentsGetResponse res = sdk.orderDocuments.dfareportingOrderDocumentsGet(req, new DfareportingOrderDocumentsGetSecurity("aliquid", "quaerat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingOrderDocumentsList

Retrieves a list of order documents, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingOrderDocumentsListRequest;
import org.openapis.openapi.models.operations.DfareportingOrderDocumentsListResponse;
import org.openapis.openapi.models.operations.DfareportingOrderDocumentsListSecurity;
import org.openapis.openapi.models.operations.DfareportingOrderDocumentsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingOrderDocumentsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingOrderDocumentsListRequest req = new DfareportingOrderDocumentsListRequest("temporibus", "alias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                approved = false;
                callback = "repellat";
                fields = "voluptates";
                ids = new String[]{{
                    add("illum"),
                    add("iste"),
                    add("autem"),
                }};
                key = "minima";
                maxResults = 365498L;
                oauthToken = "adipisci";
                orderId = new String[]{{
                    add("praesentium"),
                    add("excepturi"),
                    add("necessitatibus"),
                }};
                pageToken = "perferendis";
                prettyPrint = false;
                quotaUser = "consequatur";
                searchString = "doloremque";
                siteId = new String[]{{
                    add("quod"),
                    add("vel"),
                    add("ea"),
                }};
                sortField = DfareportingOrderDocumentsListSortFieldEnum.NAME;
                sortOrder = DfareportingOrderDocumentsListSortOrderEnum.ASCENDING;
                uploadType = "temporibus";
                uploadProtocol = "debitis";
            }};            

            DfareportingOrderDocumentsListResponse res = sdk.orderDocuments.dfareportingOrderDocumentsList(req, new DfareportingOrderDocumentsListSecurity("in", "nam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.orderDocumentsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
