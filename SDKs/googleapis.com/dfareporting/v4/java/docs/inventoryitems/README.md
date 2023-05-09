# inventoryItems

### Available Operations

* [dfareportingInventoryItemsGet](#dfareportinginventoryitemsget) - Gets one inventory item by ID.
* [dfareportingInventoryItemsList](#dfareportinginventoryitemslist) - Retrieves a list of inventory items, possibly filtered. This method supports paging.

## dfareportingInventoryItemsGet

Gets one inventory item by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingInventoryItemsGetRequest;
import org.openapis.openapi.models.operations.DfareportingInventoryItemsGetResponse;
import org.openapis.openapi.models.operations.DfareportingInventoryItemsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingInventoryItemsGetRequest req = new DfareportingInventoryItemsGetRequest("fugit", "necessitatibus", "omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "beatae";
                key = "nesciunt";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "voluptatum";
                uploadProtocol = "veritatis";
            }};            

            DfareportingInventoryItemsGetResponse res = sdk.inventoryItems.dfareportingInventoryItemsGet(req, new DfareportingInventoryItemsGetSecurity("consequuntur", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventoryItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingInventoryItemsList

Retrieves a list of inventory items, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingInventoryItemsListRequest;
import org.openapis.openapi.models.operations.DfareportingInventoryItemsListResponse;
import org.openapis.openapi.models.operations.DfareportingInventoryItemsListSecurity;
import org.openapis.openapi.models.operations.DfareportingInventoryItemsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingInventoryItemsListSortOrderEnum;
import org.openapis.openapi.models.operations.DfareportingInventoryItemsListTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingInventoryItemsListRequest req = new DfareportingInventoryItemsListRequest("fugit", "alias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptates";
                alt = AltEnum.PROTO;
                callback = "at";
                fields = "qui";
                ids = new String[]{{
                    add("eius"),
                }};
                inPlan = false;
                key = "dicta";
                maxResults = 120583L;
                oauthToken = "deleniti";
                orderId = new String[]{{
                    add("rem"),
                    add("recusandae"),
                    add("quam"),
                }};
                pageToken = "adipisci";
                prettyPrint = false;
                quotaUser = "praesentium";
                siteId = new String[]{{
                    add("unde"),
                    add("eveniet"),
                }};
                sortField = DfareportingInventoryItemsListSortFieldEnum.NAME;
                sortOrder = DfareportingInventoryItemsListSortOrderEnum.DESCENDING;
                type = DfareportingInventoryItemsListTypeEnum.PLANNING_PLACEMENT_TYPE_CREDIT;
                uploadType = "voluptatum";
                uploadProtocol = "rerum";
            }};            

            DfareportingInventoryItemsListResponse res = sdk.inventoryItems.dfareportingInventoryItemsList(req, new DfareportingInventoryItemsListSecurity("officia", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventoryItemsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
