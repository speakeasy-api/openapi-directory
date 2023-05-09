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

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest req = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkEditAssignedInventorySourcesRequestInput = new BulkEditAssignedInventorySourcesRequestInput() {{
                    advertiserId = "hic";
                    createdAssignedInventorySources = new org.openapis.openapi.models.shared.AssignedInventorySourceInput[]{{
                        add(new AssignedInventorySourceInput() {{
                            inventorySourceId = "vitae";
                        }}),
                        add(new AssignedInventorySourceInput() {{
                            inventorySourceId = "iusto";
                        }}),
                        add(new AssignedInventorySourceInput() {{
                            inventorySourceId = "atque";
                        }}),
                    }};
                    deletedAssignedInventorySources = new String[]{{
                        add("molestiae"),
                    }};
                    partnerId = "nam";
                }};;
                accessToken = "aperiam";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "asperiores";
                key = "at";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "deleniti";
                uploadProtocol = "rem";
            }};            

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit(req, new DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity("vel", "eos") {{
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

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest req = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                assignedInventorySourceInput = new AssignedInventorySourceInput() {{
                    inventorySourceId = "blanditiis";
                }};;
                accessToken = "iste";
                advertiserId = "accusamus";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "labore";
                key = "blanditiis";
                oauthToken = "ducimus";
                partnerId = "consectetur";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quis";
                uploadProtocol = "accusantium";
            }};            

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsAssignedInventorySourcesCreate(req, new DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity("ratione", "consectetur") {{
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

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest req = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest("asperiores", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "possimus";
                advertiserId = "tempore";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "consequuntur";
                key = "nemo";
                oauthToken = "nobis";
                partnerId = "debitis";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "veritatis";
                uploadProtocol = "minima";
            }};            

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsAssignedInventorySourcesDelete(req, new DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity("magni", "itaque") {{
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

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest req = new DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest("error") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                advertiserId = "placeat";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "earum";
                filter = "minima";
                key = "odit";
                oauthToken = "odit";
                orderBy = "eius";
                pageSize = 625378L;
                pageToken = "vel";
                partnerId = "dolorum";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "itaque";
                uploadProtocol = "ab";
            }};            

            DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsAssignedInventorySourcesList(req, new DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity("sunt", "amet") {{
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
                    displayName = "iusto";
                }};;
                accessToken = "corrupti";
                advertiserId = "non";
                alt = AltEnum.MEDIA;
                callback = "vero";
                fields = "eligendi";
                key = "minima";
                oauthToken = "omnis";
                partnerId = "recusandae";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "voluptatibus";
                uploadProtocol = "autem";
            }};            

            DisplayvideoInventorySourceGroupsCreateResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsCreate(req, new DisplayvideoInventorySourceGroupsCreateSecurity("in", "repellat") {{
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

            DisplayvideoInventorySourceGroupsDeleteRequest req = new DisplayvideoInventorySourceGroupsDeleteRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolore";
                advertiserId = "optio";
                alt = AltEnum.PROTO;
                callback = "repudiandae";
                fields = "tempora";
                key = "libero";
                oauthToken = "suscipit";
                partnerId = "illum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "aliquid";
                uploadProtocol = "sint";
            }};            

            DisplayvideoInventorySourceGroupsDeleteResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsDelete(req, new DisplayvideoInventorySourceGroupsDeleteSecurity("aliquid", "repellat") {{
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

            DisplayvideoInventorySourceGroupsGetRequest req = new DisplayvideoInventorySourceGroupsGetRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                advertiserId = "ullam";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "dignissimos";
                key = "corporis";
                oauthToken = "perferendis";
                partnerId = "architecto";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "corporis";
                uploadProtocol = "nihil";
            }};            

            DisplayvideoInventorySourceGroupsGetResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsGet(req, new DisplayvideoInventorySourceGroupsGetSecurity("officiis", "dolore") {{
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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maiores";
                advertiserId = "ipsam";
                alt = AltEnum.JSON;
                callback = "hic";
                fields = "praesentium";
                filter = "libero";
                key = "consequatur";
                oauthToken = "totam";
                orderBy = "tempora";
                pageSize = 777193L;
                pageToken = "dolor";
                partnerId = "sunt";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "quam";
                uploadProtocol = "officiis";
            }};            

            DisplayvideoInventorySourceGroupsListResponse res = sdk.inventorySourceGroups.displayvideoInventorySourceGroupsList(req, new DisplayvideoInventorySourceGroupsListSecurity("dicta", "excepturi") {{
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
