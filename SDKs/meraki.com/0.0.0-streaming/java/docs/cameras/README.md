# cameras

### Available Operations

* [generateNetworkCameraSnapshot](#generatenetworkcamerasnapshot) - Generate a snapshot of what the camera sees at the specified time and return a link to that image.
* [getDeviceCameraVideoSettings](#getdevicecameravideosettings) - Returns video settings for the given camera
* [getNetworkCameraSchedules](#getnetworkcameraschedules) - Returns a list of all camera recording schedules.
* [getNetworkCameraVideoLink](#getnetworkcameravideolink) - Returns video link to the specified camera
* [updateDeviceCameraVideoSettings](#updatedevicecameravideosettings) - Update video settings for the given camera

## generateNetworkCameraSnapshot

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateNetworkCameraSnapshotRequest;
import org.openapis.openapi.models.operations.GenerateNetworkCameraSnapshotRequestBody;
import org.openapis.openapi.models.operations.GenerateNetworkCameraSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateNetworkCameraSnapshotRequest req = new GenerateNetworkCameraSnapshotRequest("tempore", "accusamus") {{
                requestBody = new GenerateNetworkCameraSnapshotRequestBody() {{
                    fullframe = false;
                    timestamp = OffsetDateTime.parse("2022-09-08T12:03:15.868Z");
                }};;
            }};            

            GenerateNetworkCameraSnapshotResponse res = sdk.cameras.generateNetworkCameraSnapshot(req);

            if (res.generateNetworkCameraSnapshot202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraVideoSettings

Returns video settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraVideoSettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraVideoSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraVideoSettingsRequest req = new GetDeviceCameraVideoSettingsRequest("sapiente");            

            GetDeviceCameraVideoSettingsResponse res = sdk.cameras.getDeviceCameraVideoSettings(req);

            if (res.getDeviceCameraVideoSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCameraSchedules

Returns a list of all camera recording schedules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCameraSchedulesRequest;
import org.openapis.openapi.models.operations.GetNetworkCameraSchedulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCameraSchedulesRequest req = new GetNetworkCameraSchedulesRequest("nihil");            

            GetNetworkCameraSchedulesResponse res = sdk.cameras.getNetworkCameraSchedules(req);

            if (res.getNetworkCameraSchedules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCameraVideoLink

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCameraVideoLinkRequest;
import org.openapis.openapi.models.operations.GetNetworkCameraVideoLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCameraVideoLinkRequest req = new GetNetworkCameraVideoLinkRequest("expedita", "neque") {{
                timestamp = "sed";
            }};            

            GetNetworkCameraVideoLinkResponse res = sdk.cameras.getNetworkCameraVideoLink(req);

            if (res.getNetworkCameraVideoLink200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCameraVideoSettings

Update video settings for the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCameraVideoSettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCameraVideoSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCameraVideoSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCameraVideoSettingsRequest req = new UpdateDeviceCameraVideoSettingsRequest("libero") {{
                requestBody = new UpdateDeviceCameraVideoSettingsRequestBody() {{
                    externalRtspEnabled = false;
                }};;
            }};            

            UpdateDeviceCameraVideoSettingsResponse res = sdk.cameras.updateDeviceCameraVideoSettings(req);

            if (res.updateDeviceCameraVideoSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
