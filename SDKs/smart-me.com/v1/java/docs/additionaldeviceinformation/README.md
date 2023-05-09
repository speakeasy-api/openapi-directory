# additionalDeviceInformation

### Available Operations

* [additionalDeviceInformationGet](#additionaldeviceinformationget) - Gets the additional information (e.g. Firmware Version) about a device.

## additionalDeviceInformationGet

Gets the additional information (e.g. Firmware Version) about a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdditionalDeviceInformationGetRequest;
import org.openapis.openapi.models.operations.AdditionalDeviceInformationGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdditionalDeviceInformationGetRequest req = new AdditionalDeviceInformationGetRequest("nisi");            

            AdditionalDeviceInformationGetResponse res = sdk.additionalDeviceInformation.additionalDeviceInformationGet(req);

            if (res.additionalDeviceInformation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
