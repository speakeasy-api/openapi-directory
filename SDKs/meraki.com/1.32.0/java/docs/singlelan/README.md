# singleLan

### Available Operations

* [getNetworkApplianceSingleLan](#getnetworkappliancesinglelan) - Return single LAN configuration
* [updateNetworkApplianceSingleLan](#updatenetworkappliancesinglelan) - Update single LAN configuration

## getNetworkApplianceSingleLan

Return single LAN configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSingleLanRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSingleLanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSingleLanRequest req = new GetNetworkApplianceSingleLanRequest("nulla");            

            GetNetworkApplianceSingleLanResponse res = sdk.singleLan.getNetworkApplianceSingleLan(req);

            if (res.getNetworkApplianceSingleLan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceSingleLan

Update single LAN configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceSingleLanRequest req = new UpdateNetworkApplianceSingleLanRequest("veniam") {{
                requestBody = new UpdateNetworkApplianceSingleLanRequestBody() {{
                    applianceIp = "beatae";
                    ipv6 = new UpdateNetworkApplianceSingleLanRequestBodyIpv6() {{
                        enabled = false;
                        prefixAssignments = new org.openapis.openapi.models.operations.UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments[]{{
                            add(new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments() {{
                                autonomous = false;
                                origin = new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin(UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT) {{
                                    interfaces = new String[]{{
                                        add("itaque"),
                                    }};
                                    type = UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT;
                                }};
                                staticApplianceIp6 = "quas";
                                staticPrefix = "repellat";
                            }}),
                            add(new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments() {{
                                autonomous = false;
                                origin = new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin(UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET) {{
                                    interfaces = new String[]{{
                                        add("doloremque"),
                                        add("esse"),
                                        add("aperiam"),
                                    }};
                                    type = UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT;
                                }};
                                staticApplianceIp6 = "nostrum";
                                staticPrefix = "in";
                            }}),
                            add(new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments() {{
                                autonomous = false;
                                origin = new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin(UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INDEPENDENT) {{
                                    interfaces = new String[]{{
                                        add("animi"),
                                    }};
                                    type = UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET;
                                }};
                                staticApplianceIp6 = "ducimus";
                                staticPrefix = "error";
                            }}),
                            add(new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments() {{
                                autonomous = false;
                                origin = new UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin(UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET) {{
                                    interfaces = new String[]{{
                                        add("ullam"),
                                        add("libero"),
                                    }};
                                    type = UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum.INTERNET;
                                }};
                                staticApplianceIp6 = "ea";
                                staticPrefix = "rem";
                            }}),
                        }};
                    }};;
                    mandatoryDhcp = new UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp() {{
                        enabled = false;
                    }};;
                    subnet = "quae";
                }};;
            }};            

            UpdateNetworkApplianceSingleLanResponse res = sdk.singleLan.updateNetworkApplianceSingleLan(req);

            if (res.updateNetworkApplianceSingleLan200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
