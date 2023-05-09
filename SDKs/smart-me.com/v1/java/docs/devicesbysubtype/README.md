# devicesBySubType

### Available Operations

* [devicesBySubTypeGet](#devicesbysubtypeget) - Gets all Devices by it's Sub Type (e.g. E-Charging Station)

## devicesBySubTypeGet

Gets all Devices by it's Sub Type (e.g. E-Charging Station)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesBySubTypeGetMeterSubTypeEnum;
import org.openapis.openapi.models.operations.DevicesBySubTypeGetRequest;
import org.openapis.openapi.models.operations.DevicesBySubTypeGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesBySubTypeGetRequest req = new DevicesBySubTypeGetRequest(DevicesBySubTypeGetMeterSubTypeEnum.METER_SUB_TYPE_ELECTRICITY);            

            DevicesBySubTypeGetResponse res = sdk.devicesBySubType.devicesBySubTypeGet(req);

            if (res.devices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
