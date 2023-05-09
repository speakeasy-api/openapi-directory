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

            DfareportingOrdersGetRequest req = new DfareportingOrdersGetRequest("illo", "tempora", "ut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "libero";
                key = "deserunt";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "aperiam";
                uploadProtocol = "similique";
            }};            

            DfareportingOrdersGetResponse res = sdk.orders.dfareportingOrdersGet(req, new DfareportingOrdersGetSecurity("nulla", "pariatur") {{
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

            DfareportingOrdersListRequest req = new DfareportingOrdersListRequest("reiciendis", "temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "porro";
                ids = new String[]{{
                    add("odio"),
                }};
                key = "possimus";
                maxResults = 632121L;
                oauthToken = "animi";
                pageToken = "iste";
                prettyPrint = false;
                quotaUser = "sunt";
                searchString = "deleniti";
                siteId = new String[]{{
                    add("laborum"),
                }};
                sortField = DfareportingOrdersListSortFieldEnum.ID;
                sortOrder = DfareportingOrdersListSortOrderEnum.DESCENDING;
                uploadType = "fugiat";
                uploadProtocol = "sint";
            }};            

            DfareportingOrdersListResponse res = sdk.orders.dfareportingOrdersList(req, new DfareportingOrdersListSecurity("aliquid", "odit") {{
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
