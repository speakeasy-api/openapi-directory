# fields

### Available Operations

* [updateNetworkSmDevicesFields](#updatenetworksmdevicesfields) - Modify the fields of a device

## updateNetworkSmDevicesFields

Modify the fields of a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSmDevicesFieldsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSmDevicesFieldsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields;
import org.openapis.openapi.models.operations.UpdateNetworkSmDevicesFieldsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSmDevicesFieldsRequest req = new UpdateNetworkSmDevicesFieldsRequest(                new UpdateNetworkSmDevicesFieldsRequestBody(                new UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields() {{
                                                name = "Dana Bailey";
                                                notes = "nisi";
                                            }};) {{
                                id = "646ec658-e181-47cd-a0ae-e8c72213f425";
                                serial = "similique";
                                wifiMac = "eaque";
                            }};, "consectetur");            

            UpdateNetworkSmDevicesFieldsResponse res = sdk.fields.updateNetworkSmDevicesFields(req);

            if (res.updateNetworkSmDevicesFields200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
