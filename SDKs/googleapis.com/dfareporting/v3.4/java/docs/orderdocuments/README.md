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

            DfareportingOrderDocumentsGetRequest req = new DfareportingOrderDocumentsGetRequest("a", "temporibus", "consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "delectus";
                key = "laudantium";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "laudantium";
                uploadProtocol = "praesentium";
            }};            

            DfareportingOrderDocumentsGetResponse res = sdk.orderDocuments.dfareportingOrderDocumentsGet(req, new DfareportingOrderDocumentsGetSecurity("sed", "fuga") {{
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

            DfareportingOrderDocumentsListRequest req = new DfareportingOrderDocumentsListRequest("deleniti", "accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                approved = false;
                callback = "accusamus";
                fields = "commodi";
                ids = new String[]{{
                    add("perferendis"),
                }};
                key = "eligendi";
                maxResults = 814367L;
                oauthToken = "molestias";
                orderId = new String[]{{
                    add("veniam"),
                    add("officia"),
                    add("sapiente"),
                    add("possimus"),
                }};
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "doloremque";
                searchString = "ut";
                siteId = new String[]{{
                    add("nesciunt"),
                    add("voluptate"),
                    add("corporis"),
                    add("aspernatur"),
                }};
                sortField = DfareportingOrderDocumentsListSortFieldEnum.ID;
                sortOrder = DfareportingOrderDocumentsListSortOrderEnum.ASCENDING;
                uploadType = "consequuntur";
                uploadProtocol = "harum";
            }};            

            DfareportingOrderDocumentsListResponse res = sdk.orderDocuments.dfareportingOrderDocumentsList(req, new DfareportingOrderDocumentsListSecurity("earum", "mollitia") {{
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
