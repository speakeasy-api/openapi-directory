# uplink

### Available Operations

* [getNetworkCellularGatewayUplink](#getnetworkcellulargatewayuplink) - Returns the uplink settings for your MG network.
* [getOrganizationCellularGatewayUplinkStatuses](#getorganizationcellulargatewayuplinkstatuses) - List the uplink status of every Meraki MG cellular gateway in the organization
* [updateNetworkCellularGatewayUplink](#updatenetworkcellulargatewayuplink) - Updates the uplink settings for your MG network.

## getNetworkCellularGatewayUplink

Returns the uplink settings for your MG network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewayUplinkRequest;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewayUplinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCellularGatewayUplinkRequest req = new GetNetworkCellularGatewayUplinkRequest("consequatur");            

            GetNetworkCellularGatewayUplinkResponse res = sdk.uplink.getNetworkCellularGatewayUplink(req);

            if (res.getNetworkCellularGatewayUplink200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationCellularGatewayUplinkStatuses

List the uplink status of every Meraki MG cellular gateway in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationCellularGatewayUplinkStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationCellularGatewayUplinkStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationCellularGatewayUplinkStatusesRequest req = new GetOrganizationCellularGatewayUplinkStatusesRequest("sapiente") {{
                endingBefore = "fugiat";
                iccids = new String[]{{
                    add("velit"),
                    add("corrupti"),
                    add("doloremque"),
                }};
                networkIds = new String[]{{
                    add("ad"),
                    add("impedit"),
                    add("eligendi"),
                }};
                perPage = 746030L;
                serials = new String[]{{
                    add("voluptatum"),
                    add("culpa"),
                }};
                startingAfter = "culpa";
            }};            

            GetOrganizationCellularGatewayUplinkStatusesResponse res = sdk.uplink.getOrganizationCellularGatewayUplinkStatuses(req);

            if (res.getOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkCellularGatewayUplink

Updates the uplink settings for your MG network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayUplinkRequest;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayUplinkRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayUplinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkCellularGatewayUplinkRequest req = new UpdateNetworkCellularGatewayUplinkRequest("eius") {{
                requestBody = new UpdateNetworkCellularGatewayUplinkRequestBody() {{
                    bandwidthLimits = new UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits() {{
                        limitDown = 873753L;
                        limitUp = 647645L;
                    }};;
                }};;
            }};            

            UpdateNetworkCellularGatewayUplinkResponse res = sdk.uplink.updateNetworkCellularGatewayUplink(req);

            if (res.updateNetworkCellularGatewayUplink200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
