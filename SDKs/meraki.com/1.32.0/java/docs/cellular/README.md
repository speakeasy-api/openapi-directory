# cellular

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
                .setSecurity(new Security("numquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCellularSimsRequest req = new GetDeviceCellularSimsRequest("dolor");            

            GetDeviceCellularSimsResponse res = sdk.cellular.getDeviceCellularSims(req);

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
                .setSecurity(new Security("perspiciatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCellularSimsRequest req = new UpdateDeviceCellularSimsRequest("accusamus") {{
                requestBody = new UpdateDeviceCellularSimsRequestBody() {{
                    simFailover = new UpdateDeviceCellularSimsRequestBodySimFailover() {{
                        enabled = false;
                    }};;
                    sims = new org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySims[]{{
                        add(new UpdateDeviceCellularSimsRequestBodySims() {{
                            apns = new org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApns[]{{
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("quos"),
                                                }}, "atque") {{
                                    allowedIpTypes = new String[]{{
                                        add("ut"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "non";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.NONE;
                                        username = "Ali21";
                                    }};
                                    name = "Myron Brakus";
                                }}),
                            }};
                            isPrimary = false;
                            slot = UpdateDeviceCellularSimsRequestBodySimsSlotEnum.SIM2;
                        }}),
                        add(new UpdateDeviceCellularSimsRequestBodySims() {{
                            apns = new org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApns[]{{
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("et"),
                                                    add("odio"),
                                                }}, "eligendi") {{
                                    allowedIpTypes = new String[]{{
                                        add("corporis"),
                                        add("vel"),
                                        add("accusamus"),
                                        add("totam"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "ipsam";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.PAP;
                                        username = "Lora.Koss";
                                    }};
                                    name = "Cecelia O'Conner";
                                }}),
                            }};
                            isPrimary = false;
                            slot = UpdateDeviceCellularSimsRequestBodySimsSlotEnum.SIM1;
                        }}),
                        add(new UpdateDeviceCellularSimsRequestBodySims() {{
                            apns = new org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApns[]{{
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("corrupti"),
                                                    add("voluptate"),
                                                    add("alias"),
                                                    add("iure"),
                                                }}, "temporibus") {{
                                    allowedIpTypes = new String[]{{
                                        add("pariatur"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "ad";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.CHAP;
                                        username = "Lorenza69";
                                    }};
                                    name = "Daniel Bradtke";
                                }}),
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("magnam"),
                                                    add("officiis"),
                                                    add("sed"),
                                                    add("mollitia"),
                                                }}, "saepe") {{
                                    allowedIpTypes = new String[]{{
                                        add("ea"),
                                        add("alias"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "laudantium";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.CHAP;
                                        username = "Mohammad_Wuckert79";
                                    }};
                                    name = "Jean Windler";
                                }}),
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("sunt"),
                                                    add("repudiandae"),
                                                    add("facere"),
                                                    add("distinctio"),
                                                }}, "ducimus") {{
                                    allowedIpTypes = new String[]{{
                                        add("doloribus"),
                                        add("facilis"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "minima";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.PAP;
                                        username = "Mazie_Fay";
                                    }};
                                    name = "Marian Huel";
                                }}),
                            }};
                            isPrimary = false;
                            slot = UpdateDeviceCellularSimsRequestBodySimsSlotEnum.SIM2;
                        }}),
                        add(new UpdateDeviceCellularSimsRequestBodySims() {{
                            apns = new org.openapis.openapi.models.operations.UpdateDeviceCellularSimsRequestBodySimsApns[]{{
                                add(new UpdateDeviceCellularSimsRequestBodySimsApns(                new String[]{{
                                                    add("praesentium"),
                                                    add("perferendis"),
                                                }}, "soluta") {{
                                    allowedIpTypes = new String[]{{
                                        add("provident"),
                                        add("accusamus"),
                                    }};
                                    authentication = new UpdateDeviceCellularSimsRequestBodySimsApnsAuthentication() {{
                                        password = "minus";
                                        type = UpdateDeviceCellularSimsRequestBodySimsApnsAuthenticationTypeEnum.PAP;
                                        username = "Erika_Runolfsson42";
                                    }};
                                    name = "Marta Macejkovic";
                                }}),
                            }};
                            isPrimary = false;
                            slot = UpdateDeviceCellularSimsRequestBodySimsSlotEnum.SIM2;
                        }}),
                    }};
                }};;
            }};            

            UpdateDeviceCellularSimsResponse res = sdk.cellular.updateDeviceCellularSims(req);

            if (res.updateDeviceCellularSims200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
