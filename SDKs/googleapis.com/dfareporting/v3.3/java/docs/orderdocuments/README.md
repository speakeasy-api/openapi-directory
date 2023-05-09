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

            DfareportingOrderDocumentsGetRequest req = new DfareportingOrderDocumentsGetRequest("velit", "totam", "nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nulla";
                alt = AltEnum.PROTO;
                callback = "illo";
                fields = "fuga";
                key = "molestias";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "aliquam";
                uploadProtocol = "asperiores";
            }};            

            DfareportingOrderDocumentsGetResponse res = sdk.orderDocuments.dfareportingOrderDocumentsGet(req, new DfareportingOrderDocumentsGetSecurity("debitis", "reprehenderit") {{
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

            DfareportingOrderDocumentsListRequest req = new DfareportingOrderDocumentsListRequest("sed", "voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sed";
                alt = AltEnum.JSON;
                approved = false;
                callback = "asperiores";
                fields = "iste";
                ids = new String[]{{
                    add("velit"),
                }};
                key = "ipsa";
                maxResults = 234262L;
                oauthToken = "possimus";
                orderId = new String[]{{
                    add("quo"),
                    add("adipisci"),
                    add("non"),
                    add("laudantium"),
                }};
                pageToken = "velit";
                prettyPrint = false;
                quotaUser = "natus";
                searchString = "molestiae";
                siteId = new String[]{{
                    add("hic"),
                    add("hic"),
                    add("error"),
                    add("ea"),
                }};
                sortField = DfareportingOrderDocumentsListSortFieldEnum.NAME;
                sortOrder = DfareportingOrderDocumentsListSortOrderEnum.ASCENDING;
                uploadType = "pariatur";
                uploadProtocol = "sequi";
            }};            

            DfareportingOrderDocumentsListResponse res = sdk.orderDocuments.dfareportingOrderDocumentsList(req, new DfareportingOrderDocumentsListSecurity("aspernatur", "consequatur") {{
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
