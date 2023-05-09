# lan

### Available Operations

* [getDeviceCellularGatewayLan](#getdevicecellulargatewaylan) - Show the LAN Settings of a MG
* [updateDeviceCellularGatewayLan](#updatedevicecellulargatewaylan) - Update the LAN Settings for a single MG.

## getDeviceCellularGatewayLan

Show the LAN Settings of a MG

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCellularGatewayLanRequest;
import org.openapis.openapi.models.operations.GetDeviceCellularGatewayLanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCellularGatewayLanRequest req = new GetDeviceCellularGatewayLanRequest("nihil");            

            GetDeviceCellularGatewayLanResponse res = sdk.lan.getDeviceCellularGatewayLan(req);

            if (res.getDeviceCellularGatewayLan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCellularGatewayLan

Update the LAN Settings for a single MG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCellularGatewayLanRequest req = new UpdateDeviceCellularGatewayLanRequest("dolorem") {{
                requestBody = new UpdateDeviceCellularGatewayLanRequestBody() {{
                    fixedIpAssignments = new org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments[]{{
                        add(new UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments("accusamus", "modi") {{
                            ip = "cum";
                            mac = "ea";
                            name = "Katie Kuphal";
                        }}),
                        add(new UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments("expedita", "occaecati") {{
                            ip = "ipsam";
                            mac = "magni";
                            name = "Mr. Yvonne Windler";
                        }}),
                        add(new UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments("voluptatibus", "quasi") {{
                            ip = "aliquid";
                            mac = "doloremque";
                            name = "Randal Wilderman";
                        }}),
                        add(new UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments("eligendi", "consequatur") {{
                            ip = "officia";
                            mac = "voluptatum";
                            name = "Mrs. Justin Schmitt";
                        }}),
                    }};
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges[]{{
                        add(new UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges("eveniet", "quod", "rem") {{
                            comment = "commodi";
                            end = "praesentium";
                            start = "qui";
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceCellularGatewayLanResponse res = sdk.lan.updateDeviceCellularGatewayLan(req);

            if (res.updateDeviceCellularGatewayLan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
