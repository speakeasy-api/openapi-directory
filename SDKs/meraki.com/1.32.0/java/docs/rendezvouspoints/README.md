# rendezvousPoints

### Available Operations

* [createNetworkSwitchRoutingMulticastRendezvousPoint](#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [deleteNetworkSwitchRoutingMulticastRendezvousPoint](#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoint](#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoints](#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [updateNetworkSwitchRoutingMulticastRendezvousPoint](#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point

## createNetworkSwitchRoutingMulticastRendezvousPoint

Create a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchRoutingMulticastRendezvousPointRequest req = new CreateNetworkSwitchRoutingMulticastRendezvousPointRequest(                new CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody("reprehenderit", "eligendi");, "est");            

            CreateNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.rendezvousPoints.createNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchRoutingMulticastRendezvousPoint

Delete a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest req = new DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest("aliquid", "voluptatem");            

            DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.rendezvousPoints.deleteNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoint

Return a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingMulticastRendezvousPointRequest req = new GetNetworkSwitchRoutingMulticastRendezvousPointRequest("et", "magni");            

            GetNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.rendezvousPoints.getNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoints

List multicast rendezvous points

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingMulticastRendezvousPointsRequest req = new GetNetworkSwitchRoutingMulticastRendezvousPointsRequest("possimus");            

            GetNetworkSwitchRoutingMulticastRendezvousPointsResponse res = sdk.rendezvousPoints.getNetworkSwitchRoutingMulticastRendezvousPoints(req);

            if (res.getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchRoutingMulticastRendezvousPoint

Update a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest req = new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest(                new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody("nam", "cupiditate");, "dolor", "error");            

            UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.rendezvousPoints.updateNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
