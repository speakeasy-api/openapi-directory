# items

## Overview

The `items` resource contains data about things that can be tracked using the Brain.
When an item is detected for the first time by a device connected to the Brain, it will be added to this resource.
It will then be updated with information about where the item currently is, or where it has been seen for the last time.


<https://intellifi.zendesk.com/hc/en-us/articles/360007502554>
### Available Operations

* [addItem](#additem) - Create item
* [deleteItem](#deleteitem) - Delete item
* [getItemById](#getitembyid) - Get item
* [getItems](#getitems) - Get all items
* [updateItem](#updateitem) - Update existing item

## addItem

Create item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddItemRequestBody1Input;
import org.openapis.openapi.models.operations.AddItemRequestBody2Input;
import org.openapis.openapi.models.operations.AddItemRequestBody3Input;
import org.openapis.openapi.models.operations.AddItemResponse;
import org.openapis.openapi.models.shared.ItemProtocolEnum;
import org.openapis.openapi.models.shared.ItemTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TechnologyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new AddItemRequestBody3Input() {{
                codeHex = "deadbeef";
                configRequest = new java.util.HashMap<String, Object>() {{
                    put("quod", "quod");
                    put("esse", "totam");
                }};
                custom = "porro";
                label = "Foo Bar";
                locationRequest = "5b7d6cbd7503c445552a1664";
                metadata = new java.util.HashMap<String, Object>() {{
                    put("dicta", "nam");
                    put("officia", "occaecati");
                    put("fugit", "deleniti");
                }};
                protocol = ItemProtocolEnum.EPCGEN2;
                technology = TechnologyEnum.RFID;
                type = ItemTypeEnum.TAG;
            }}            

            AddItemResponse res = sdk.items.addItem(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteItem

Delete item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteItemRequest;
import org.openapis.openapi.models.operations.DeleteItemResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteItemRequest req = new DeleteItemRequest("hic");            

            DeleteItemResponse res = sdk.items.deleteItem(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemById

Get item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemByIdRequest;
import org.openapis.openapi.models.operations.GetItemByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetItemByIdRequest req = new GetItemByIdRequest("optio");            

            GetItemByIdResponse res = sdk.items.getItemById(req);

            if (res.item != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItems

Get all items

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemsRequest;
import org.openapis.openapi.models.operations.GetItemsResponse;
import org.openapis.openapi.models.shared.ItemProtocolEnum;
import org.openapis.openapi.models.shared.ItemTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TechnologyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetItemsRequest req = new GetItemsRequest() {{
                after = OffsetDateTime.parse("2022-10-15T16:29:54.554Z");
                afterCode = "commodi";
                afterId = "molestiae";
                before = "modi";
                beforeCode = "qui";
                beforeId = "impedit";
                codeHex = "deadbeef";
                from = "cum";
                fromCode = "esse";
                fromId = "ipsum";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                isPresent = false;
                label = "Foo Bar";
                limit = 568434L;
                location = "5b7d6cbd7503c445552a1664";
                metadata = "aspernatur";
                moveCount = 4523L;
                populate = "perferendis";
                protocol = ItemProtocolEnum.EPCGEN2;
                resultsOnly = false;
                select = "ad";
                sets = "5b7d6cbd7503c445552a1664";
                sort = "natus";
                technology = TechnologyEnum.RFID;
                text = "sed";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeLastPresent = "iste";
                timeMoved = "2018-08-30T09:51:59.737Z";
                timeUpdated = "2018-08-30T09:51:59.737Z";
                timeoutS = 2223.21;
                type = ItemTypeEnum.TAG;
                until = "natus";
                untilCode = "laboriosam";
                untilId = "hic";
            }};            

            GetItemsResponse res = sdk.items.getItems(req);

            if (res.getItems200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateItem

Update existing item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateItemRequest;
import org.openapis.openapi.models.operations.UpdateItemResponse;
import org.openapis.openapi.models.shared.ItemUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateItemRequest req = new UpdateItemRequest(                new ItemUpdate() {{
                                configRequest = new java.util.HashMap<String, Object>() {{
                                    put("fuga", "in");
                                    put("corporis", "iste");
                                    put("iure", "saepe");
                                    put("quidem", "architecto");
                                }};
                                custom = "ipsa";
                                label = "Foo Bar";
                                locationRequest = "5b7d6cbd7503c445552a1664";
                                metadata = new java.util.HashMap<String, Object>() {{
                                    put("est", "mollitia");
                                    put("laborum", "dolores");
                                    put("dolorem", "corporis");
                                    put("explicabo", "nobis");
                                }};
                            }};, "enim");            

            UpdateItemResponse res = sdk.items.updateItem(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
