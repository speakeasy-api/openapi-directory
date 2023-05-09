# merakiAuthUsers

### Available Operations

* [getNetworkMerakiAuthUser](#getnetworkmerakiauthuser) - Return the Meraki Auth splash or RADIUS user
* [getNetworkMerakiAuthUsers](#getnetworkmerakiauthusers) - List the splash or RADIUS users configured under Meraki Authentication for a network

## getNetworkMerakiAuthUser

Return the Meraki Auth splash or RADIUS user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkMerakiAuthUserRequest;
import org.openapis.openapi.models.operations.GetNetworkMerakiAuthUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkMerakiAuthUserRequest req = new GetNetworkMerakiAuthUserRequest("voluptatem", "ipsam");            

            GetNetworkMerakiAuthUserResponse res = sdk.merakiAuthUsers.getNetworkMerakiAuthUser(req);

            if (res.getNetworkMerakiAuthUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkMerakiAuthUsers

List the splash or RADIUS users configured under Meraki Authentication for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkMerakiAuthUsersRequest;
import org.openapis.openapi.models.operations.GetNetworkMerakiAuthUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkMerakiAuthUsersRequest req = new GetNetworkMerakiAuthUsersRequest("alias");            

            GetNetworkMerakiAuthUsersResponse res = sdk.merakiAuthUsers.getNetworkMerakiAuthUsers(req);

            if (res.getNetworkMerakiAuthUsers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
