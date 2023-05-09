# intrusion

### Available Operations

* [getNetworkApplianceSecurityIntrusion](#getnetworkappliancesecurityintrusion) - Returns all supported intrusion settings for an MX network
* [getOrganizationApplianceSecurityIntrusion](#getorganizationappliancesecurityintrusion) - Returns all supported intrusion settings for an organization
* [updateNetworkApplianceSecurityIntrusion](#updatenetworkappliancesecurityintrusion) - Set the supported intrusion settings for an MX network
* [updateOrganizationApplianceSecurityIntrusion](#updateorganizationappliancesecurityintrusion) - Sets supported intrusion settings for an organization

## getNetworkApplianceSecurityIntrusion

Returns all supported intrusion settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityIntrusionRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityIntrusionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSecurityIntrusionRequest req = new GetNetworkApplianceSecurityIntrusionRequest("voluptates");            

            GetNetworkApplianceSecurityIntrusionResponse res = sdk.intrusion.getNetworkApplianceSecurityIntrusion(req);

            if (res.getNetworkApplianceSecurityIntrusion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceSecurityIntrusion

Returns all supported intrusion settings for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityIntrusionRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityIntrusionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceSecurityIntrusionRequest req = new GetOrganizationApplianceSecurityIntrusionRequest("aliquid");            

            GetOrganizationApplianceSecurityIntrusionResponse res = sdk.intrusion.getOrganizationApplianceSecurityIntrusion(req);

            if (res.getOrganizationApplianceSecurityIntrusion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceSecurityIntrusion

Set the supported intrusion settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceSecurityIntrusionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceSecurityIntrusionRequest req = new UpdateNetworkApplianceSecurityIntrusionRequest("cupiditate") {{
                requestBody = new UpdateNetworkApplianceSecurityIntrusionRequestBody() {{
                    idsRulesets = UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum.SECURITY;
                    mode = UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum.DISABLED;
                    protectedNetworks = new UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks() {{
                        excludedCidr = new String[]{{
                            add("rem"),
                        }};
                        includedCidr = new String[]{{
                            add("non"),
                            add("sit"),
                            add("quidem"),
                        }};
                        useDefault = false;
                    }};;
                }};;
            }};            

            UpdateNetworkApplianceSecurityIntrusionResponse res = sdk.intrusion.updateNetworkApplianceSecurityIntrusion(req);

            if (res.updateNetworkApplianceSecurityIntrusion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationApplianceSecurityIntrusion

Sets supported intrusion settings for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules;
import org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationApplianceSecurityIntrusionRequest req = new UpdateOrganizationApplianceSecurityIntrusionRequest(                new UpdateOrganizationApplianceSecurityIntrusionRequestBody(                new org.openapis.openapi.models.operations.UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules[]{{
                                                add(new UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules("esse") {{
                                                    message = "a";
                                                    ruleId = "blanditiis";
                                                }}),
                                                add(new UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules("nobis") {{
                                                    message = "eius";
                                                    ruleId = "quae";
                                                }}),
                                            }});, "ut");            

            UpdateOrganizationApplianceSecurityIntrusionResponse res = sdk.intrusion.updateOrganizationApplianceSecurityIntrusion(req);

            if (res.updateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
