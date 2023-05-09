# images

## Overview

Images are blueprints for your VM disks. They can be of different types:

### System Images
Distribution Images maintained by us, e.g. “Ubuntu 20.04”

### Snapshot Images
Maintained by you, for example “Ubuntu 20.04 with my own settings”. These are billed per GB per month.

### Backup Images
Daily Backups of your Server. Will automatically be created for Servers which have backups enabled (`POST /servers/{id}/actions/enable_backup`)

Bound to exactly one Server. If you delete the Server, you also delete all backups bound to it. You may convert backup Images to snapshot Images to keep them.

These are billed at 20% of your instance price for 7 backup slots.

### App Images
Prebuild images with specific software configurations, e.g. “Wordpress”. All app images are created by us.


### Available Operations

* [deleteImagesId](#deleteimagesid) - Delete an Image
* [getImages](#getimages) - Get all Images
* [getImagesId](#getimagesid) - Get an Image
* [putImagesId](#putimagesid) - Update an Image

## deleteImagesId

Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImagesIdRequest;
import org.openapis.openapi.models.operations.DeleteImagesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteImagesIdRequest req = new DeleteImagesIdRequest(588465L);            

            DeleteImagesIdResponse res = sdk.images.deleteImagesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImages

Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagesRequest;
import org.openapis.openapi.models.operations.GetImagesResponse;
import org.openapis.openapi.models.operations.GetImagesSortEnum;
import org.openapis.openapi.models.operations.GetImagesStatusEnum;
import org.openapis.openapi.models.operations.GetImagesTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImagesRequest req = new GetImagesRequest() {{
                architecture = "nam";
                boundTo = "id";
                includeDeprecated = false;
                labelSelector = "blanditiis";
                name = "Timmy Feeney";
                sort = GetImagesSortEnum.NAME;
                status = GetImagesStatusEnum.CREATING;
                type = GetImagesTypeEnum.BACKUP;
            }};            

            GetImagesResponse res = sdk.images.getImages(req);

            if (res.getImages200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImagesId

Returns a specific Image object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagesIdRequest;
import org.openapis.openapi.models.operations.GetImagesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImagesIdRequest req = new GetImagesIdRequest(474867L);            

            GetImagesIdResponse res = sdk.images.getImagesId(req);

            if (res.getImagesId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putImagesId

Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels. Only Images of type `snapshot` and `backup` can be updated.

Note that when updating labels, the current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutImagesIdRequest;
import org.openapis.openapi.models.operations.PutImagesIdResponse;
import org.openapis.openapi.models.operations.PutImagesIdUpdateImageRequest;
import org.openapis.openapi.models.operations.PutImagesIdUpdateImageRequestTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutImagesIdRequest req = new PutImagesIdRequest(19193L) {{
                requestBody = new PutImagesIdUpdateImageRequest() {{
                    description = "My new Image description";
                    labels = new java.util.HashMap<String, Object>() {{
                        put("magnam", "distinctio");
                        put("id", "labore");
                    }};
                    type = PutImagesIdUpdateImageRequestTypeEnum.SNAPSHOT;
                }};;
            }};            

            PutImagesIdResponse res = sdk.images.putImagesId(req);

            if (res.putImagesId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
