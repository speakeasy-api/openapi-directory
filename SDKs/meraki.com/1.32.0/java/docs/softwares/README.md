# softwares

### Available Operations

* [getNetworkSmDeviceSoftwares](#getnetworksmdevicesoftwares) - Get a list of softwares associated with a device
* [getNetworkSmUserSoftwares](#getnetworksmusersoftwares) - Get a list of softwares associated with a user

## getNetworkSmDeviceSoftwares

Get a list of softwares associated with a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceSoftwaresRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceSoftwaresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceSoftwaresRequest req = new GetNetworkSmDeviceSoftwaresRequest("dolorum", "repellendus");            

            GetNetworkSmDeviceSoftwaresResponse res = sdk.softwares.getNetworkSmDeviceSoftwares(req);

            if (res.getNetworkSmDeviceSoftwares200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmUserSoftwares

Get a list of softwares associated with a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmUserSoftwaresRequest;
import org.openapis.openapi.models.operations.GetNetworkSmUserSoftwaresResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmUserSoftwaresRequest req = new GetNetworkSmUserSoftwaresRequest("ab", "architecto");            

            GetNetworkSmUserSoftwaresResponse res = sdk.softwares.getNetworkSmUserSoftwares(req);

            if (res.getNetworkSmUserSoftwares200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
