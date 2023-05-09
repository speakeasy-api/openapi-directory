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

            DfareportingOrdersGetRequest req = new DfareportingOrdersGetRequest("ipsum", "voluptas", "voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "veritatis";
                fields = "officia";
                key = "voluptas";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "cum";
                uploadProtocol = "eius";
            }};            

            DfareportingOrdersGetResponse res = sdk.orders.dfareportingOrdersGet(req, new DfareportingOrdersGetSecurity("deserunt", "voluptates") {{
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

            DfareportingOrdersListRequest req = new DfareportingOrdersListRequest("in", "harum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "harum";
                fields = "omnis";
                ids = new String[]{{
                    add("rem"),
                }};
                key = "placeat";
                maxResults = 292138L;
                oauthToken = "repudiandae";
                pageToken = "consectetur";
                prettyPrint = false;
                quotaUser = "perferendis";
                searchString = "aliquam";
                siteId = new String[]{{
                    add("quae"),
                    add("dolorum"),
                    add("fuga"),
                }};
                sortField = DfareportingOrdersListSortFieldEnum.ID;
                sortOrder = DfareportingOrdersListSortOrderEnum.ASCENDING;
                uploadType = "temporibus";
                uploadProtocol = "aliquam";
            }};            

            DfareportingOrdersListResponse res = sdk.orders.dfareportingOrdersList(req, new DfareportingOrdersListSecurity("error", "deleniti") {{
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
