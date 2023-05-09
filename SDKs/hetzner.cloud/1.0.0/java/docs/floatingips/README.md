# floatingIPs

## Overview

Floating IPs help you to create highly available setups. You can assign a Floating IP to any Server. The Server can then use this IP. You can reassign it to a different Server at any time, or you can choose to unassign the IP from Servers all together.

Floating IPs can be used globally. This means you can assign a Floating IP to a Server in one Location and later reassign it to a Server in a different Location. For optimal routing and latency Floating IPs should be used in the Location they were created in.

For Floating IPs to work with your Server, you must configure them inside your operation system.

Floating IPs of type `ipv4` use a single IPv4 address as their `ip` property. Floating IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.

Floating IPs are billed on a monthly basis.


### Available Operations

* [deleteFloatingIpsId](#deletefloatingipsid) - Delete a Floating IP
* [getFloatingIps](#getfloatingips) - Get all Floating IPs
* [getFloatingIpsId](#getfloatingipsid) - Get a Floating IP
* [postFloatingIps](#postfloatingips) - Create a Floating IP
* [putFloatingIpsId](#putfloatingipsid) - Update a Floating IP

## deleteFloatingIpsId

Deletes a Floating IP. If it is currently assigned to a Server it will automatically get unassigned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFloatingIpsIdRequest;
import org.openapis.openapi.models.operations.DeleteFloatingIpsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFloatingIpsIdRequest req = new DeleteFloatingIpsIdRequest(569618L);            

            DeleteFloatingIpsIdResponse res = sdk.floatingIPs.deleteFloatingIpsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFloatingIps

Returns all Floating IP objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFloatingIpsRequest;
import org.openapis.openapi.models.operations.GetFloatingIpsResponse;
import org.openapis.openapi.models.operations.GetFloatingIpsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFloatingIpsRequest req = new GetFloatingIpsRequest() {{
                labelSelector = "tempora";
                name = "Geoffrey Green";
                sort = GetFloatingIpsSortEnum.ID_ASC;
            }};            

            GetFloatingIpsResponse res = sdk.floatingIPs.getFloatingIps(req);

            if (res.getFloatingIps200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFloatingIpsId

Returns a specific Floating IP object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFloatingIpsIdRequest;
import org.openapis.openapi.models.operations.GetFloatingIpsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFloatingIpsIdRequest req = new GetFloatingIpsIdRequest(756107L);            

            GetFloatingIpsIdResponse res = sdk.floatingIPs.getFloatingIpsId(req);

            if (res.getFloatingIpsId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFloatingIps

Creates a new Floating IP assigned to a Server. If you want to create a Floating IP that is not bound to a Server, you need to provide the `home_location` key instead of `server`. This can be either the ID or the name of the Location this IP shall be created in. Note that a Floating IP can be assigned to a Server in any Location later on. For optimal routing it is advised to use the Floating IP in the same Location it was created in.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFloatingIpsCreateFloatingIPRequest;
import org.openapis.openapi.models.operations.PostFloatingIpsCreateFloatingIPRequestTypeEnum;
import org.openapis.openapi.models.operations.PostFloatingIpsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostFloatingIpsCreateFloatingIPRequest req = new PostFloatingIpsCreateFloatingIPRequest(PostFloatingIpsCreateFloatingIPRequestTypeEnum.IPV6) {{
                description = "Web Frontend";
                homeLocation = "fsn1";
                labels = new java.util.HashMap<String, Object>() {{
                    put("provident", "necessitatibus");
                    put("sint", "officia");
                }};
                name = "Web Frontend";
                server = 42L;
            }};            

            PostFloatingIpsResponse res = sdk.floatingIPs.postFloatingIps(req);

            if (res.postFloatingIps201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putFloatingIpsId

Updates the description or labels of a Floating IP.
Also note that when updating labels, the Floating IP’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutFloatingIpsIdRequest;
import org.openapis.openapi.models.operations.PutFloatingIpsIdResponse;
import org.openapis.openapi.models.operations.PutFloatingIpsIdUpdateFloatingIPRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutFloatingIpsIdRequest req = new PutFloatingIpsIdRequest(223081L) {{
                requestBody = new PutFloatingIpsIdUpdateFloatingIPRequest() {{
                    description = "Web Frontend";
                    labels = new java.util.HashMap<String, Object>() {{
                        put("a", "dolorum");
                        put("in", "in");
                        put("illum", "maiores");
                        put("rerum", "dicta");
                    }};
                    name = "Web Frontend";
                }};;
            }};            

            PutFloatingIpsIdResponse res = sdk.floatingIPs.putFloatingIpsId(req);

            if (res.putFloatingIpsId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
