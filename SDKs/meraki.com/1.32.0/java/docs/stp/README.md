# stp

### Available Operations

* [getNetworkSwitchStp](#getnetworkswitchstp) - Returns STP settings
* [updateNetworkSwitchStp](#updatenetworkswitchstp) - Updates STP settings

## getNetworkSwitchStp

Returns STP settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchStpRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchStpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchStpRequest req = new GetNetworkSwitchStpRequest("tenetur");            

            GetNetworkSwitchStpResponse res = sdk.stp.getNetworkSwitchStp(req);

            if (res.getNetworkSwitchStp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchStp

Updates STP settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStpRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStpRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStpRequestBodyStpBridgePriority;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchStpResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchStpRequest req = new UpdateNetworkSwitchStpRequest("adipisci") {{
                requestBody = new UpdateNetworkSwitchStpRequestBody() {{
                    rstpEnabled = false;
                    stpBridgePriority = new org.openapis.openapi.models.operations.UpdateNetworkSwitchStpRequestBodyStpBridgePriority[]{{
                        add(new UpdateNetworkSwitchStpRequestBodyStpBridgePriority(950705L) {{
                            stacks = new String[]{{
                                add("aut"),
                            }};
                            stpPriority = 38279L;
                            switchProfiles = new String[]{{
                                add("ipsam"),
                                add("temporibus"),
                                add("dolorum"),
                                add("distinctio"),
                            }};
                            switches = new String[]{{
                                add("atque"),
                                add("consectetur"),
                                add("magnam"),
                                add("nemo"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchStpRequestBodyStpBridgePriority(521087L) {{
                            stacks = new String[]{{
                                add("eius"),
                                add("corrupti"),
                                add("laboriosam"),
                            }};
                            stpPriority = 777330L;
                            switchProfiles = new String[]{{
                                add("quae"),
                                add("corporis"),
                                add("fugit"),
                            }};
                            switches = new String[]{{
                                add("eveniet"),
                                add("fugiat"),
                                add("illo"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchStpRequestBodyStpBridgePriority(533759L) {{
                            stacks = new String[]{{
                                add("ex"),
                                add("nostrum"),
                                add("sint"),
                            }};
                            stpPriority = 729132L;
                            switchProfiles = new String[]{{
                                add("amet"),
                                add("doloribus"),
                            }};
                            switches = new String[]{{
                                add("et"),
                                add("quod"),
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchStpResponse res = sdk.stp.updateNetworkSwitchStp(req);

            if (res.updateNetworkSwitchStp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
