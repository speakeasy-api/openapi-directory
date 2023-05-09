# accessPolicies

### Available Operations

* [createNetworkSwitchAccessPolicy](#createnetworkswitchaccesspolicy) - Create an access policy for a switch network
* [deleteNetworkSwitchAccessPolicy](#deletenetworkswitchaccesspolicy) - Delete an access policy for a switch network
* [getNetworkSwitchAccessPolicies](#getnetworkswitchaccesspolicies) - List the access policies for a switch network
* [getNetworkSwitchAccessPolicy](#getnetworkswitchaccesspolicy) - Return a specific access policy for a switch network
* [updateNetworkSwitchAccessPolicy](#updatenetworkswitchaccesspolicy) - Update an access policy for a switch network

## createNetworkSwitchAccessPolicy

Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyDot1x;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyRadius;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers;
import org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchAccessPolicyRequest req = new CreateNetworkSwitchAccessPolicyRequest(                new CreateNetworkSwitchAccessPolicyRequestBody(CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum.MULTI_DOMAIN, "qui", false, false,                 new org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers[]{{
                                                add(new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers("excepturi", 135218L, "perferendis") {{
                                                    host = "cum";
                                                    port = 456150L;
                                                    secret = "ipsum";
                                                }}),
                                                add(new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers("iste", 222321L, "natus") {{
                                                    host = "ad";
                                                    port = 617636L;
                                                    secret = "sed";
                                                }}),
                                                add(new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers("fuga", 449950L, "corporis") {{
                                                    host = "laboriosam";
                                                    port = 943749L;
                                                    secret = "saepe";
                                                }}),
                                                add(new CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers("quidem", 99280L, "ipsa") {{
                                                    host = "iste";
                                                    port = 437032L;
                                                    secret = "saepe";
                                                }}),
                                            }}, false, false) {{
                                accessPolicyType = CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum.MAC_AUTHENTICATION_BYPASS;
                                dot1x = new CreateNetworkSwitchAccessPolicyRequestBodyDot1x() {{
                                    controlDirection = CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum.INBOUND;
                                }};;
                                guestPortBouncing = false;
                                guestVlanId = 653140L;
                                increaseAccessSpeed = false;
                                radius = new CreateNetworkSwitchAccessPolicyRequestBodyRadius() {{
                                    criticalAuth = new CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth() {{
                                        dataVlanId = 670638L;
                                        suspendPortBounce = false;
                                        voiceVlanId = 170909L;
                                    }};;
                                    failedAuthVlanId = 210382L;
                                    reAuthenticationInterval = 358152L;
                                }};;
                                radiusAccountingServers = new org.openapis.openapi.models.operations.CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[]{{
                                    add(new CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers("nemo", 325047L, "excepturi") {{
                                        host = "nobis";
                                        port = 315428L;
                                        secret = "omnis";
                                    }}),
                                }};
                                radiusGroupAttribute = "accusantium";
                                urlRedirectWalledGardenRanges = new String[]{{
                                    add("culpa"),
                                    add("doloribus"),
                                }};
                                voiceVlanClients = false;
                            }};, "sapiente");            

            CreateNetworkSwitchAccessPolicyResponse res = sdk.accessPolicies.createNetworkSwitchAccessPolicy(req);

            if (res.createNetworkSwitchAccessPolicy201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchAccessPolicy

Delete an access policy for a switch network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchAccessPolicyRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchAccessPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchAccessPolicyRequest req = new DeleteNetworkSwitchAccessPolicyRequest("mollitia", "dolorem");            

            DeleteNetworkSwitchAccessPolicyResponse res = sdk.accessPolicies.deleteNetworkSwitchAccessPolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchAccessPolicies

List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessPoliciesRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchAccessPoliciesRequest req = new GetNetworkSwitchAccessPoliciesRequest("consequuntur");            

            GetNetworkSwitchAccessPoliciesResponse res = sdk.accessPolicies.getNetworkSwitchAccessPolicies(req);

            if (res.getNetworkSwitchAccessPolicies200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchAccessPolicy

Return a specific access policy for a switch network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessPolicyRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchAccessPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchAccessPolicyRequest req = new GetNetworkSwitchAccessPolicyRequest("mollitia", "occaecati");            

            GetNetworkSwitchAccessPolicyResponse res = sdk.accessPolicies.getNetworkSwitchAccessPolicy(req);

            if (res.getNetworkSwitchAccessPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchAccessPolicy

Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyDot1x;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadius;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchAccessPolicyRequest req = new UpdateNetworkSwitchAccessPolicyRequest("commodi", "quam") {{
                requestBody = new UpdateNetworkSwitchAccessPolicyRequestBody() {{
                    accessPolicyType = UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum.HYBRID_AUTHENTICATION;
                    dot1x = new UpdateNetworkSwitchAccessPolicyRequestBodyDot1x() {{
                        controlDirection = UpdateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum.BOTH;
                    }};;
                    guestPortBouncing = false;
                    guestVlanId = 623510L;
                    hostMode = UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum.MULTI_AUTH;
                    increaseAccessSpeed = false;
                    name = "Gloria Padberg";
                    radius = new UpdateNetworkSwitchAccessPolicyRequestBodyRadius() {{
                        criticalAuth = new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth() {{
                            dataVlanId = 138183L;
                            suspendPortBounce = false;
                            voiceVlanId = 778346L;
                        }};;
                        failedAuthVlanId = 196582L;
                        reAuthenticationInterval = 949572L;
                    }};;
                    radiusAccountingEnabled = false;
                    radiusAccountingServers = new org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[]{{
                        add(new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers("quasi", 622846L, "temporibus") {{
                            host = "id";
                            port = 820994L;
                            secret = "aut";
                        }}),
                        add(new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers("voluptatibus", 878194L, "nihil") {{
                            host = "laborum";
                            port = 96098L;
                            secret = "reiciendis";
                        }}),
                    }};
                    radiusCoaSupportEnabled = false;
                    radiusGroupAttribute = "praesentium";
                    radiusServers = new org.openapis.openapi.models.operations.UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers[]{{
                        add(new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers("cum", 19987L, "doloremque") {{
                            host = "ipsa";
                            port = 604846L;
                            secret = "voluptate";
                        }}),
                        add(new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers("dicta", 359444L, "dolore") {{
                            host = "reprehenderit";
                            port = 282807L;
                            secret = "maiores";
                        }}),
                        add(new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers("enim", 880476L, "commodi") {{
                            host = "iusto";
                            port = 118727L;
                            secret = "harum";
                        }}),
                        add(new UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers("quidem", 565189L, "excepturi") {{
                            host = "repudiandae";
                            port = 64147L;
                            secret = "ipsum";
                        }}),
                    }};
                    radiusTestingEnabled = false;
                    urlRedirectWalledGardenEnabled = false;
                    urlRedirectWalledGardenRanges = new String[]{{
                        add("modi"),
                        add("praesentium"),
                        add("rem"),
                        add("voluptates"),
                    }};
                    voiceVlanClients = false;
                }};;
            }};            

            UpdateNetworkSwitchAccessPolicyResponse res = sdk.accessPolicies.updateNetworkSwitchAccessPolicy(req);

            if (res.updateNetworkSwitchAccessPolicy200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
