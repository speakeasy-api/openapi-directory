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

            DfareportingOrdersGetRequest req = new DfareportingOrdersGetRequest("officiis", "quasi", "vero") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "quisquam";
                fields = "minus";
                key = "corporis";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "quod";
                uploadProtocol = "saepe";
            }};            

            DfareportingOrdersGetResponse res = sdk.orders.dfareportingOrdersGet(req, new DfareportingOrdersGetSecurity("animi", "deleniti") {{
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

            DfareportingOrdersListRequest req = new DfareportingOrdersListRequest("eveniet", "molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "adipisci";
                fields = "et";
                ids = new String[]{{
                    add("commodi"),
                }};
                key = "laboriosam";
                maxResults = 187267L;
                oauthToken = "porro";
                pageToken = "at";
                prettyPrint = false;
                quotaUser = "fuga";
                searchString = "vel";
                siteId = new String[]{{
                    add("iusto"),
                    add("voluptate"),
                    add("cumque"),
                    add("sunt"),
                }};
                sortField = DfareportingOrdersListSortFieldEnum.NAME;
                sortOrder = DfareportingOrdersListSortOrderEnum.DESCENDING;
                uploadType = "laboriosam";
                uploadProtocol = "doloremque";
            }};            

            DfareportingOrdersListResponse res = sdk.orders.dfareportingOrdersList(req, new DfareportingOrdersListSecurity("nisi", "eum") {{
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
