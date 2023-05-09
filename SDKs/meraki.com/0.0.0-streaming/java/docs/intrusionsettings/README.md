# intrusionSettings

### Available Operations

* [getNetworkSecurityIntrusionSettings](#getnetworksecurityintrusionsettings) - Returns all supported intrusion settings for an MX network
* [getOrganizationSecurityIntrusionSettings](#getorganizationsecurityintrusionsettings) - Returns all supported intrusion settings for an organization
* [updateNetworkSecurityIntrusionSettings](#updatenetworksecurityintrusionsettings) - Set the supported intrusion settings for an MX network
* [updateOrganizationSecurityIntrusionSettings](#updateorganizationsecurityintrusionsettings) - Sets supported intrusion settings for an organization

## getNetworkSecurityIntrusionSettings

Returns all supported intrusion settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSecurityIntrusionSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkSecurityIntrusionSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSecurityIntrusionSettingsRequest req = new GetNetworkSecurityIntrusionSettingsRequest("occaecati");            

            GetNetworkSecurityIntrusionSettingsResponse res = sdk.intrusionSettings.getNetworkSecurityIntrusionSettings(req);

            if (res.getNetworkSecurityIntrusionSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSecurityIntrusionSettings

Returns all supported intrusion settings for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSecurityIntrusionSettingsRequest;
import org.openapis.openapi.models.operations.GetOrganizationSecurityIntrusionSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSecurityIntrusionSettingsRequest req = new GetOrganizationSecurityIntrusionSettingsRequest("et");            

            GetOrganizationSecurityIntrusionSettingsResponse res = sdk.intrusionSettings.getOrganizationSecurityIntrusionSettings(req);

            if (res.getOrganizationSecurityIntrusionSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSecurityIntrusionSettings

Set the supported intrusion settings for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSecurityIntrusionSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSecurityIntrusionSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSecurityIntrusionSettingsRequestBodyIdsRulesetsEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSecurityIntrusionSettingsRequestBodyModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSecurityIntrusionSettingsRequestBodyProtectedNetworks;
import org.openapis.openapi.models.operations.UpdateNetworkSecurityIntrusionSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSecurityIntrusionSettingsRequest req = new UpdateNetworkSecurityIntrusionSettingsRequest("eveniet") {{
                requestBody = new UpdateNetworkSecurityIntrusionSettingsRequestBody() {{
                    idsRulesets = UpdateNetworkSecurityIntrusionSettingsRequestBodyIdsRulesetsEnum.SECURITY;
                    mode = UpdateNetworkSecurityIntrusionSettingsRequestBodyModeEnum.DETECTION;
                    protectedNetworks = new UpdateNetworkSecurityIntrusionSettingsRequestBodyProtectedNetworks() {{
                        excludedCidr = new String[]{{
                            add("quod"),
                            add("nam"),
                        }};
                        includedCidr = new String[]{{
                            add("aliquid"),
                            add("quasi"),
                            add("saepe"),
                            add("vel"),
                        }};
                        useDefault = false;
                    }};;
                }};;
            }};            

            UpdateNetworkSecurityIntrusionSettingsResponse res = sdk.intrusionSettings.updateNetworkSecurityIntrusionSettings(req);

            if (res.updateNetworkSecurityIntrusionSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationSecurityIntrusionSettings

Sets supported intrusion settings for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationSecurityIntrusionSettingsRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationSecurityIntrusionSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationSecurityIntrusionSettingsRequestBodyWhitelistedRules;
import org.openapis.openapi.models.operations.UpdateOrganizationSecurityIntrusionSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationSecurityIntrusionSettingsRequest req = new UpdateOrganizationSecurityIntrusionSettingsRequest(                new UpdateOrganizationSecurityIntrusionSettingsRequestBody(                new org.openapis.openapi.models.operations.UpdateOrganizationSecurityIntrusionSettingsRequestBodyWhitelistedRules[]{{
                                                add(new UpdateOrganizationSecurityIntrusionSettingsRequestBodyWhitelistedRules("minima") {{
                                                    message = "rerum";
                                                    ruleId = "occaecati";
                                                }}),
                                                add(new UpdateOrganizationSecurityIntrusionSettingsRequestBodyWhitelistedRules("sit") {{
                                                    message = "distinctio";
                                                    ruleId = "eligendi";
                                                }}),
                                            }});, "culpa");            

            UpdateOrganizationSecurityIntrusionSettingsResponse res = sdk.intrusionSettings.updateOrganizationSecurityIntrusionSettings(req);

            if (res.updateOrganizationSecurityIntrusionSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
