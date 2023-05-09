# mtu

### Available Operations

* [getNetworkSwitchMtu](#getnetworkswitchmtu) - Return the MTU configuration
* [updateNetworkSwitchMtu](#updatenetworkswitchmtu) - Update the MTU configuration

## getNetworkSwitchMtu

Return the MTU configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchMtuRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchMtuResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchMtuRequest req = new GetNetworkSwitchMtuRequest("ab");            

            GetNetworkSwitchMtuResponse res = sdk.mtu.getNetworkSwitchMtu(req);

            if (res.getNetworkSwitchMtu200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchMtu

Update the MTU configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchMtuRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchMtuRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchMtuRequestBodyOverrides;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchMtuResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchMtuRequest req = new UpdateNetworkSwitchMtuRequest("quia") {{
                requestBody = new UpdateNetworkSwitchMtuRequestBody() {{
                    defaultMtuSize = 262815L;
                    overrides = new org.openapis.openapi.models.operations.UpdateNetworkSwitchMtuRequestBodyOverrides[]{{
                        add(new UpdateNetworkSwitchMtuRequestBodyOverrides(831135L) {{
                            mtuSize = 883739L;
                            switchProfiles = new String[]{{
                                add("placeat"),
                                add("modi"),
                                add("quaerat"),
                            }};
                            switches = new String[]{{
                                add("aperiam"),
                                add("commodi"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchMtuRequestBodyOverrides(442657L) {{
                            mtuSize = 478768L;
                            switchProfiles = new String[]{{
                                add("repudiandae"),
                                add("unde"),
                                add("dolorum"),
                            }};
                            switches = new String[]{{
                                add("ad"),
                                add("eligendi"),
                                add("cumque"),
                                add("id"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchMtuRequestBodyOverrides(687791L) {{
                            mtuSize = 708722L;
                            switchProfiles = new String[]{{
                                add("dolorum"),
                                add("animi"),
                                add("iure"),
                            }};
                            switches = new String[]{{
                                add("odio"),
                                add("blanditiis"),
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchMtuResponse res = sdk.mtu.updateNetworkSwitchMtu(req);

            if (res.updateNetworkSwitchMtu200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
