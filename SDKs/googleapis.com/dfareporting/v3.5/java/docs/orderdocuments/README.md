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

            DfareportingOrderDocumentsGetRequest req = new DfareportingOrderDocumentsGetRequest("necessitatibus", "nemo", "vero") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eos";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "consequuntur";
                key = "praesentium";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "perferendis";
                uploadProtocol = "quaerat";
            }};            

            DfareportingOrderDocumentsGetResponse res = sdk.orderDocuments.dfareportingOrderDocumentsGet(req, new DfareportingOrderDocumentsGetSecurity("aperiam", "harum") {{
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

            DfareportingOrderDocumentsListRequest req = new DfareportingOrderDocumentsListRequest("iusto", "debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "beatae";
                alt = AltEnum.JSON;
                approved = false;
                callback = "omnis";
                fields = "qui";
                ids = new String[]{{
                    add("distinctio"),
                    add("incidunt"),
                    add("quaerat"),
                }};
                key = "eligendi";
                maxResults = 710256L;
                oauthToken = "architecto";
                orderId = new String[]{{
                    add("adipisci"),
                    add("nemo"),
                    add("alias"),
                }};
                pageToken = "aperiam";
                prettyPrint = false;
                quotaUser = "blanditiis";
                searchString = "reiciendis";
                siteId = new String[]{{
                    add("suscipit"),
                    add("inventore"),
                }};
                sortField = DfareportingOrderDocumentsListSortFieldEnum.NAME;
                sortOrder = DfareportingOrderDocumentsListSortOrderEnum.DESCENDING;
                uploadType = "quis";
                uploadProtocol = "nesciunt";
            }};            

            DfareportingOrderDocumentsListResponse res = sdk.orderDocuments.dfareportingOrderDocumentsList(req, new DfareportingOrderDocumentsListSecurity("necessitatibus", "excepturi") {{
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
