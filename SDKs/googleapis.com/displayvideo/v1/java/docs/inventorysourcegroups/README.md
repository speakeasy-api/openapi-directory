# inventorySourceGroups

### Available Operations

* [displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit](#displayvideoinventorysourcegroupsassignedinventorysourcesbulkedit) - Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
* [displayvideoInventorySourceGroupsAssignedInventorySourcesCreate](#displayvideoinventorysourcegroupsassignedinventorysourcescreate) - Creates an assignment between an inventory source and an inventory source group.
* [displayvideoInventorySourceGroupsAssignedInventorySourcesDelete](#displayvideoinventorysourcegroupsassignedinventorysourcesdelete) - Deletes the assignment between an inventory source and an inventory source group.
* [displayvideoInventorySourceGroupsAssignedInventorySourcesList](#displayvideoinventorysourcegroupsassignedinventorysourceslist) - Lists inventory sources assigned to an inventory source group.
* [displayvideoInventorySourceGroupsCreate](#displayvideoinventorysourcegroupscreate) - Creates a new inventory source group. Returns the newly created inventory source group if successful.
* [displayvideoInventorySourceGroupsDelete](#displayvideoinventorysourcegroupsdelete) - Deletes an inventory source group.
* [displayvideoInventorySourceGroupsGet](#displayvideoinventorysourcegroupsget) - Gets an inventory source group.
* [displayvideoInventorySourceGroupsList](#displayvideoinventorysourcegroupslist) - Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.

## displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit

Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssignedInventorySourceInput;
import org.openapis.openapi.models.shared.BulkEditAssignedInventorySourcesRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest req = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest("nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkEditAssignedInventorySourcesRequestInput = new BulkEditAssignedInventorySourcesRequestInput() {{
                    advertiserId = "placeat";
                    createdAssignedInventorySources = new org.openapis.openapi.models.shared.AssignedInventorySourceInput[]{{
                        add(new AssignedInventorySourceInput() {{
                            inventorySourceId = "facere";
                        }}),
                    }};
                    deletedAssignedInventorySources = new String[]{{
                        add("nobis"),
                        add("porro"),
                    }};
                    partnerId = "labore";
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "qui";
                fields = "qui";
                key = "consectetur";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "iure";
                uploadProtocol = "aliquid";
            }};            

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit(req, new DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity("cum", "fugiat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkEditAssignedInventorySourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoInventorySourceGroupsAssignedInventorySourcesCreate

Creates an assignment between an inventory source and an inventory source group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssignedInventorySourceInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest req = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest("rem") {{
                dollarXgafv = XgafvEnum.TWO;
                assignedInventorySourceInput = new AssignedInventorySourceInput() {{
                    inventorySourceId = "officiis";
                }};;
                accessToken = "corporis";
                advertiserId = "repellendus";
                alt = AltEnum.JSON;
                callback = "voluptatem";
                fields = "libero";
                key = "excepturi";
                oauthToken = "odio";
                partnerId = "omnis";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "delectus";
                uploadProtocol = "magni";
            }};            

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsAssignedInventorySourcesCreate(req, new DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity("sit", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignedInventorySource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoInventorySourceGroupsAssignedInventorySourcesDelete

Deletes the assignment between an inventory source and an inventory source group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest req = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest("voluptatum", "nihil") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                advertiserId = "eaque";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "aut";
                key = "impedit";
                oauthToken = "quod";
                partnerId = "quo";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "voluptatem";
                uploadProtocol = "perspiciatis";
            }};            

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsAssignedInventorySourcesDelete(req, new DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity("ea", "eius") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoInventorySourceGroupsAssignedInventorySourcesList

Lists inventory sources assigned to an inventory source group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest req = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest("aperiam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                advertiserId = "beatae";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "ipsum";
                filter = "debitis";
                key = "quis";
                oauthToken = "eaque";
                orderBy = "incidunt";
                pageSize = 281436L;
                pageToken = "delectus";
                partnerId = "aliquid";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "maiores";
                uploadProtocol = "debitis";
            }};            

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsAssignedInventorySourcesList(req, new DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity("reprehenderit", "eos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAssignedInventorySourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoInventorySourceGroupsCreate

Creates a new inventory source group. Returns the newly created inventory source group if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InventorySourceGroupInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoInventorySourceGroupsCreateRequest req = new DisplayvideoInventorySourceGroupsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                inventorySourceGroupInput = new InventorySourceGroupInput() {{
                    displayName = "cumque";
                }};;
                accessToken = "ut";
                advertiserId = "quae";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "assumenda";
                key = "consequatur";
                oauthToken = "cumque";
                partnerId = "placeat";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "tenetur";
                uploadProtocol = "non";
            }};            

            DisplayvideoInventorySourceGroupsCreateResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsCreate(req, new DisplayvideoInventorySourceGroupsCreateSecurity("accusantium", "corrupti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventorySourceGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoInventorySourceGroupsDelete

Deletes an inventory source group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoInventorySourceGroupsDeleteRequest req = new DisplayvideoInventorySourceGroupsDeleteRequest("itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "impedit";
                advertiserId = "dicta";
                alt = AltEnum.MEDIA;
                callback = "impedit";
                fields = "eveniet";
                key = "cum";
                oauthToken = "dolore";
                partnerId = "illum";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "officiis";
                uploadProtocol = "quasi";
            }};            

            DisplayvideoInventorySourceGroupsDeleteResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsDelete(req, new DisplayvideoInventorySourceGroupsDeleteSecurity("accusamus", "animi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoInventorySourceGroupsGet

Gets an inventory source group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoInventorySourceGroupsGetRequest req = new DisplayvideoInventorySourceGroupsGetRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maiores";
                advertiserId = "odio";
                alt = AltEnum.JSON;
                callback = "fuga";
                fields = "itaque";
                key = "possimus";
                oauthToken = "tenetur";
                partnerId = "sed";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "eligendi";
                uploadProtocol = "id";
            }};            

            DisplayvideoInventorySourceGroupsGetResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsGet(req, new DisplayvideoInventorySourceGroupsGetSecurity("distinctio", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventorySourceGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoInventorySourceGroupsList

Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoInventorySourceGroupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoInventorySourceGroupsListRequest req = new DisplayvideoInventorySourceGroupsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                advertiserId = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "et";
                fields = "quisquam";
                filter = "unde";
                key = "sed";
                oauthToken = "suscipit";
                orderBy = "facere";
                pageSize = 867581L;
                pageToken = "nam";
                partnerId = "quaerat";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "sint";
                uploadProtocol = "eius";
            }};            

            DisplayvideoInventorySourceGroupsListResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsList(req, new DisplayvideoInventorySourceGroupsListSecurity("vel", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInventorySourceGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
