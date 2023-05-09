# SDK

## Overview

The Media API can be used to query, download and delete media items such as audio files for use with other Nexmo APIs.

### Available Operations

* [deleteAMediaItem](#deleteamediaitem) - Delete a media item
* [listAndSearchMediaItems](#listandsearchmediaitems) - List and search media items
* [retrieveAMediaItem](#retrieveamediaitem) - Retrieve a media item
* [updateAMediaItem](#updateamediaitem) - Update a media item

## deleteAMediaItem

Delete a previously created media item by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAMediaItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAMediaItemResponse res = sdk.sdk.deleteAMediaItem();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAndSearchMediaItems

Retrieve information about multiple media items with the ability to search and paginate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAndSearchMediaItemsOrderEnum;
import org.openapis.openapi.models.operations.ListAndSearchMediaItemsRequest;
import org.openapis.openapi.models.operations.ListAndSearchMediaItemsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAndSearchMediaItemsRequest req = new ListAndSearchMediaItemsRequest() {{
                endTime = "2020-01-01T14:00:00.000Z";
                order = ListAndSearchMediaItemsOrderEnum.ASCENDING;
                pageIndex = 1L;
                pageSize = 50L;
                startTime = "2020-01-01T14:00:00.000Z";
            }};            

            ListAndSearchMediaItemsResponse res = sdk.sdk.listAndSearchMediaItems(req);

            if (res.listAndSearchMediaItems200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveAMediaItem

Retrieve information about a single media item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveAMediaItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveAMediaItemResponse res = sdk.sdk.retrieveAMediaItem();

            if (res.media != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAMediaItem

Update a previously created media item by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAMediaItemRequestBody;
import org.openapis.openapi.models.operations.UpdateAMediaItemResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAMediaItemRequestBody req = new UpdateAMediaItemRequestBody() {{
                description = "This is a very important recording. Do not delete.";
                maxDownloadsAllowed = 100L;
                metadataPrimary = "foo,bar";
                metadataSecondary = "123";
                mimeType = "audio/vnd.wave";
                public_ = true;
                title = "Very important recording";
            }};            

            UpdateAMediaItemResponse res = sdk.sdk.updateAMediaItem(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
