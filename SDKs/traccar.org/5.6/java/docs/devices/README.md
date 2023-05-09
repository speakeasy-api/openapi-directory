# devices

## Overview

Device management

### Available Operations

* [deleteDevicesId](#deletedevicesid) - Delete a Device
* [getDevices](#getdevices) - Fetch a list of Devices
* [postDevices](#postdevices) - Create a Device
* [putDevicesId](#putdevicesid) - Update a Device
* [putDevicesIdAccumulators](#putdevicesidaccumulators) - Update total distance and hours of the Device

## deleteDevicesId

Delete a Device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDevicesIdRequest;
import org.openapis.openapi.models.operations.DeleteDevicesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi", "quam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteDevicesIdRequest req = new DeleteDevicesIdRequest(474697L);            

            DeleteDevicesIdResponse res = sdk.devices.deleteDevicesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevices

Without any params, returns a list of the user's devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDevicesRequest;
import org.openapis.openapi.models.operations.GetDevicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit", "error") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetDevicesRequest req = new GetDevicesRequest() {{
                all = false;
                id = 158969L;
                uniqueId = "quis";
                userId = 110375L;
            }};            

            GetDevicesResponse res = sdk.devices.getDevices(req);

            if (res.devices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDevices

Create a Device

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDevicesResponse;
import org.openapis.openapi.models.shared.Device;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum", "animi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Device req = new Device() {{
                attributes = new java.util.HashMap<String, Object>() {{
                    put("odit", "quo");
                    put("sequi", "tenetur");
                }};
                category = "ipsam";
                contact = "id";
                disabled = false;
                geofenceIds = new Long[]{{
                    add(13571L),
                    add(97101L),
                    add(622846L),
                    add(837945L),
                }};
                groupId = 673660L;
                id = 96098L;
                lastUpdate = OffsetDateTime.parse("2020-01-27T18:38:42.890Z");
                model = "vero";
                name = "Miss Irma Wolff";
                phone = "204.491.3241 x6384";
                positionId = 918236L;
                status = "quae";
                uniqueId = "ipsum";
            }};            

            PostDevicesResponse res = sdk.devices.postDevices(req);

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDevicesId

Update a Device

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDevicesIdRequest;
import org.openapis.openapi.models.operations.PutDevicesIdResponse;
import org.openapis.openapi.models.shared.Device;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem", "molestias") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutDevicesIdRequest req = new PutDevicesIdRequest(                new Device() {{
                                attributes = new java.util.HashMap<String, Object>() {{
                                    put("pariatur", "modi");
                                    put("praesentium", "rem");
                                    put("voluptates", "quasi");
                                }};
                                category = "repudiandae";
                                contact = "sint";
                                disabled = false;
                                geofenceIds = new Long[]{{
                                    add(929297L),
                                }};
                                groupId = 277718L;
                                id = 318569L;
                                lastUpdate = OffsetDateTime.parse("2022-05-02T09:29:06.042Z");
                                model = "quibusdam";
                                name = "Joanna Rau";
                                phone = "335-601-8301 x652";
                                positionId = 703737L;
                                status = "tempore";
                                uniqueId = "labore";
                            }};, 962189L);            

            PutDevicesIdResponse res = sdk.devices.putDevicesId(req);

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDevicesIdAccumulators

Update total distance and hours of the Device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDevicesIdAccumulatorsRequest;
import org.openapis.openapi.models.operations.PutDevicesIdAccumulatorsResponse;
import org.openapis.openapi.models.shared.DeviceAccumulators;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum", "non") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutDevicesIdAccumulatorsRequest req = new PutDevicesIdAccumulatorsRequest(                new DeviceAccumulators() {{
                                deviceId = 756107L;
                                hours = 5761.57;
                                totalDistance = 3960.98;
                            }};, 592042L);            

            PutDevicesIdAccumulatorsResponse res = sdk.devices.putDevicesIdAccumulators(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
