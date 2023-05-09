# mgLANSettings

### Available Operations

* [getDeviceCellularGatewaySettings](#getdevicecellulargatewaysettings) - Show the LAN Settings of a MG
* [updateDeviceCellularGatewaySettings](#updatedevicecellulargatewaysettings) - Update the LAN Settings for a single MG.

## getDeviceCellularGatewaySettings

Show the LAN Settings of a MG

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCellularGatewaySettingsRequest;
import org.openapis.openapi.models.operations.GetDeviceCellularGatewaySettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCellularGatewaySettingsRequest req = new GetDeviceCellularGatewaySettingsRequest("maiores");            

            GetDeviceCellularGatewaySettingsResponse res = sdk.mgLANSettings.getDeviceCellularGatewaySettings(req);

            if (res.getDeviceCellularGatewaySettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCellularGatewaySettings

Update the LAN Settings for a single MG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewaySettingsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewaySettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewaySettingsRequestBodyFixedIpAssignments;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewaySettingsRequestBodyReservedIpRanges;
import org.openapis.openapi.models.operations.UpdateDeviceCellularGatewaySettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCellularGatewaySettingsRequest req = new UpdateDeviceCellularGatewaySettingsRequest("velit") {{
                requestBody = new UpdateDeviceCellularGatewaySettingsRequestBody() {{
                    fixedIpAssignments = new org.openapis.openapi.models.operations.UpdateDeviceCellularGatewaySettingsRequestBodyFixedIpAssignments[]{{
                        add(new UpdateDeviceCellularGatewaySettingsRequestBodyFixedIpAssignments("officia", "maxime") {{
                            ip = "voluptas";
                            mac = "asperiores";
                            name = "Eileen Hagenes";
                        }}),
                        add(new UpdateDeviceCellularGatewaySettingsRequestBodyFixedIpAssignments("quod", "labore") {{
                            ip = "dignissimos";
                            mac = "officia";
                            name = "Vernon Bergnaum";
                        }}),
                        add(new UpdateDeviceCellularGatewaySettingsRequestBodyFixedIpAssignments("est", "recusandae") {{
                            ip = "ab";
                            mac = "adipisci";
                            name = "Orlando Homenick";
                        }}),
                        add(new UpdateDeviceCellularGatewaySettingsRequestBodyFixedIpAssignments("possimus", "facilis") {{
                            ip = "totam";
                            mac = "fugiat";
                            name = "Dora Luettgen";
                        }}),
                    }};
                    reservedIpRanges = new org.openapis.openapi.models.operations.UpdateDeviceCellularGatewaySettingsRequestBodyReservedIpRanges[]{{
                        add(new UpdateDeviceCellularGatewaySettingsRequestBodyReservedIpRanges("reiciendis", "assumenda", "nemo") {{
                            comment = "commodi";
                            end = "in";
                            start = "corporis";
                        }}),
                        add(new UpdateDeviceCellularGatewaySettingsRequestBodyReservedIpRanges("cum", "consectetur", "in") {{
                            comment = "recusandae";
                            end = "aliquid";
                            start = "aperiam";
                        }}),
                        add(new UpdateDeviceCellularGatewaySettingsRequestBodyReservedIpRanges("numquam", "doloribus", "suscipit") {{
                            comment = "exercitationem";
                            end = "earum";
                            start = "facere";
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceCellularGatewaySettingsResponse res = sdk.mgLANSettings.updateDeviceCellularGatewaySettings(req);

            if (res.updateDeviceCellularGatewaySettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
