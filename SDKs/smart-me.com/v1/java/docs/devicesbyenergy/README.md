# devicesByEnergy

### Available Operations

* [devicesByEnergyGet](#devicesbyenergyget) - Gets all Devices for an Energy Type

## devicesByEnergyGet

Gets all Devices for an Energy Type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DevicesByEnergyGetMeterEnergyTypeEnum;
import org.openapis.openapi.models.operations.DevicesByEnergyGetRequest;
import org.openapis.openapi.models.operations.DevicesByEnergyGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesByEnergyGetRequest req = new DevicesByEnergyGetRequest(DevicesByEnergyGetMeterEnergyTypeEnum.METER_TYPE_COMPRESSED_AIR);            

            DevicesByEnergyGetResponse res = sdk.devicesByEnergy.devicesByEnergyGet(req);

            if (res.devices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
