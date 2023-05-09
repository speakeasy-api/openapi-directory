# ospf

### Available Operations

* [getNetworkSwitchRoutingOspf](#getnetworkswitchroutingospf) - Return layer 3 OSPF routing configuration
* [updateNetworkSwitchRoutingOspf](#updatenetworkswitchroutingospf) - Update layer 3 OSPF routing configuration

## getNetworkSwitchRoutingOspf

Return layer 3 OSPF routing configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingOspfRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingOspfResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingOspfRequest req = new GetNetworkSwitchRoutingOspfRequest("harum");            

            GetNetworkSwitchRoutingOspfResponse res = sdk.ospf.getNetworkSwitchRoutingOspf(req);

            if (res.getNetworkSwitchRoutingOspf200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchRoutingOspf

Update layer 3 OSPF routing configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchRoutingOspfRequest req = new UpdateNetworkSwitchRoutingOspfRequest("doloremque") {{
                requestBody = new UpdateNetworkSwitchRoutingOspfRequestBody() {{
                    areas = new org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas[]{{
                        add(new UpdateNetworkSwitchRoutingOspfRequestBodyAreas("voluptatibus", "ut", UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.NORMAL) {{
                            areaId = "culpa";
                            areaName = "earum";
                            areaType = UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.STUB;
                        }}),
                        add(new UpdateNetworkSwitchRoutingOspfRequestBodyAreas("atque", "accusantium", UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.STUB) {{
                            areaId = "quos";
                            areaName = "saepe";
                            areaType = UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.NORMAL;
                        }}),
                        add(new UpdateNetworkSwitchRoutingOspfRequestBodyAreas("vitae", "quidem", UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.NSSA) {{
                            areaId = "culpa";
                            areaName = "vel";
                            areaType = UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.STUB;
                        }}),
                        add(new UpdateNetworkSwitchRoutingOspfRequestBodyAreas("iure", "fugit", UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.NORMAL) {{
                            areaId = "odio";
                            areaName = "rem";
                            areaType = UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum.NSSA;
                        }}),
                    }};
                    deadTimerInSeconds = 327006L;
                    enabled = false;
                    helloTimerInSeconds = 35731L;
                    md5AuthenticationEnabled = false;
                    md5AuthenticationKey = new UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey() {{
                        id = 502280L;
                        passphrase = "accusantium";
                    }};;
                    v3 = new UpdateNetworkSwitchRoutingOspfRequestBodyV3() {{
                        areas = new org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas[]{{
                            add(new UpdateNetworkSwitchRoutingOspfRequestBodyV3Areas("dicta", "harum", UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum.STUB) {{
                                areaId = "vitae";
                                areaName = "nostrum";
                                areaType = UpdateNetworkSwitchRoutingOspfRequestBodyV3AreasAreaTypeEnum.NORMAL;
                            }}),
                        }};
                        deadTimerInSeconds = 937239L;
                        enabled = false;
                        helloTimerInSeconds = 831956L;
                    }};;
                }};;
            }};            

            UpdateNetworkSwitchRoutingOspfResponse res = sdk.ospf.updateNetworkSwitchRoutingOspf(req);

            if (res.updateNetworkSwitchRoutingOspf200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
