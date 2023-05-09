# lldpCdp

### Available Operations

* [getDeviceLldpCdp](#getdevicelldpcdp) - List LLDP and CDP information for a device

## getDeviceLldpCdp

List LLDP and CDP information for a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceLldpCdpRequest;
import org.openapis.openapi.models.operations.GetDeviceLldpCdpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceLldpCdpRequest req = new GetDeviceLldpCdpRequest("numquam");            

            GetDeviceLldpCdpResponse res = sdk.lldpCdp.getDeviceLldpCdp(req);

            if (res.getDeviceLldpCdp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
