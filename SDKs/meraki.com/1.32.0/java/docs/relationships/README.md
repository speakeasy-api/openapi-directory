# relationships

### Available Operations

* [getDeviceSensorRelationships](#getdevicesensorrelationships) - List the sensor roles for a given sensor or camera device.
* [getNetworkSensorRelationships](#getnetworksensorrelationships) - List the sensor roles for devices in a given network
* [updateDeviceSensorRelationships](#updatedevicesensorrelationships) - Assign one or more sensor roles to a given sensor or camera device.

## getDeviceSensorRelationships

List the sensor roles for a given sensor or camera device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceSensorRelationshipsRequest;
import org.openapis.openapi.models.operations.GetDeviceSensorRelationshipsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceSensorRelationshipsRequest req = new GetDeviceSensorRelationshipsRequest("unde");            

            GetDeviceSensorRelationshipsResponse res = sdk.relationships.getDeviceSensorRelationships(req);

            if (res.getDeviceSensorRelationships200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSensorRelationships

List the sensor roles for devices in a given network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSensorRelationshipsRequest;
import org.openapis.openapi.models.operations.GetNetworkSensorRelationshipsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorRelationshipsRequest req = new GetNetworkSensorRelationshipsRequest("rem");            

            GetNetworkSensorRelationshipsResponse res = sdk.relationships.getNetworkSensorRelationships(req);

            if (res.getNetworkSensorRelationships200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceSensorRelationships

Assign one or more sensor roles to a given sensor or camera device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceSensorRelationshipsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceSensorRelationshipsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceSensorRelationshipsRequestBodyLivestream;
import org.openapis.openapi.models.operations.UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices;
import org.openapis.openapi.models.operations.UpdateDeviceSensorRelationshipsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceSensorRelationshipsRequest req = new UpdateDeviceSensorRelationshipsRequest("adipisci") {{
                requestBody = new UpdateDeviceSensorRelationshipsRequestBody() {{
                    livestream = new UpdateDeviceSensorRelationshipsRequestBodyLivestream() {{
                        relatedDevices = new org.openapis.openapi.models.operations.UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices[]{{
                            add(new UpdateDeviceSensorRelationshipsRequestBodyLivestreamRelatedDevices("facilis") {{
                                serial = "nostrum";
                            }}),
                        }};
                    }};;
                }};;
            }};            

            UpdateDeviceSensorRelationshipsResponse res = sdk.relationships.updateDeviceSensorRelationships(req);

            if (res.updateDeviceSensorRelationships200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
