# multicast

### Available Operations

* [createNetworkSwitchRoutingMulticastRendezvousPoint](#createnetworkswitchroutingmulticastrendezvouspoint) - Create a multicast rendezvous point
* [deleteNetworkSwitchRoutingMulticastRendezvousPoint](#deletenetworkswitchroutingmulticastrendezvouspoint) - Delete a multicast rendezvous point
* [getNetworkSwitchRoutingMulticast](#getnetworkswitchroutingmulticast) - Return multicast settings for a network
* [getNetworkSwitchRoutingMulticastRendezvousPoint](#getnetworkswitchroutingmulticastrendezvouspoint) - Return a multicast rendezvous point
* [getNetworkSwitchRoutingMulticastRendezvousPoints](#getnetworkswitchroutingmulticastrendezvouspoints) - List multicast rendezvous points
* [updateNetworkSwitchRoutingMulticast](#updatenetworkswitchroutingmulticast) - Update multicast settings for a network
* [updateNetworkSwitchRoutingMulticastRendezvousPoint](#updatenetworkswitchroutingmulticastrendezvouspoint) - Update a multicast rendezvous point

## createNetworkSwitchRoutingMulticastRendezvousPoint

Create a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchRoutingMulticastRendezvousPointRequest req = new CreateNetworkSwitchRoutingMulticastRendezvousPointRequest(                new CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody("tempore", "illum");, "quibusdam");            

            CreateNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.multicast.createNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchRoutingMulticastRendezvousPoint

Delete a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest req = new DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest("reprehenderit", "saepe");            

            DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.multicast.deleteNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchRoutingMulticast

Return multicast settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingMulticastRequest req = new GetNetworkSwitchRoutingMulticastRequest("aperiam");            

            GetNetworkSwitchRoutingMulticastResponse res = sdk.multicast.getNetworkSwitchRoutingMulticast(req);

            if (res.getNetworkSwitchRoutingMulticast200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoint

Return a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingMulticastRendezvousPointRequest req = new GetNetworkSwitchRoutingMulticastRendezvousPointRequest("fugiat", "repellat");            

            GetNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.multicast.getNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchRoutingMulticastRendezvousPoints

List multicast rendezvous points

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchRoutingMulticastRendezvousPointsRequest req = new GetNetworkSwitchRoutingMulticastRendezvousPointsRequest("iusto");            

            GetNetworkSwitchRoutingMulticastRendezvousPointsResponse res = sdk.multicast.getNetworkSwitchRoutingMulticastRendezvousPoints(req);

            if (res.getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONArrays != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchRoutingMulticast

Update multicast settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchRoutingMulticastRequest req = new UpdateNetworkSwitchRoutingMulticastRequest("deleniti") {{
                requestBody = new UpdateNetworkSwitchRoutingMulticastRequestBody() {{
                    defaultSettings = new UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings() {{
                        floodUnknownMulticastTrafficEnabled = false;
                        igmpSnoopingEnabled = false;
                    }};;
                    overrides = new org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides[]{{
                        add(new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(false, false) {{
                            floodUnknownMulticastTrafficEnabled = false;
                            igmpSnoopingEnabled = false;
                            stacks = new String[]{{
                                add("eaque"),
                                add("a"),
                                add("placeat"),
                                add("numquam"),
                            }};
                            switchProfiles = new String[]{{
                                add("explicabo"),
                                add("reiciendis"),
                                add("sequi"),
                                add("eum"),
                            }};
                            switches = new String[]{{
                                add("ducimus"),
                                add("nulla"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(false, false) {{
                            floodUnknownMulticastTrafficEnabled = false;
                            igmpSnoopingEnabled = false;
                            stacks = new String[]{{
                                add("cum"),
                                add("praesentium"),
                            }};
                            switchProfiles = new String[]{{
                                add("facere"),
                                add("nam"),
                                add("at"),
                            }};
                            switches = new String[]{{
                                add("aut"),
                                add("praesentium"),
                                add("est"),
                                add("ab"),
                            }};
                        }}),
                        add(new UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides(false, false) {{
                            floodUnknownMulticastTrafficEnabled = false;
                            igmpSnoopingEnabled = false;
                            stacks = new String[]{{
                                add("illum"),
                                add("iste"),
                                add("reprehenderit"),
                            }};
                            switchProfiles = new String[]{{
                                add("unde"),
                                add("tempore"),
                                add("adipisci"),
                            }};
                            switches = new String[]{{
                                add("cum"),
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkSwitchRoutingMulticastResponse res = sdk.multicast.updateNetworkSwitchRoutingMulticast(req);

            if (res.updateNetworkSwitchRoutingMulticast200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchRoutingMulticastRendezvousPoint

Update a multicast rendezvous point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest req = new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest(                new UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody("illum", "assumenda");, "perferendis", "aut");            

            UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse res = sdk.multicast.updateNetworkSwitchRoutingMulticastRendezvousPoint(req);

            if (res.updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
