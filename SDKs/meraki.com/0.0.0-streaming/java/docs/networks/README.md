# networks

### Available Operations

* [bindNetwork](#bindnetwork) - Bind a network to a template.
* [combineOrganizationNetworks](#combineorganizationnetworks) - Combine multiple networks into a single network
* [createOrganizationNetwork](#createorganizationnetwork) - Create a network
* [deleteNetwork](#deletenetwork) - Delete a network
* [getNetwork](#getnetwork) - Return a network
* [getNetworkAirMarshal](#getnetworkairmarshal) - List Air Marshal scan results from a network
* [getNetworkSiteToSiteVpn](#getnetworksitetositevpn) - Return the site-to-site VPN settings of a network
* [getNetworkTraffic](#getnetworktraffic) - Return the traffic analysis data for this network
* [getOrganizationNetworks](#getorganizationnetworks) - List the networks in an organization
* [splitNetwork](#splitnetwork) - Split a combined network into individual networks for each type of device
* [unbindNetwork](#unbindnetwork) - Unbind a network from a template.
* [updateNetwork](#updatenetwork) - Update a network
* [updateNetworkSiteToSiteVpn](#updatenetworksitetositevpn) - Update the site-to-site VPN settings of a network

## bindNetwork

Bind a network to a template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BindNetworkRequest;
import org.openapis.openapi.models.operations.BindNetworkRequestBody;
import org.openapis.openapi.models.operations.BindNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BindNetworkRequest req = new BindNetworkRequest(                new BindNetworkRequestBody("velit") {{
                                autoBind = false;
                            }};, "atque");            

            BindNetworkResponse res = sdk.networks.bindNetwork(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## combineOrganizationNetworks

Combine multiple networks into a single network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CombineOrganizationNetworksRequest;
import org.openapis.openapi.models.operations.CombineOrganizationNetworksRequestBody;
import org.openapis.openapi.models.operations.CombineOrganizationNetworksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CombineOrganizationNetworksRequest req = new CombineOrganizationNetworksRequest(                new CombineOrganizationNetworksRequestBody("impedit",                 new String[]{{
                                                add("soluta"),
                                            }}) {{
                                enrollmentString = "repudiandae";
                            }};, "nam");            

            CombineOrganizationNetworksResponse res = sdk.networks.combineOrganizationNetworks(req);

            if (res.combineOrganizationNetworks200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrganizationNetwork

Create a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationNetworkRequest;
import org.openapis.openapi.models.operations.CreateOrganizationNetworkRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationNetworkRequest req = new CreateOrganizationNetworkRequest(                new CreateOrganizationNetworkRequestBody("iusto", "voluptate") {{
                                copyFromNetworkId = "sequi";
                                disableMyMerakiCom = false;
                                disableRemoteStatusPage = false;
                                tags = "dignissimos";
                                timeZone = "neque";
                            }};, "quo");            

            CreateOrganizationNetworkResponse res = sdk.networks.createOrganizationNetwork(req);

            if (res.createOrganizationNetwork201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetwork

Delete a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkRequest;
import org.openapis.openapi.models.operations.DeleteNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkRequest req = new DeleteNetworkRequest("quibusdam");            

            DeleteNetworkResponse res = sdk.networks.deleteNetwork(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetwork

Return a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkRequest;
import org.openapis.openapi.models.operations.GetNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkRequest req = new GetNetworkRequest("odit");            

            GetNetworkResponse res = sdk.networks.getNetwork(req);

            if (res.getNetwork200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkAirMarshal

List Air Marshal scan results from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAirMarshalRequest;
import org.openapis.openapi.models.operations.GetNetworkAirMarshalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAirMarshalRequest req = new GetNetworkAirMarshalRequest("vel") {{
                t0 = "magnam";
                timespan = 8428.55;
            }};            

            GetNetworkAirMarshalResponse res = sdk.networks.getNetworkAirMarshal(req);

            if (res.getNetworkAirMarshal200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSiteToSiteVpn

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSiteToSiteVpnRequest;
import org.openapis.openapi.models.operations.GetNetworkSiteToSiteVpnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSiteToSiteVpnRequest req = new GetNetworkSiteToSiteVpnRequest("facere");            

            GetNetworkSiteToSiteVpnResponse res = sdk.networks.getNetworkSiteToSiteVpn(req);

            if (res.getNetworkSiteToSiteVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkTraffic

Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkTrafficDeviceTypeEnum;
import org.openapis.openapi.models.operations.GetNetworkTrafficRequest;
import org.openapis.openapi.models.operations.GetNetworkTrafficResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTrafficRequest req = new GetNetworkTrafficRequest("architecto") {{
                deviceType = GetNetworkTrafficDeviceTypeEnum.WIRELESS;
                t0 = "quia";
                timespan = 7820.9;
            }};            

            GetNetworkTrafficResponse res = sdk.networks.getNetworkTraffic(req);

            if (res.getNetworkTraffic200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationNetworks

List the networks in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationNetworksRequest;
import org.openapis.openapi.models.operations.GetOrganizationNetworksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationNetworksRequest req = new GetOrganizationNetworksRequest("velit") {{
                configTemplateId = "illo";
            }};            

            GetOrganizationNetworksResponse res = sdk.networks.getOrganizationNetworks(req);

            if (res.getOrganizationNetworks200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## splitNetwork

Split a combined network into individual networks for each type of device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SplitNetworkRequest;
import org.openapis.openapi.models.operations.SplitNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SplitNetworkRequest req = new SplitNetworkRequest("vel");            

            SplitNetworkResponse res = sdk.networks.splitNetwork(req);

            if (res.splitNetwork200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unbindNetwork

Unbind a network from a template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnbindNetworkRequest;
import org.openapis.openapi.models.operations.UnbindNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnbindNetworkRequest req = new UnbindNetworkRequest("beatae");            

            UnbindNetworkResponse res = sdk.networks.unbindNetwork(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetwork

Update a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkRequest;
import org.openapis.openapi.models.operations.UpdateNetworkRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkRequest req = new UpdateNetworkRequest("excepturi") {{
                requestBody = new UpdateNetworkRequestBody() {{
                    disableMyMerakiCom = false;
                    disableRemoteStatusPage = false;
                    enrollmentString = "eum";
                    name = "Leslie Metz DDS";
                    tags = "voluptatibus";
                    timeZone = "iste";
                }};;
            }};            

            UpdateNetworkResponse res = sdk.networks.updateNetwork(req);

            if (res.updateNetwork200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSiteToSiteVpn

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSiteToSiteVpnRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSiteToSiteVpnRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSiteToSiteVpnRequestBodyHubs;
import org.openapis.openapi.models.operations.UpdateNetworkSiteToSiteVpnRequestBodyModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkSiteToSiteVpnRequestBodySubnets;
import org.openapis.openapi.models.operations.UpdateNetworkSiteToSiteVpnResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSiteToSiteVpnRequest req = new UpdateNetworkSiteToSiteVpnRequest(                new UpdateNetworkSiteToSiteVpnRequestBody(UpdateNetworkSiteToSiteVpnRequestBodyModeEnum.HUB) {{
                                hubs = new org.openapis.openapi.models.operations.UpdateNetworkSiteToSiteVpnRequestBodyHubs[]{{
                                    add(new UpdateNetworkSiteToSiteVpnRequestBodyHubs("velit") {{
                                        hubId = "itaque";
                                        useDefaultRoute = false;
                                    }}),
                                    add(new UpdateNetworkSiteToSiteVpnRequestBodyHubs("non") {{
                                        hubId = "laborum";
                                        useDefaultRoute = false;
                                    }}),
                                }};
                                subnets = new org.openapis.openapi.models.operations.UpdateNetworkSiteToSiteVpnRequestBodySubnets[]{{
                                    add(new UpdateNetworkSiteToSiteVpnRequestBodySubnets("sit") {{
                                        localSubnet = "iusto";
                                        useVpn = false;
                                    }}),
                                }};
                            }};, "doloremque");            

            UpdateNetworkSiteToSiteVpnResponse res = sdk.networks.updateNetworkSiteToSiteVpn(req);

            if (res.updateNetworkSiteToSiteVpn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
