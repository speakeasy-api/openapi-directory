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

            DfareportingInventoryItemsGetRequest req = new DfareportingInventoryItemsGetRequest("quas", "asperiores", "eos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "exercitationem";
                key = "quo";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "in";
                uploadProtocol = "voluptas";
            }};            

            DfareportingInventoryItemsGetResponse res = sdk.inventoryItems.dfareportingInventoryItemsGet(req, new DfareportingInventoryItemsGetSecurity("similique", "tenetur") {{
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

            DfareportingInventoryItemsListRequest req = new DfareportingInventoryItemsListRequest("error", "blanditiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nulla";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "est";
                ids = new String[]{{
                    add("blanditiis"),
                }};
                inPlan = false;
                key = "unde";
                maxResults = 944880L;
                oauthToken = "maxime";
                orderId = new String[]{{
                    add("ut"),
                    add("fugiat"),
                }};
                pageToken = "facilis";
                prettyPrint = false;
                quotaUser = "dolores";
                siteId = new String[]{{
                    add("eius"),
                    add("ullam"),
                }};
                sortField = DfareportingInventoryItemsListSortFieldEnum.ID;
                sortOrder = DfareportingInventoryItemsListSortOrderEnum.ASCENDING;
                type = DfareportingInventoryItemsListTypeEnum.PLANNING_PLACEMENT_TYPE_CREDIT;
                uploadType = "ullam";
                uploadProtocol = "minus";
            }};            

            DfareportingInventoryItemsListResponse res = sdk.inventoryItems.dfareportingInventoryItemsList(req, new DfareportingInventoryItemsListSecurity("placeat", "in") {{
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
