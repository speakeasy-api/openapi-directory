# volumes

## Overview

A Volume is a highly-available, scalable, and SSD-based block storage for Servers.

Pricing for Volumes depends on the Volume size and Location, not the actual used storage.

Please see [Hetzner Docs](https://docs.hetzner.com/cloud/#Volumes) for more details about Volumes.


### Available Operations

* [deleteVolumesId](#deletevolumesid) - Delete a Volume
* [getVolumes](#getvolumes) - Get all Volumes
* [getVolumesId](#getvolumesid) - Get a Volume
* [postVolumes](#postvolumes) - Create a Volume
* [putVolumesId](#putvolumesid) - Update a Volume

## deleteVolumesId

Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not be attached to a Server and it must not have delete protection enabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVolumesIdRequest;
import org.openapis.openapi.models.operations.DeleteVolumesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteVolumesIdRequest req = new DeleteVolumesIdRequest("impedit");            

            DeleteVolumesIdResponse res = sdk.volumes.deleteVolumesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVolumes

Gets all existing Volumes that you have available.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVolumesRequest;
import org.openapis.openapi.models.operations.GetVolumesResponse;
import org.openapis.openapi.models.operations.GetVolumesSortEnum;
import org.openapis.openapi.models.operations.GetVolumesStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVolumesRequest req = new GetVolumesRequest() {{
                labelSelector = "aut";
                name = "Greg Stoltenberg";
                sort = GetVolumesSortEnum.CREATED_DESC;
                status = GetVolumesStatusEnum.CREATING;
            }};            

            GetVolumesResponse res = sdk.volumes.getVolumes(req);

            if (res.getVolumes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVolumesId

Gets a specific Volume object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVolumesIdRequest;
import org.openapis.openapi.models.operations.GetVolumesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVolumesIdRequest req = new GetVolumesIdRequest(478370L);            

            GetVolumesIdResponse res = sdk.volumes.getVolumesId(req);

            if (res.getVolumesId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVolumes

Creates a new Volume attached to a Server. If you want to create a Volume that is not attached to a Server, you need to provide the `location` key instead of `server`. This can be either the ID or the name of the Location this Volume will be created in. Note that a Volume can be attached to a Server only in the same Location as the Volume itself.

Specifying the Server during Volume creation will automatically attach the Volume to that Server after it has been initialized. In that case, the `next_actions` key in the response is an array which contains a single `attach_volume` action.

The minimum Volume size is 10GB and the maximum size is 10TB (10240GB).

A volume’s name can consist of alphanumeric characters, dashes, underscores, and dots, but has to start and end with an alphanumeric character. The total length is limited to 64 characters. Volume names must be unique per Project.

#### Call specific error codes

| Code                                | Description                                         |
|-------------------------------------|-----------------------------------------------------|
| `no_space_left_in_location`         | There is no volume space left in the given location |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVolumesCreateVolumeRequest;
import org.openapis.openapi.models.operations.PostVolumesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostVolumesCreateVolumeRequest req = new PostVolumesCreateVolumeRequest("databases-storage", 42L) {{
                automount = false;
                format = "xfs";
                labels = new java.util.HashMap<String, Object>() {{
                    put("ducimus", "alias");
                    put("officia", "tempora");
                    put("ipsam", "ea");
                    put("aspernatur", "vel");
                }};
                location = "nbg1";
                server = 822118L;
            }};            

            PostVolumesResponse res = sdk.volumes.postVolumes(req);

            if (res.postVolumes201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putVolumesId

Updates the Volume properties.

Note that when updating labels, the volume’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutVolumesIdRequest;
import org.openapis.openapi.models.operations.PutVolumesIdResponse;
import org.openapis.openapi.models.operations.PutVolumesIdUpdateVolumeRequest;
import org.openapis.openapi.models.operations.PutVolumesIdUpdateVolumeRequestLabels;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutVolumesIdRequest req = new PutVolumesIdRequest("magnam") {{
                requestBody = new PutVolumesIdUpdateVolumeRequest("database-storage") {{
                    labels = new PutVolumesIdUpdateVolumeRequestLabels() {{
                        labelkey = "value";
                    }};;
                }};;
            }};            

            PutVolumesIdResponse res = sdk.volumes.putVolumesId(req);

            if (res.putVolumesId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
