# primaryIPActions

### Available Operations

* [postPrimaryIpsIdActionsAssign](#postprimaryipsidactionsassign) - Assign a Primary IP to a resource
* [postPrimaryIpsIdActionsChangeDnsPtr](#postprimaryipsidactionschangednsptr) - Change reverse DNS entry for a Primary IP
* [postPrimaryIpsIdActionsChangeProtection](#postprimaryipsidactionschangeprotection) - Change Primary IP Protection
* [postPrimaryIpsIdActionsUnassign](#postprimaryipsidactionsunassign) - Unassign a Primary IP from a resource

## postPrimaryIpsIdActionsAssign

Assigns a Primary IP to a Server.

A Server can only have one Primary IP of type `ipv4` and one of type `ipv6` assigned. If you need more IPs use Floating IPs.

The Server must be powered off (status `off`) in order for this operation to succeed.

#### Call specific error codes

| Code                          | Description                                                   |
|------------------------------ |-------------------------------------------------------------- |
| `server_not_stopped`          | The server is running, but needs to be powered off            |
| `primary_ip_already_assigned` | Primary ip is already assigned to a different server          |
| `server_has_ipv4`             | The server already has an ipv4 address                        |
| `server_has_ipv6`             | The server already has an ipv6 address                        |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPrimaryIpsIdActionsAssignAssignPrimaryIPRequest;
import org.openapis.openapi.models.operations.PostPrimaryIpsIdActionsAssignAssignPrimaryIPRequestAssigneeTypeEnum;
import org.openapis.openapi.models.operations.PostPrimaryIpsIdActionsAssignRequest;
import org.openapis.openapi.models.operations.PostPrimaryIpsIdActionsAssignResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPrimaryIpsIdActionsAssignRequest req = new PostPrimaryIpsIdActionsAssignRequest(896672L) {{
                requestBody = new PostPrimaryIpsIdActionsAssignAssignPrimaryIPRequest(4711L, PostPrimaryIpsIdActionsAssignAssignPrimaryIPRequestAssigneeTypeEnum.SERVER);;
            }};            

            PostPrimaryIpsIdActionsAssignResponse res = sdk.primaryIPActions.postPrimaryIpsIdActionsAssign(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPrimaryIpsIdActionsChangeDnsPtr

Changes the hostname that will appear when getting the hostname belonging to this Primary IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPrimaryIpsIdActionsChangeDnsPtrChangeDNSPTRRequest;
import org.openapis.openapi.models.operations.PostPrimaryIpsIdActionsChangeDnsPtrRequest;
import org.openapis.openapi.models.operations.PostPrimaryIpsIdActionsChangeDnsPtrResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPrimaryIpsIdActionsChangeDnsPtrRequest req = new PostPrimaryIpsIdActionsChangeDnsPtrRequest(714697L) {{
                requestBody = new PostPrimaryIpsIdActionsChangeDnsPtrChangeDNSPTRRequest("server02.example.com", "1.2.3.4");;
            }};            

            PostPrimaryIpsIdActionsChangeDnsPtrResponse res = sdk.primaryIPActions.postPrimaryIpsIdActionsChangeDnsPtr(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPrimaryIpsIdActionsChangeProtection

Changes the protection configuration of a Primary IP.

A Primary IP can only be delete protected if its `auto_delete` property is set to `false`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPrimaryIpsIdActionsChangeProtectionChangeProtectionRequest;
import org.openapis.openapi.models.operations.PostPrimaryIpsIdActionsChangeProtectionRequest;
import org.openapis.openapi.models.operations.PostPrimaryIpsIdActionsChangeProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPrimaryIpsIdActionsChangeProtectionRequest req = new PostPrimaryIpsIdActionsChangeProtectionRequest(990339L) {{
                requestBody = new PostPrimaryIpsIdActionsChangeProtectionChangeProtectionRequest() {{
                    delete = true;
                }};;
            }};            

            PostPrimaryIpsIdActionsChangeProtectionResponse res = sdk.primaryIPActions.postPrimaryIpsIdActionsChangeProtection(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPrimaryIpsIdActionsUnassign

Unassigns a Primary IP from a Server.

The Server must be powered off (status `off`) in order for this operation to succeed.

Note that only Servers that have at least one network interface (public or private) attached can be powered on.

#### Call specific error codes

| Code                              | Description                                                   |
|---------------------------------- |-------------------------------------------------------------- |
| `server_not_stopped`              | The server is running, but needs to be powered off            |
| `server_is_load_balancer_target`  | The server ipv4 address is a loadbalancer target              |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPrimaryIpsIdActionsUnassignRequest;
import org.openapis.openapi.models.operations.PostPrimaryIpsIdActionsUnassignResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPrimaryIpsIdActionsUnassignRequest req = new PostPrimaryIpsIdActionsUnassignRequest(469497L);            

            PostPrimaryIpsIdActionsUnassignResponse res = sdk.primaryIPActions.postPrimaryIpsIdActionsUnassign(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
