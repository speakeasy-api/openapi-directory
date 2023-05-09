# sims

### Available Operations

* [getDeviceCellularSims](#getdevicecellularsims) - Return the SIM and APN configurations for a cellular device.
* [updateDeviceCellularSims](#updatedevicecellularsims) - Updates the SIM and APN configurations for a cellular device.

## getDeviceCellularSims

Return the SIM and APN configurations for a cellular device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCellularSimsRequest;
import org.openapis.openapi.models.operations.GetDeviceCellularSimsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCellularSimsRequest req = new GetDeviceCellularSimsRequest("iure");            

            GetDeviceCellularSimsResponse res = sdk.sims.getDeviceCellularSims(req);

            if (res.getDeviceCellularSims200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCellularSims

Updates the SIM and APN configurations for a cellular device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimFailover;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySims;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApns;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsSlotEnum;
import org.openapis.openapi.models.operations.UpdateDeviceCellularSimsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCellularSimsRequest req = new UpdateDeviceCellularSimsRequest("amet") {{
                requestBody = new UpdateDeviceCellularSimsRequestBody() {{
                    simFailover = new UpdateDeviceCellularSimsRequestBodySimFailover() {{
                        enabled = false;
                    }};;
                    sims = new org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySims[]{{
                        add(new UpdateDeviceCellularSimsRequestBodySims() {{
                            apns = new org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApns[]{{
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("cupiditate"),
                                                    add("optio"),
                                                }}, "itaque") {{
                                    allowedIpTypes = new String[]{{
                                        add("unde"),
                                        add("inventore"),
                                        add("nostrum"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "temporibus";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.CHAP;
                                        username = "Kiarra.McCullough98";
                                    }};
                                    name = "Patti Hessel III";
                                }}),
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("fugiat"),
                                                    add("porro"),
                                                    add("iure"),
                                                    add("nostrum"),
                                                }}, "eius") {{
                                    allowedIpTypes = new String[]{{
                                        add("nesciunt"),
                                        add("iste"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "quae";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.CHAP;
                                        username = "Israel_Bins11";
                                    }};
                                    name = "Justin Hartmann";
                                }}),
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("ut"),
                                                    add("modi"),
                                                    add("quasi"),
                                                    add("illo"),
                                                }}, "ducimus") {{
                                    allowedIpTypes = new String[]{{
                                        add("sed"),
                                        add("consectetur"),
                                        add("rem"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "ratione";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.CHAP;
                                        username = "Jana.Hand";
                                    }};
                                    name = "Ms. Shaun Barton";
                                }}),
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("sequi"),
                                                    add("laudantium"),
                                                    add("molestiae"),
                                                    add("ratione"),
                                                }}, "atque") {{
                                    allowedIpTypes = new String[]{{
                                        add("expedita"),
                                        add("sint"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "laborum";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.PAP;
                                        username = "Jasen.Keebler";
                                    }};
                                    name = "Dwight Cummings";
                                }}),
                            }};
                            isPrimary = false;
                            slot = UpdateDeviceCellularSimsRequestBodySimsSlotEnum.SIM1;
                        }}),
                        add(new UpdateDeviceCellularSimsRequestBodySims() {{
                            apns = new org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApns[]{{
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("optio"),
                                                }}, "voluptatum") {{
                                    allowedIpTypes = new String[]{{
                                        add("rem"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "libero";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.PAP;
                                        username = "Winston.Glover68";
                                    }};
                                    name = "Lillian Muller";
                                }}),
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("impedit"),
                                                    add("libero"),
                                                    add("consequuntur"),
                                                    add("pariatur"),
                                                }}, "esse") {{
                                    allowedIpTypes = new String[]{{
                                        add("labore"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "doloribus";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.NONE;
                                        username = "Braxton.Lang";
                                    }};
                                    name = "Edna Wisozk";
                                }}),
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("ea"),
                                                    add("hic"),
                                                }}, "officia") {{
                                    allowedIpTypes = new String[]{{
                                        add("exercitationem"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "voluptas";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.NONE;
                                        username = "Sarah.Gutmann";
                                    }};
                                    name = "Jody Hackett";
                                }}),
                            }};
                            isPrimary = false;
                            slot = UpdateDeviceCellularSimsRequestBodySimsSlotEnum.SIM1;
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceCellularSimsResponse res = sdk.sims.updateDeviceCellularSims(req);

            if (res.updateDeviceCellularSims200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
