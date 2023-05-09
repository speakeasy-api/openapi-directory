# loadBalancerActions

### Available Operations

* [getLoadBalancersIdActions](#getloadbalancersidactions) - Get all Actions for a Load Balancer
* [getLoadBalancersIdActionsActionId](#getloadbalancersidactionsactionid) - Get an Action for a Load Balancer
* [postLoadBalancersIdActionsAddService](#postloadbalancersidactionsaddservice) - Add Service
* [postLoadBalancersIdActionsAddTarget](#postloadbalancersidactionsaddtarget) - Add Target
* [postLoadBalancersIdActionsAttachToNetwork](#postloadbalancersidactionsattachtonetwork) - Attach a Load Balancer to a Network
* [postLoadBalancersIdActionsChangeAlgorithm](#postloadbalancersidactionschangealgorithm) - Change Algorithm
* [postLoadBalancersIdActionsChangeDnsPtr](#postloadbalancersidactionschangednsptr) - Change reverse DNS entry for this Load Balancer
* [postLoadBalancersIdActionsChangeProtection](#postloadbalancersidactionschangeprotection) - Change Load Balancer Protection
* [postLoadBalancersIdActionsChangeType](#postloadbalancersidactionschangetype) - Change the Type of a Load Balancer
* [postLoadBalancersIdActionsDeleteService](#postloadbalancersidactionsdeleteservice) - Delete Service
* [postLoadBalancersIdActionsDetachFromNetwork](#postloadbalancersidactionsdetachfromnetwork) - Detach a Load Balancer from a Network
* [postLoadBalancersIdActionsDisablePublicInterface](#postloadbalancersidactionsdisablepublicinterface) - Disable the public interface of a Load Balancer
* [postLoadBalancersIdActionsEnablePublicInterface](#postloadbalancersidactionsenablepublicinterface) - Enable the public interface of a Load Balancer
* [postLoadBalancersIdActionsRemoveTarget](#postloadbalancersidactionsremovetarget) - Remove Target
* [postLoadBalancersIdActionsUpdateService](#postloadbalancersidactionsupdateservice) - Update Service

## getLoadBalancersIdActions

Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoadBalancersIdActionsRequest;
import org.openapis.openapi.models.operations.GetLoadBalancersIdActionsResponse;
import org.openapis.openapi.models.operations.GetLoadBalancersIdActionsSortParameterSortEnum;
import org.openapis.openapi.models.operations.GetLoadBalancersIdActionsStatusParameterStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLoadBalancersIdActionsRequest req = new GetLoadBalancersIdActionsRequest(290077L) {{
                sort = GetLoadBalancersIdActionsSortParameterSortEnum.STATUS;
                status = GetLoadBalancersIdActionsStatusParameterStatusEnum.SUCCESS;
            }};            

            GetLoadBalancersIdActionsResponse res = sdk.loadBalancerActions.getLoadBalancersIdActions(req);

            if (res.actionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoadBalancersIdActionsActionId

Returns a specific Action for a Load Balancer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoadBalancersIdActionsActionIdRequest;
import org.openapis.openapi.models.operations.GetLoadBalancersIdActionsActionIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLoadBalancersIdActionsActionIdRequest req = new GetLoadBalancersIdActionsActionIdRequest(749170L, 428769L);            

            GetLoadBalancersIdActionsActionIdResponse res = sdk.loadBalancerActions.getLoadBalancersIdActionsActionId(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancersIdActionsAddService

Adds a service to a Load Balancer.

#### Call specific error codes

| Code                       | Description                                             |
|----------------------------|---------------------------------------------------------|
| `source_port_already_used` | The source port you are trying to add is already in use |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddServiceLoadBalancerService;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHTTP;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddServiceRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddServiceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersIdActionsAddServiceRequest req = new PostLoadBalancersIdActionsAddServiceRequest(878453L) {{
                requestBody = new PostLoadBalancersIdActionsAddServiceLoadBalancerService(80L,                 new PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck(15L, 4711L, PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum.HTTP, 3L, 10L) {{
                                    http = new PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp("example.com", "/") {{
                                        response = "{"status": "ok"}";
                                        statusCodes = new String[]{{
                                            add("architecto"),
                                        }};
                                        tls = false;
                                    }};;
                                }};, 443L, PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum.HTTPS, false) {{
                    http = new PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHTTP() {{
                        certificates = new Long[]{{
                            add(92373L),
                            add(569965L),
                        }};
                        cookieLifetime = 300L;
                        cookieName = "HCLBSTICKY";
                        redirectHttp = true;
                        stickySessions = true;
                    }};;
                }};;
            }};            

            PostLoadBalancersIdActionsAddServiceResponse res = sdk.loadBalancerActions.postLoadBalancersIdActionsAddService(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancersIdActionsAddTarget

Adds a target to a Load Balancer.

#### Call specific error codes

| Code                                    | Description                                                                                           |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------|
| `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
| `ip_not_owned`                          | The IP you are trying to add as a target is not owned by the Project owner                            |
| `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
| `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
| `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
| `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddTargetAddTargetRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddTargetAddTargetRequestLoadBalancerTargetIP;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddTargetAddTargetRequestServer;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddTargetRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAddTargetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersIdActionsAddTargetRequest req = new PostLoadBalancersIdActionsAddTargetRequest(354047L) {{
                requestBody = new PostLoadBalancersIdActionsAddTargetAddTargetRequest(PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum.LABEL_SELECTOR) {{
                    ip = new PostLoadBalancersIdActionsAddTargetAddTargetRequestLoadBalancerTargetIP("203.0.113.1");;
                    labelSelector = new PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector("env=prod");;
                    server = new PostLoadBalancersIdActionsAddTargetAddTargetRequestServer(80);;
                    usePrivateIp = true;
                }};;
            }};            

            PostLoadBalancersIdActionsAddTargetResponse res = sdk.loadBalancerActions.postLoadBalancersIdActionsAddTarget(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancersIdActionsAttachToNetwork

Attach a Load Balancer to a Network.

**Call specific error codes**

| Code                             | Description                                                           |
|----------------------------------|-----------------------------------------------------------------------|
| `load_balancer_already_attached` | The Load Balancer is already attached to a network                    |
| `ip_not_available`               | The provided Network IP is not available                              |
| `no_subnet_available`            | No Subnet or IP is available for the Load Balancer within the network |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAttachToNetworkRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAttachToNetworkRequestBody;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsAttachToNetworkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersIdActionsAttachToNetworkRequest req = new PostLoadBalancersIdActionsAttachToNetworkRequest(551816L) {{
                requestBody = new PostLoadBalancersIdActionsAttachToNetworkRequestBody(4711) {{
                    ip = "10.0.1.1";
                }};;
            }};            

            PostLoadBalancersIdActionsAttachToNetworkResponse res = sdk.loadBalancerActions.postLoadBalancersIdActionsAttachToNetwork(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancersIdActionsChangeAlgorithm

Change the algorithm that determines to which target new requests are sent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsChangeAlgorithmRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsChangeAlgorithmRequestBody;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsChangeAlgorithmResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersIdActionsChangeAlgorithmRequest req = new PostLoadBalancersIdActionsChangeAlgorithmRequest(574325L) {{
                requestBody = new PostLoadBalancersIdActionsChangeAlgorithmRequestBody(PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum.ROUND_ROBIN);;
            }};            

            PostLoadBalancersIdActionsChangeAlgorithmResponse res = sdk.loadBalancerActions.postLoadBalancersIdActionsChangeAlgorithm(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancersIdActionsChangeDnsPtr

Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.

Floating IPs assigned to the Server are not affected by this.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsChangeDnsPtrRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsChangeDnsPtrResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersIdActionsChangeDnsPtrRequest req = new PostLoadBalancersIdActionsChangeDnsPtrRequest(653201L) {{
                requestBody = new PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest("lb1.example.com", "1.2.3.4");;
            }};            

            PostLoadBalancersIdActionsChangeDnsPtrResponse res = sdk.loadBalancerActions.postLoadBalancersIdActionsChangeDnsPtr(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancersIdActionsChangeProtection

Changes the protection configuration of a Load Balancer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsChangeProtectionRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsChangeProtectionRequestBody;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsChangeProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersIdActionsChangeProtectionRequest req = new PostLoadBalancersIdActionsChangeProtectionRequest(968962L) {{
                requestBody = new PostLoadBalancersIdActionsChangeProtectionRequestBody() {{
                    delete = true;
                }};;
            }};            

            PostLoadBalancersIdActionsChangeProtectionResponse res = sdk.loadBalancerActions.postLoadBalancersIdActionsChangeProtection(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancersIdActionsChangeType

Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.

**Call specific error codes**

| Code                         | Description                                                     |
|------------------------------|-----------------------------------------------------------------|
| `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsChangeTypeChangeTypeRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsChangeTypeRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsChangeTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersIdActionsChangeTypeRequest req = new PostLoadBalancersIdActionsChangeTypeRequest(652103L) {{
                requestBody = new PostLoadBalancersIdActionsChangeTypeChangeTypeRequest("lb21");;
            }};            

            PostLoadBalancersIdActionsChangeTypeResponse res = sdk.loadBalancerActions.postLoadBalancersIdActionsChangeType(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancersIdActionsDeleteService

Delete a service of a Load Balancer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsDeleteServiceRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsDeleteServiceRequestBody;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsDeleteServiceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersIdActionsDeleteServiceRequest req = new PostLoadBalancersIdActionsDeleteServiceRequest(320997L) {{
                requestBody = new PostLoadBalancersIdActionsDeleteServiceRequestBody(4711);;
            }};            

            PostLoadBalancersIdActionsDeleteServiceResponse res = sdk.loadBalancerActions.postLoadBalancersIdActionsDeleteService(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancersIdActionsDetachFromNetwork

Detaches a Load Balancer from a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsDetachFromNetworkRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsDetachFromNetworkRequestBody;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsDetachFromNetworkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersIdActionsDetachFromNetworkRequest req = new PostLoadBalancersIdActionsDetachFromNetworkRequest(431418L) {{
                requestBody = new PostLoadBalancersIdActionsDetachFromNetworkRequestBody(4711);;
            }};            

            PostLoadBalancersIdActionsDetachFromNetworkResponse res = sdk.loadBalancerActions.postLoadBalancersIdActionsDetachFromNetwork(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancersIdActionsDisablePublicInterface

Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.

#### Call specific error codes

| Code                                      | Description                                                                    |
|-------------------------------------------|--------------------------------------------------------------------------------|
| `load_balancer_not_attached_to_network`   |  The Load Balancer is not attached to a network                                |
| `targets_without_use_private_ip`          | The Load Balancer has targets that use the public IP instead of the private IP |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsDisablePublicInterfaceRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsDisablePublicInterfaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersIdActionsDisablePublicInterfaceRequest req = new PostLoadBalancersIdActionsDisablePublicInterfaceRequest(221262L);            

            PostLoadBalancersIdActionsDisablePublicInterfaceResponse res = sdk.loadBalancerActions.postLoadBalancersIdActionsDisablePublicInterface(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancersIdActionsEnablePublicInterface

Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsEnablePublicInterfaceRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsEnablePublicInterfaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersIdActionsEnablePublicInterfaceRequest req = new PostLoadBalancersIdActionsEnablePublicInterfaceRequest(896547L);            

            PostLoadBalancersIdActionsEnablePublicInterfaceResponse res = sdk.loadBalancerActions.postLoadBalancersIdActionsEnablePublicInterface(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancersIdActionsRemoveTarget

Removes a target from a Load Balancer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLoadBalancerTargetIP;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsRemoveTargetRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsRemoveTargetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersIdActionsRemoveTargetRequest req = new PostLoadBalancersIdActionsRemoveTargetRequest(141264L) {{
                requestBody = new PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest(PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum.LABEL_SELECTOR) {{
                    ip = new PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLoadBalancerTargetIP("203.0.113.1");;
                    labelSelector = new PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector("env=prod");;
                    server = new PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer(80);;
                }};;
            }};            

            PostLoadBalancersIdActionsRemoveTargetResponse res = sdk.loadBalancerActions.postLoadBalancersIdActionsRemoveTarget(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoadBalancersIdActionsUpdateService

Updates a Load Balancer Service.

#### Call specific error codes

| Code                       | Description                                             |
|----------------------------|---------------------------------------------------------|
| `source_port_already_used` | The source port you are trying to add is already in use |


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsUpdateServiceLoadBalancerService;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHTTP;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsUpdateServiceRequest;
import org.openapis.openapi.models.operations.PostLoadBalancersIdActionsUpdateServiceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLoadBalancersIdActionsUpdateServiceRequest req = new PostLoadBalancersIdActionsUpdateServiceRequest(97260L) {{
                requestBody = new PostLoadBalancersIdActionsUpdateServiceLoadBalancerService(80L,                 new PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck(15L, 4711L, PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum.HTTP, 3L, 10L) {{
                                    http = new PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp("example.com", "/") {{
                                        response = "{"status": "ok"}";
                                        statusCodes = new String[]{{
                                            add("doloribus"),
                                            add("debitis"),
                                        }};
                                        tls = false;
                                    }};;
                                }};, 443L, PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum.HTTPS, false) {{
                    http = new PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHTTP() {{
                        certificates = new Long[]{{
                            add(806194L),
                            add(537023L),
                        }};
                        cookieLifetime = 300L;
                        cookieName = "HCLBSTICKY";
                        redirectHttp = true;
                        stickySessions = true;
                    }};;
                }};;
            }};            

            PostLoadBalancersIdActionsUpdateServiceResponse res = sdk.loadBalancerActions.postLoadBalancersIdActionsUpdateService(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
