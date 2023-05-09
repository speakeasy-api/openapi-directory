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

            DfareportingInventoryItemsGetRequest req = new DfareportingInventoryItemsGetRequest("tenetur", "ducimus", "perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "perspiciatis";
                fields = "nemo";
                key = "ex";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "quidem";
                uploadProtocol = "voluptatem";
            }};            

            DfareportingInventoryItemsGetResponse res = sdk.inventoryItems.dfareportingInventoryItemsGet(req, new DfareportingInventoryItemsGetSecurity("tenetur", "mollitia") {{
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

            DfareportingInventoryItemsListRequest req = new DfareportingInventoryItemsListRequest("voluptatem", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eos";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "labore";
                ids = new String[]{{
                    add("voluptates"),
                }};
                inPlan = false;
                key = "reprehenderit";
                maxResults = 775356L;
                oauthToken = "incidunt";
                orderId = new String[]{{
                    add("accusamus"),
                    add("aliquid"),
                    add("quaerat"),
                }};
                pageToken = "eaque";
                prettyPrint = false;
                quotaUser = "nisi";
                siteId = new String[]{{
                    add("consequuntur"),
                    add("iusto"),
                }};
                sortField = DfareportingInventoryItemsListSortFieldEnum.ID;
                sortOrder = DfareportingInventoryItemsListSortOrderEnum.ASCENDING;
                type = DfareportingInventoryItemsListTypeEnum.PLANNING_PLACEMENT_TYPE_REGULAR;
                uploadType = "esse";
                uploadProtocol = "nobis";
            }};            

            DfareportingInventoryItemsListResponse res = sdk.inventoryItems.dfareportingInventoryItemsList(req, new DfareportingInventoryItemsListSecurity("voluptatem", "ab") {{
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
