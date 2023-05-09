# serviceInventory

### Available Operations

* [listServiceInventories](#listserviceinventories) - List ServiceInventories
* [listServiceInventoryTags](#listserviceinventorytags) - List Tags for ServiceInventory
* [showServiceInventory](#showserviceinventory) - Show an existing ServiceInventory
* [tagServiceInventory](#tagserviceinventory) - Tag a ServiceInventory
* [untagServiceInventory](#untagserviceinventory) - Untag a ServiceInventory

## listServiceInventories

Returns an array of ServiceInventory objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceInventoriesRequest;
import org.openapis.openapi.models.operations.ListServiceInventoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus", "laboriosam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListServiceInventoriesRequest req = new ListServiceInventoriesRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("saepe", "fuga");
                    put("in", "corporis");
                    put("iste", "iure");
                    put("saepe", "quidem");
                }};
                limit = 99280L;
                offset = 60225L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("est", "mollitia");
                    put("laborum", "dolores");
                    put("dolorem", "corporis");
                    put("explicabo", "nobis");
                }};
            }};            

            ListServiceInventoriesResponse res = sdk.serviceInventory.listServiceInventories(req);

            if (res.serviceInventoriesCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServiceInventoryTags

Returns an array of Tag objects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceInventoryTagsRequest;
import org.openapis.openapi.models.operations.ListServiceInventoryTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim", "omnis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ListServiceInventoryTagsRequest req = new ListServiceInventoryTagsRequest("nemo") {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("excepturi", "accusantium");
                    put("iure", "culpa");
                }};
                limit = 988374L;
                offset = 958950L;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("mollitia", "dolorem");
                }};
            }};            

            ListServiceInventoryTagsResponse res = sdk.serviceInventory.listServiceInventoryTags(req);

            if (res.tagsCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## showServiceInventory

Returns a ServiceInventory object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShowServiceInventoryRequest;
import org.openapis.openapi.models.operations.ShowServiceInventoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa", "consequuntur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ShowServiceInventoryRequest req = new ShowServiceInventoryRequest("repellat");            

            ShowServiceInventoryResponse res = sdk.serviceInventory.showServiceInventory(req);

            if (res.serviceInventory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagServiceInventory

Tags a ServiceInventory object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagServiceInventoryRequest;
import org.openapis.openapi.models.operations.TagServiceInventoryResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia", "occaecati") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            TagServiceInventoryRequest req = new TagServiceInventoryRequest(                new org.openapis.openapi.models.shared.Tag[]{{
                                add(new Tag() {{
                                    tag = "/namespace/architecture=x86_64";
                                }}),
                                add(new Tag() {{
                                    tag = "/namespace/architecture=x86_64";
                                }}),
                            }}, "commodi");            

            TagServiceInventoryResponse res = sdk.serviceInventory.tagServiceInventory(req);

            if (res.tags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagServiceInventory

Untags a ServiceInventory object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagServiceInventoryRequest;
import org.openapis.openapi.models.operations.UntagServiceInventoryResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam", "molestiae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            UntagServiceInventoryRequest req = new UntagServiceInventoryRequest(                new org.openapis.openapi.models.shared.Tag[]{{
                                add(new Tag() {{
                                    tag = "/namespace/architecture=x86_64";
                                }}),
                            }}, "error");            

            UntagServiceInventoryResponse res = sdk.serviceInventory.untagServiceInventory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
