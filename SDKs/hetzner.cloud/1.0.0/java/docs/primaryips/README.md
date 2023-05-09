# primaryIPs

## Overview

Primary IPs help you to create more flexible networking setups. You can assign at most one Primary IP of type `ipv4` and one of type `ipv6` per Server. This Server then uses these IPs.

You can only unassign a Primary IP from a Server when it's powered off. This Primary IP can then be assigned to a different powered off Server, or you can keep it around for later use.

Primary IPs are bound to a specific Datacenter. You can not assign a Primary IP from one Datacenter to a Server in a different Datacenter. If you need this capability use Floating IPs instead.

If your Server's operating system supports cloud-init there is no further configuration needed to make Primary IPs work.

Primary IPs of type `ipv4` use a single IPv4 address as their `ip` property. Primary IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.

Primary IPs are billed on an hourly basis.


### Available Operations

* [deletePrimaryIpsId](#deleteprimaryipsid) - Delete a Primary IP
* [getPrimaryIps](#getprimaryips) - Get all Primary IPs
* [getPrimaryIpsId](#getprimaryipsid) - Get a Primary IP
* [postPrimaryIps](#postprimaryips) - Create a Primary IP
* [putPrimaryIpsId](#putprimaryipsid) - Update a Primary IP

## deletePrimaryIpsId

Deletes a Primary IP.

The Primary IP may be assigned to a Server. In this case it is unassigned automatically. The Server must be powered off (status `off`) in order for this operation to succeed.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePrimaryIpsIdRequest;
import org.openapis.openapi.models.operations.DeletePrimaryIpsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePrimaryIpsIdRequest req = new DeletePrimaryIpsIdRequest(216897L);            

            DeletePrimaryIpsIdResponse res = sdk.primaryIPs.deletePrimaryIpsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPrimaryIps

Returns all Primary IP objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPrimaryIpsRequest;
import org.openapis.openapi.models.operations.GetPrimaryIpsResponse;
import org.openapis.openapi.models.operations.GetPrimaryIpsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPrimaryIpsRequest req = new GetPrimaryIpsRequest() {{
                ip = "voluptate";
                labelSelector = "id";
                name = "Mrs. Ray Collins";
                sort = GetPrimaryIpsSortEnum.CREATED_DESC;
            }};            

            GetPrimaryIpsResponse res = sdk.primaryIPs.getPrimaryIps(req);

            if (res.primaryIPsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPrimaryIpsId

Returns a specific Primary IP object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPrimaryIpsIdRequest;
import org.openapis.openapi.models.operations.GetPrimaryIpsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPrimaryIpsIdRequest req = new GetPrimaryIpsIdRequest(320017L);            

            GetPrimaryIpsIdResponse res = sdk.primaryIPs.getPrimaryIpsId(req);

            if (res.primaryIPResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPrimaryIps

Creates a new Primary IP, optionally assigned to a Server.

If you want to create a Primary IP that is not assigned to a Server, you need to provide the `datacenter` key instead of `assignee_id`. This can be either the ID or the name of the Datacenter this Primary IP shall be created in.

Note that a Primary IP can only be assigned to a Server in the same Datacenter later on.

#### Call specific error codes

| Code                          | Description                                                   |
|------------------------------ |-------------------------------------------------------------- |
| `server_not_stopped`          | The specified server is running, but needs to be powered off  |
| `server_has_ipv4`             | The server already has an ipv4 address                        |
| `server_has_ipv6`             | The server already has an ipv6 address                        |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPrimaryIpsCreatePrimaryIPRequest;
import org.openapis.openapi.models.operations.PostPrimaryIpsCreatePrimaryIPRequestAssigneeTypeEnum;
import org.openapis.openapi.models.operations.PostPrimaryIpsCreatePrimaryIPRequestTypeEnum;
import org.openapis.openapi.models.operations.PostPrimaryIpsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPrimaryIpsCreatePrimaryIPRequest req = new PostPrimaryIpsCreatePrimaryIPRequest(PostPrimaryIpsCreatePrimaryIPRequestAssigneeTypeEnum.SERVER, "my-ip", PostPrimaryIpsCreatePrimaryIPRequestTypeEnum.IPV6) {{
                assigneeId = 17L;
                autoDelete = false;
                datacenter = "fsn1-dc8";
                labels = new java.util.HashMap<String, Object>() {{
                    put("deserunt", "provident");
                    put("minima", "repellendus");
                }};
            }};            

            PostPrimaryIpsResponse res = sdk.primaryIPs.postPrimaryIps(req);

            if (res.createPrimaryIPResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPrimaryIpsId

Updates the Primary IP.

Note that when updating labels, the Primary IP's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

If the Primary IP object changes during the request, the response will be a “conflict” error.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPrimaryIpsIdRequest;
import org.openapis.openapi.models.operations.PutPrimaryIpsIdResponse;
import org.openapis.openapi.models.operations.PutPrimaryIpsIdUpdatePrimaryIPRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutPrimaryIpsIdRequest req = new PutPrimaryIpsIdRequest(519711L) {{
                requestBody = new PutPrimaryIpsIdUpdatePrimaryIPRequest() {{
                    autoDelete = true;
                    labels = new java.util.HashMap<String, Object>() {{
                        put("alias", "at");
                        put("quaerat", "tempora");
                        put("vel", "quod");
                    }};
                    name = "my-ip";
                }};;
            }};            

            PutPrimaryIpsIdResponse res = sdk.primaryIPs.putPrimaryIpsId(req);

            if (res.primaryIPResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
