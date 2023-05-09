# deviceProfiles

### Available Operations

* [getNetworkSmDeviceDeviceProfiles](#getnetworksmdevicedeviceprofiles) - Get the installed profiles associated with a device
* [getNetworkSmUserDeviceProfiles](#getnetworksmuserdeviceprofiles) - Get the profiles associated with a user

## getNetworkSmDeviceDeviceProfiles

Get the installed profiles associated with a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDeviceProfilesRequest;
import org.openapis.openapi.models.operations.GetNetworkSmDeviceDeviceProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmDeviceDeviceProfilesRequest req = new GetNetworkSmDeviceDeviceProfilesRequest("nemo", "minus");            

            GetNetworkSmDeviceDeviceProfilesResponse res = sdk.deviceProfiles.getNetworkSmDeviceDeviceProfiles(req);

            if (res.getNetworkSmDeviceDeviceProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmUserDeviceProfiles

Get the profiles associated with a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmUserDeviceProfilesRequest;
import org.openapis.openapi.models.operations.GetNetworkSmUserDeviceProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmUserDeviceProfilesRequest req = new GetNetworkSmUserDeviceProfilesRequest("ipsum", "doloremque");            

            GetNetworkSmUserDeviceProfilesResponse res = sdk.deviceProfiles.getNetworkSmUserDeviceProfiles(req);

            if (res.getNetworkSmUserDeviceProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
