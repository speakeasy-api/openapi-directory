# mx1ManyNATRules

### Available Operations

* [getNetworkOneToManyNatRules](#getnetworkonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [updateNetworkOneToManyNatRules](#updatenetworkonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network

## getNetworkOneToManyNatRules

Return the 1:Many NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkOneToManyNatRulesRequest;
import org.openapis.openapi.models.operations.GetNetworkOneToManyNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkOneToManyNatRulesRequest req = new GetNetworkOneToManyNatRulesRequest("sit");            

            GetNetworkOneToManyNatRulesResponse res = sdk.mx1ManyNATRules.getNetworkOneToManyNatRules(req);

            if (res.getNetworkOneToManyNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkOneToManyNatRules

Set the 1:Many NAT mapping rules for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkOneToManyNatRulesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkOneToManyNatRulesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkOneToManyNatRulesRequestBodyRules;
import org.openapis.openapi.models.operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules;
import org.openapis.openapi.models.operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;
import org.openapis.openapi.models.operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesUplinkEnum;
import org.openapis.openapi.models.operations.UpdateNetworkOneToManyNatRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkOneToManyNatRulesRequest req = new UpdateNetworkOneToManyNatRulesRequest(                new UpdateNetworkOneToManyNatRulesRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkOneToManyNatRulesRequestBodyRules[]{{
                                                add(new UpdateNetworkOneToManyNatRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules[]{{
                                                                    add(new UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("accusamus"),
                                                                            add("natus"),
                                                                            add("minima"),
                                                                            add("aspernatur"),
                                                                        }};
                                                                        localIp = "ex";
                                                                        localPort = "maiores";
                                                                        name = "Wilfred Mueller";
                                                                        protocol = UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                                        publicPort = "atque";
                                                                    }}),
                                                                    add(new UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("sunt"),
                                                                            add("recusandae"),
                                                                            add("dolorum"),
                                                                        }};
                                                                        localIp = "repellendus";
                                                                        localPort = "labore";
                                                                        name = "Mr. Anthony Waelchi Sr.";
                                                                        protocol = UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                                        publicPort = "laboriosam";
                                                                    }}),
                                                                    add(new UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("a"),
                                                                        }};
                                                                        localIp = "molestias";
                                                                        localPort = "magnam";
                                                                        name = "Carlos McClure";
                                                                        protocol = UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                                        publicPort = "adipisci";
                                                                    }}),
                                                                    add(new UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("occaecati"),
                                                                            add("consequuntur"),
                                                                            add("fugit"),
                                                                            add("id"),
                                                                        }};
                                                                        localIp = "quis";
                                                                        localPort = "reprehenderit";
                                                                        name = "Jerry Hessel";
                                                                        protocol = UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                                        publicPort = "vero";
                                                                    }}),
                                                                }}, "doloremque", UpdateNetworkOneToManyNatRulesRequestBodyRulesUplinkEnum.INTERNET1) {{
                                                    portRules = new org.openapis.openapi.models.operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules[]{{
                                                        add(new UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                            allowedIps = new String[]{{
                                                                add("consequatur"),
                                                                add("incidunt"),
                                                                add("reiciendis"),
                                                            }};
                                                            localIp = "dolorem";
                                                            localPort = "harum";
                                                            name = "Diane Mayer";
                                                            protocol = UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                            publicPort = "laborum";
                                                        }}),
                                                        add(new UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                            allowedIps = new String[]{{
                                                                add("tenetur"),
                                                                add("laboriosam"),
                                                                add("alias"),
                                                            }};
                                                            localIp = "amet";
                                                            localPort = "deserunt";
                                                            name = "Lindsey Witting";
                                                            protocol = UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                            publicPort = "voluptates";
                                                        }}),
                                                        add(new UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                            allowedIps = new String[]{{
                                                                add("est"),
                                                            }};
                                                            localIp = "quidem";
                                                            localPort = "reprehenderit";
                                                            name = "Grant Langosh";
                                                            protocol = UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                            publicPort = "quisquam";
                                                        }}),
                                                        add(new UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                            allowedIps = new String[]{{
                                                                add("quasi"),
                                                                add("atque"),
                                                                add("reprehenderit"),
                                                                add("asperiores"),
                                                            }};
                                                            localIp = "totam";
                                                            localPort = "suscipit";
                                                            name = "Simon Borer";
                                                            protocol = UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                            publicPort = "ea";
                                                        }}),
                                                    }};
                                                    publicIp = "atque";
                                                    uplink = UpdateNetworkOneToManyNatRulesRequestBodyRulesUplinkEnum.INTERNET2;
                                                }}),
                                                add(new UpdateNetworkOneToManyNatRulesRequestBodyRules(                new org.openapis.openapi.models.operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules[]{{
                                                                    add(new UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("corporis"),
                                                                        }};
                                                                        localIp = "perspiciatis";
                                                                        localPort = "nihil";
                                                                        name = "Shane Abshire";
                                                                        protocol = UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                                        publicPort = "id";
                                                                    }}),
                                                                    add(new UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("dolore"),
                                                                            add("dolorum"),
                                                                        }};
                                                                        localIp = "nesciunt";
                                                                        localPort = "quae";
                                                                        name = "Arturo Hagenes";
                                                                        protocol = UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                                        publicPort = "culpa";
                                                                    }}),
                                                                    add(new UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("debitis"),
                                                                        }};
                                                                        localIp = "laudantium";
                                                                        localPort = "eum";
                                                                        name = "Patti Klocko";
                                                                        protocol = UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                                        publicPort = "reiciendis";
                                                                    }}),
                                                                    add(new UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                                        allowedIps = new String[]{{
                                                                            add("aspernatur"),
                                                                            add("ullam"),
                                                                            add("quasi"),
                                                                        }};
                                                                        localIp = "animi";
                                                                        localPort = "nostrum";
                                                                        name = "Eduardo Schuster";
                                                                        protocol = UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.TCP;
                                                                        publicPort = "accusantium";
                                                                    }}),
                                                                }}, "repellat", UpdateNetworkOneToManyNatRulesRequestBodyRulesUplinkEnum.INTERNET2) {{
                                                    portRules = new org.openapis.openapi.models.operations.UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules[]{{
                                                        add(new UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules() {{
                                                            allowedIps = new String[]{{
                                                                add("quae"),
                                                                add("molestiae"),
                                                                add("eveniet"),
                                                            }};
                                                            localIp = "qui";
                                                            localPort = "cum";
                                                            name = "Kelley Dibbert";
                                                            protocol = UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum.UDP;
                                                            publicPort = "rem";
                                                        }}),
                                                    }};
                                                    publicIp = "aliquam";
                                                    uplink = UpdateNetworkOneToManyNatRulesRequestBodyRulesUplinkEnum.INTERNET1;
                                                }}),
                                            }});, "ullam");            

            UpdateNetworkOneToManyNatRulesResponse res = sdk.mx1ManyNATRules.updateNetworkOneToManyNatRules(req);

            if (res.updateNetworkOneToManyNatRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
