# organizations

### Available Operations

* [claimIntoOrganization](#claimintoorganization) - Claim a list of devices, licenses, and/or orders into an organization
* [cloneOrganization](#cloneorganization) - Create a new organization by cloning the addressed organization
* [getOrganization](#getorganization) - Return an organization
* [getOrganizationDeviceStatuses](#getorganizationdevicestatuses) - List the status of every Meraki device in the organization
* [getOrganizationInventory](#getorganizationinventory) - Return the inventory for an organization
* [getOrganizationThirdPartyVPNPeers](#getorganizationthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [getOrganizationUplinksLossAndLatency](#getorganizationuplinkslossandlatency) - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
* [getOrganizations](#getorganizations) - List the organizations that the user has privileges on
* [updateOrganizationThirdPartyVPNPeers](#updateorganizationthirdpartyvpnpeers) - Update the third party VPN peers for an organization

## claimIntoOrganization

Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClaimIntoOrganizationRequest;
import org.openapis.openapi.models.operations.ClaimIntoOrganizationRequestBody;
import org.openapis.openapi.models.operations.ClaimIntoOrganizationRequestBodyLicenses;
import org.openapis.openapi.models.operations.ClaimIntoOrganizationRequestBodyLicensesModeEnum;
import org.openapis.openapi.models.operations.ClaimIntoOrganizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClaimIntoOrganizationRequest req = new ClaimIntoOrganizationRequest("ea") {{
                requestBody = new ClaimIntoOrganizationRequestBody() {{
                    licenses = new org.openapis.openapi.models.operations.ClaimIntoOrganizationRequestBodyLicenses[]{{
                        add(new ClaimIntoOrganizationRequestBodyLicenses("placeat") {{
                            key = "voluptas";
                            mode = ClaimIntoOrganizationRequestBodyLicensesModeEnum.RENEW;
                        }}),
                        add(new ClaimIntoOrganizationRequestBodyLicenses("deleniti") {{
                            key = "perspiciatis";
                            mode = ClaimIntoOrganizationRequestBodyLicensesModeEnum.RENEW;
                        }}),
                        add(new ClaimIntoOrganizationRequestBodyLicenses("ullam") {{
                            key = "a";
                            mode = ClaimIntoOrganizationRequestBodyLicensesModeEnum.ADD_DEVICES;
                        }}),
                    }};
                    orders = new String[]{{
                        add("necessitatibus"),
                        add("animi"),
                        add("impedit"),
                    }};
                    serials = new String[]{{
                        add("corporis"),
                        add("est"),
                    }};
                }};;
            }};            

            ClaimIntoOrganizationResponse res = sdk.organizations.claimIntoOrganization(req);

            if (res.claimIntoOrganization200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloneOrganization

Create a new organization by cloning the addressed organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloneOrganizationRequest;
import org.openapis.openapi.models.operations.CloneOrganizationRequestBody;
import org.openapis.openapi.models.operations.CloneOrganizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CloneOrganizationRequest req = new CloneOrganizationRequest(                new CloneOrganizationRequestBody("esse");, "labore");            

            CloneOrganizationResponse res = sdk.organizations.cloneOrganization(req);

            if (res.cloneOrganization201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganization

Return an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationRequest;
import org.openapis.openapi.models.operations.GetOrganizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationRequest req = new GetOrganizationRequest("vero");            

            GetOrganizationResponse res = sdk.organizations.getOrganization(req);

            if (res.getOrganization200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDeviceStatuses

List the status of every Meraki device in the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDeviceStatusesRequest;
import org.openapis.openapi.models.operations.GetOrganizationDeviceStatusesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDeviceStatusesRequest req = new GetOrganizationDeviceStatusesRequest("vitae");            

            GetOrganizationDeviceStatusesResponse res = sdk.organizations.getOrganizationDeviceStatuses(req);

            if (res.getOrganizationDeviceStatuses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationInventory

Return the inventory for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationInventoryRequest;
import org.openapis.openapi.models.operations.GetOrganizationInventoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationInventoryRequest req = new GetOrganizationInventoryRequest("dolorem") {{
                includeLicenseInfo = false;
            }};            

            GetOrganizationInventoryResponse res = sdk.organizations.getOrganizationInventory(req);

            if (res.getOrganizationInventory200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationThirdPartyVPNPeers

Return the third party VPN peers for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationThirdPartyVPNPeersRequest;
import org.openapis.openapi.models.operations.GetOrganizationThirdPartyVPNPeersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationThirdPartyVPNPeersRequest req = new GetOrganizationThirdPartyVPNPeersRequest("qui");            

            GetOrganizationThirdPartyVPNPeersResponse res = sdk.organizations.getOrganizationThirdPartyVPNPeers(req);

            if (res.getOrganizationThirdPartyVPNPeers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationUplinksLossAndLatency

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationUplinksLossAndLatencyRequest;
import org.openapis.openapi.models.operations.GetOrganizationUplinksLossAndLatencyResponse;
import org.openapis.openapi.models.operations.GetOrganizationUplinksLossAndLatencyUplinkEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationUplinksLossAndLatencyRequest req = new GetOrganizationUplinksLossAndLatencyRequest("ex") {{
                ip = "nemo";
                t0 = "soluta";
                t1 = "libero";
                timespan = 5269.07;
                uplink = GetOrganizationUplinksLossAndLatencyUplinkEnum.WAN2;
            }};            

            GetOrganizationUplinksLossAndLatencyResponse res = sdk.organizations.getOrganizationUplinksLossAndLatency(req);

            if (res.getOrganizationUplinksLossAndLatency200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizations

List the organizations that the user has privileges on

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationsResponse res = sdk.organizations.getOrganizations();

            if (res.getOrganizations200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationThirdPartyVPNPeers

Update the third party VPN peers for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationThirdPartyVPNPeersRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationThirdPartyVPNPeersRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeers;
import org.openapis.openapi.models.operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPolicies;
import org.openapis.openapi.models.operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationThirdPartyVPNPeersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationThirdPartyVPNPeersRequest req = new UpdateOrganizationThirdPartyVPNPeersRequest(                new UpdateOrganizationThirdPartyVPNPeersRequestBody(                new org.openapis.openapi.models.operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeers[]{{
                                                add(new UpdateOrganizationThirdPartyVPNPeersRequestBodyPeers("beatae",                 new String[]{{
                                                                    add("facere"),
                                                                    add("corrupti"),
                                                                    add("molestiae"),
                                                                }}, "provident", "accusamus") {{
                                                    ikeVersion = UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIkeVersionEnum.ONE;
                                                    ipsecPolicies = new UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPolicies() {{
                                                        childAuthAlgo = new String[]{{
                                                            add("quae"),
                                                            add("quae"),
                                                        }};
                                                        childCipherAlgo = new String[]{{
                                                            add("neque"),
                                                            add("exercitationem"),
                                                        }};
                                                        childLifetime = 932394L;
                                                        childPfsGroup = new String[]{{
                                                            add("ipsum"),
                                                        }};
                                                        ikeAuthAlgo = new String[]{{
                                                            add("nulla"),
                                                            add("distinctio"),
                                                            add("maxime"),
                                                        }};
                                                        ikeCipherAlgo = new String[]{{
                                                            add("quia"),
                                                        }};
                                                        ikeDiffieHellmanGroup = new String[]{{
                                                            add("omnis"),
                                                            add("libero"),
                                                        }};
                                                        ikeLifetime = 115661L;
                                                        ikePrfAlgo = new org.openapis.openapi.models.operations.UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum[]{{
                                                            add(UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFSHA1),
                                                            add(UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFSHA256),
                                                            add(UpdateOrganizationThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum.PRFSHA1),
                                                        }};
                                                    }};
                                                    ipsecPoliciesPreset = "quos";
                                                    name = "Dr. Paul Kris Jr.";
                                                    networkTags = new String[]{{
                                                        add("dolore"),
                                                        add("eligendi"),
                                                        add("distinctio"),
                                                    }};
                                                    privateSubnets = new String[]{{
                                                        add("autem"),
                                                    }};
                                                    publicIp = "esse";
                                                    remoteId = "dolores";
                                                    secret = "assumenda";
                                                }}),
                                            }});, "necessitatibus");            

            UpdateOrganizationThirdPartyVPNPeersResponse res = sdk.organizations.updateOrganizationThirdPartyVPNPeers(req);

            if (res.updateOrganizationThirdPartyVPNPeers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
