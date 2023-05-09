# orders

### Available Operations

* [dfareportingOrdersGet](#dfareportingordersget) - Gets one order by ID.
* [dfareportingOrdersList](#dfareportingorderslist) - Retrieves a list of orders, possibly filtered. This method supports paging.

## dfareportingOrdersGet

Gets one order by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingOrdersGetRequest;
import org.openapis.openapi.models.operations.DfareportingOrdersGetResponse;
import org.openapis.openapi.models.operations.DfareportingOrdersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingOrdersGetRequest req = new DfareportingOrdersGetRequest("occaecati", "alias", "doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "mollitia";
                key = "cumque";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "accusamus";
                uploadProtocol = "dicta";
            }};            

            DfareportingOrdersGetResponse res = sdk.orders.dfareportingOrdersGet(req, new DfareportingOrdersGetSecurity("sint", "ex") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.order != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingOrdersList

Retrieves a list of orders, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingOrdersListRequest;
import org.openapis.openapi.models.operations.DfareportingOrdersListResponse;
import org.openapis.openapi.models.operations.DfareportingOrdersListSecurity;
import org.openapis.openapi.models.operations.DfareportingOrdersListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingOrdersListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingOrdersListRequest req = new DfareportingOrdersListRequest("vitae", "eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perspiciatis";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "aliquam";
                ids = new String[]{{
                    add("eligendi"),
                }};
                key = "atque";
                maxResults = 393177L;
                oauthToken = "omnis";
                pageToken = "nulla";
                prettyPrint = false;
                quotaUser = "facere";
                searchString = "ducimus";
                siteId = new String[]{{
                    add("omnis"),
                    add("molestiae"),
                    add("illo"),
                    add("unde"),
                }};
                sortField = DfareportingOrdersListSortFieldEnum.NAME;
                sortOrder = DfareportingOrdersListSortOrderEnum.ASCENDING;
                uploadType = "dignissimos";
                uploadProtocol = "harum";
            }};            

            DfareportingOrdersListResponse res = sdk.orders.dfareportingOrdersList(req, new DfareportingOrdersListSecurity("odit", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ordersListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
