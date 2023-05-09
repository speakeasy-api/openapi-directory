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

            DfareportingInventoryItemsGetRequest req = new DfareportingInventoryItemsGetRequest("ipsum", "exercitationem", "inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "neque";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "beatae";
                key = "necessitatibus";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "maiores";
                uploadProtocol = "odio";
            }};            

            DfareportingInventoryItemsGetResponse res = sdk.inventoryItems.dfareportingInventoryItemsGet(req, new DfareportingInventoryItemsGetSecurity("tenetur", "quam") {{
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

            DfareportingInventoryItemsListRequest req = new DfareportingInventoryItemsListRequest("nemo", "sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "doloribus";
                ids = new String[]{{
                    add("cumque"),
                }};
                inPlan = false;
                key = "eaque";
                maxResults = 625806L;
                oauthToken = "corporis";
                orderId = new String[]{{
                    add("commodi"),
                    add("maxime"),
                    add("non"),
                }};
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "repudiandae";
                siteId = new String[]{{
                    add("temporibus"),
                    add("reprehenderit"),
                }};
                sortField = DfareportingInventoryItemsListSortFieldEnum.NAME;
                sortOrder = DfareportingInventoryItemsListSortOrderEnum.ASCENDING;
                type = DfareportingInventoryItemsListTypeEnum.PLANNING_PLACEMENT_TYPE_REGULAR;
                uploadType = "reiciendis";
                uploadProtocol = "officiis";
            }};            

            DfareportingInventoryItemsListResponse res = sdk.inventoryItems.dfareportingInventoryItemsList(req, new DfareportingInventoryItemsListSecurity("voluptates", "tenetur") {{
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
