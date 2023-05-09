# sets

## Overview

It can be useful to group items or Smartspots in a list. The `sets` resource can be used to create and manage such list sets.
Sets can be utilized in various Brain Management Console utilities and can also be useful in custom Brain applications.


<https://intellifi.zendesk.com/hc/en-us/articles/360007824993>
### Available Operations

* [addItemIdsList](#additemidslist) - Add items to an existing list
* [addItemIdsSpotList](#additemidsspotlist) - Add spots to an existing list
* [addItemList](#additemlist) - Create item list
* [addSpotList](#addspotlist) - Create spot list
* [deleteItemIdFromItemList](#deleteitemidfromitemlist) - Delete item from list
* [deleteItemIdFromSpotList](#deleteitemidfromspotlist) - Delete spot from list
* [deleteItemSet](#deleteitemset) - Delete item list
* [deleteSpotList](#deletespotlist) - Delete spot list
* [getItemListById](#getitemlistbyid) - Get item list
* [getItemListIdsById](#getitemlistidsbyid) - Get item ids for this list
* [getItemLists](#getitemlists) - Get all item lists
* [getSpotListById](#getspotlistbyid) - Info for a specific spot list
* [getSpotListIdsById](#getspotlistidsbyid) - Get spot ids for this list
* [getSpotLists](#getspotlists) - Get all spot lists
* [updateItemList](#updateitemlist) - Update existing item list
* [updateSpotList](#updatespotlist) - Update existing spot list

## addItemIdsList

Add items to an existing list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddItemIdsListRequest;
import org.openapis.openapi.models.operations.AddItemIdsListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddItemIdsListRequest req = new AddItemIdsListRequest(                new String[]{{
                                add("5b7d6cbd7503c445552a1664"),
                                add("5b7d6cbd7503c445552a1664"),
                            }}, "distinctio");            

            AddItemIdsListResponse res = sdk.sets.addItemIdsList(req);

            if (res.responseListResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addItemIdsSpotList

Add spots to an existing list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddItemIdsSpotListRequest;
import org.openapis.openapi.models.operations.AddItemIdsSpotListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddItemIdsSpotListRequest req = new AddItemIdsSpotListRequest(                new String[]{{
                                add("5b7d6cbd7503c445552a1664"),
                                add("5b7d6cbd7503c445552a1664"),
                                add("5b7d6cbd7503c445552a1664"),
                            }}, "labore");            

            AddItemIdsSpotListResponse res = sdk.sets.addItemIdsSpotList(req);

            if (res.responseListResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addItemList

Create item list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddItemListResponse;
import org.openapis.openapi.models.shared.ItemListInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ItemListInput req = new ItemListInput() {{
                custom = "labore";
                label = "Foo Bar";
                metadata = new java.util.HashMap<String, Object>() {{
                    put("natus", "nobis");
                    put("eum", "vero");
                }};
            }};            

            AddItemListResponse res = sdk.sets.addItemList(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addSpotList

Create spot list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddSpotListResponse;
import org.openapis.openapi.models.shared.ItemListInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ItemListInput req = new ItemListInput() {{
                custom = "aspernatur";
                label = "Foo Bar";
                metadata = new java.util.HashMap<String, Object>() {{
                    put("magnam", "et");
                }};
            }};            

            AddSpotListResponse res = sdk.sets.addSpotList(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteItemIdFromItemList

Delete item from list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteItemIdFromItemListRequest;
import org.openapis.openapi.models.operations.DeleteItemIdFromItemListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteItemIdFromItemListRequest req = new DeleteItemIdFromItemListRequest("excepturi", "ullam");            

            DeleteItemIdFromItemListResponse res = sdk.sets.deleteItemIdFromItemList(req);

            if (res.responseListResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteItemIdFromSpotList

Delete spot from list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteItemIdFromSpotListRequest;
import org.openapis.openapi.models.operations.DeleteItemIdFromSpotListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteItemIdFromSpotListRequest req = new DeleteItemIdFromSpotListRequest("provident", "quos");            

            DeleteItemIdFromSpotListResponse res = sdk.sets.deleteItemIdFromSpotList(req);

            if (res.responseListResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteItemSet

Delete item list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteItemSetRequest;
import org.openapis.openapi.models.operations.DeleteItemSetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteItemSetRequest req = new DeleteItemSetRequest("sint");            

            DeleteItemSetResponse res = sdk.sets.deleteItemSet(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSpotList

Delete spot list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSpotListRequest;
import org.openapis.openapi.models.operations.DeleteSpotListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSpotListRequest req = new DeleteSpotListRequest("accusantium");            

            DeleteSpotListResponse res = sdk.sets.deleteSpotList(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemListById

Get item list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemListByIdRequest;
import org.openapis.openapi.models.operations.GetItemListByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetItemListByIdRequest req = new GetItemListByIdRequest("mollitia");            

            GetItemListByIdResponse res = sdk.sets.getItemListById(req);

            if (res.itemList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemListIdsById

Get item ids for this list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemListIdsByIdRequest;
import org.openapis.openapi.models.operations.GetItemListIdsByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetItemListIdsByIdRequest req = new GetItemListIdsByIdRequest("reiciendis");            

            GetItemListIdsByIdResponse res = sdk.sets.getItemListIdsById(req);

            if (res.listOfItemIds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemLists

Get all item lists

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemListsRequest;
import org.openapis.openapi.models.operations.GetItemListsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetItemListsRequest req = new GetItemListsRequest() {{
                after = OffsetDateTime.parse("2022-05-11T16:07:41.164Z");
                afterId = "eum";
                before = "dolor";
                beforeId = "necessitatibus";
                from = "odit";
                fromId = "nemo";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                label = "Foo Bar";
                limit = 97260L;
                metadata = "iure";
                populate = "doloribus";
                resultsOnly = false;
                select = "debitis";
                sha1 = "eius";
                sort = "maxime";
                text = "deleniti";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeUpdated = "2018-08-30T09:51:59.737Z";
                timeoutS = 7038.89;
                total = 447926L;
                until = "architecto";
                untilId = "architecto";
            }};            

            GetItemListsResponse res = sdk.sets.getItemLists(req);

            if (res.getItemLists200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpotListById

Info for a specific spot list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpotListByIdRequest;
import org.openapis.openapi.models.operations.GetSpotListByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSpotListByIdRequest req = new GetSpotListByIdRequest("repudiandae");            

            GetSpotListByIdResponse res = sdk.sets.getSpotListById(req);

            if (res.spotList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpotListIdsById

Get spot ids for this list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpotListIdsByIdRequest;
import org.openapis.openapi.models.operations.GetSpotListIdsByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSpotListIdsByIdRequest req = new GetSpotListIdsByIdRequest("ullam");            

            GetSpotListIdsByIdResponse res = sdk.sets.getSpotListIdsById(req);

            if (res.listOfItemIds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpotLists

Get all spot lists

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpotListsRequest;
import org.openapis.openapi.models.operations.GetSpotListsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSpotListsRequest req = new GetSpotListsRequest() {{
                after = OffsetDateTime.parse("2022-01-23T10:45:15.714Z");
                afterId = "repellat";
                before = "quibusdam";
                beforeId = "sed";
                from = "saepe";
                fromId = "pariatur";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                label = "Foo Bar";
                limit = 37559L;
                metadata = "consequuntur";
                populate = "praesentium";
                resultsOnly = false;
                select = "natus";
                sort = "magni";
                text = "sunt";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeUpdated = "2018-08-30T09:51:59.737Z";
                timeoutS = 7790.51;
                total = 848009L;
                until = "pariatur";
                untilId = "maxime";
            }};            

            GetSpotListsResponse res = sdk.sets.getSpotLists(req);

            if (res.getSpotLists200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateItemList

Update existing item list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateItemListRequest;
import org.openapis.openapi.models.operations.UpdateItemListResponse;
import org.openapis.openapi.models.shared.ItemListInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateItemListRequest req = new UpdateItemListRequest(                new ItemListInput() {{
                                custom = "ea";
                                label = "Foo Bar";
                                metadata = new java.util.HashMap<String, Object>() {{
                                    put("odit", "ea");
                                    put("accusantium", "ab");
                                    put("maiores", "quidem");
                                }};
                            }};, "ipsam");            

            UpdateItemListResponse res = sdk.sets.updateItemList(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSpotList

Update existing spot list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSpotListRequest;
import org.openapis.openapi.models.operations.UpdateSpotListResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpotListInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSpotListRequest req = new UpdateSpotListRequest(                new SpotListInput() {{
                                custom = "voluptate";
                                label = "Foo Bar";
                                metadata = new java.util.HashMap<String, Object>() {{
                                    put("nam", "eaque");
                                    put("pariatur", "nemo");
                                }};
                            }};, "voluptatibus");            

            UpdateSpotListResponse res = sdk.sets.updateSpotList(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
