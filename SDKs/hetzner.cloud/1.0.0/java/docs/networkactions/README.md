# networkActions

### Available Operations

* [getNetworksIdActions](#getnetworksidactions) - Get all Actions for a Network
* [getNetworksIdActionsActionId](#getnetworksidactionsactionid) - Get an Action for a Network
* [postNetworksIdActionsAddRoute](#postnetworksidactionsaddroute) - Add a route to a Network
* [postNetworksIdActionsAddSubnet](#postnetworksidactionsaddsubnet) - Add a subnet to a Network
* [postNetworksIdActionsChangeIpRange](#postnetworksidactionschangeiprange) - Change IP range of a Network
* [postNetworksIdActionsChangeProtection](#postnetworksidactionschangeprotection) - Change Network Protection
* [postNetworksIdActionsDeleteRoute](#postnetworksidactionsdeleteroute) - Delete a route from a Network
* [postNetworksIdActionsDeleteSubnet](#postnetworksidactionsdeletesubnet) - Delete a subnet from a Network

## getNetworksIdActions

Returns all Action objects for a Network. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworksIdActionsRequest;
import org.openapis.openapi.models.operations.GetNetworksIdActionsResponse;
import org.openapis.openapi.models.operations.GetNetworksIdActionsSortParameterSortEnum;
import org.openapis.openapi.models.operations.GetNetworksIdActionsStatusParameterStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNetworksIdActionsRequest req = new GetNetworksIdActionsRequest(267262L) {{
                sort = GetNetworksIdActionsSortParameterSortEnum.PROGRESS_DESC;
                status = GetNetworksIdActionsStatusParameterStatusEnum.ERROR;
            }};            

            GetNetworksIdActionsResponse res = sdk.networkActions.getNetworksIdActions(req);

            if (res.actionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworksIdActionsActionId

Returns a specific Action for a Network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworksIdActionsActionIdRequest;
import org.openapis.openapi.models.operations.GetNetworksIdActionsActionIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNetworksIdActionsActionIdRequest req = new GetNetworksIdActionsActionIdRequest(535633L, 864282L);            

            GetNetworksIdActionsActionIdResponse res = sdk.networkActions.getNetworksIdActionsActionId(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNetworksIdActionsAddRoute

Adds a route entry to a Network.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNetworksIdActionsAddRouteAddDeleteRouteRequest;
import org.openapis.openapi.models.operations.PostNetworksIdActionsAddRouteRequest;
import org.openapis.openapi.models.operations.PostNetworksIdActionsAddRouteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNetworksIdActionsAddRouteRequest req = new PostNetworksIdActionsAddRouteRequest(589910L) {{
                requestBody = new PostNetworksIdActionsAddRouteAddDeleteRouteRequest("10.100.1.0/24", "10.0.1.1");;
            }};            

            PostNetworksIdActionsAddRouteResponse res = sdk.networkActions.postNetworksIdActionsAddRoute(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNetworksIdActionsAddSubnet

Adds a new subnet object to the Network. If you do not specify an `ip_range` for the subnet we will automatically pick the first available /24 range for you if possible.

Note: if the parent Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNetworksIdActionsAddSubnetAddSubnetRequest;
import org.openapis.openapi.models.operations.PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum;
import org.openapis.openapi.models.operations.PostNetworksIdActionsAddSubnetRequest;
import org.openapis.openapi.models.operations.PostNetworksIdActionsAddSubnetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNetworksIdActionsAddSubnetRequest req = new PostNetworksIdActionsAddSubnetRequest(750844L) {{
                requestBody = new PostNetworksIdActionsAddSubnetAddSubnetRequest("eu-central", PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum.VSWITCH) {{
                    ipRange = "10.0.1.0/24";
                    vswitchId = 1000L;
                }};;
            }};            

            PostNetworksIdActionsAddSubnetResponse res = sdk.networkActions.postNetworksIdActionsAddSubnet(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNetworksIdActionsChangeIpRange

Changes the IP range of a Network. IP ranges can only be extended and never shrunk. You can only add IPs at the end of an existing IP range. This means that the IP part of your existing range must stay the same and you can only change its netmask.

For example if you have a range `10.0.0.0/16` you want to extend then your new range must also start with the IP `10.0.0.0`. Your CIDR netmask `/16` may change to a number that is smaller than `16` thereby increasing the IP range. So valid entries would be `10.0.0.0/15`, `10.0.0.0/14`, `10.0.0.0/13` and so on.

After changing the IP range you will have to adjust the routes on your connected Servers by either rebooting them or manually changing the routes to your private Network interface.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNetworksIdActionsChangeIPRangeChangeIPRangeRequest;
import org.openapis.openapi.models.operations.PostNetworksIdActionsChangeIpRangeRequest;
import org.openapis.openapi.models.operations.PostNetworksIdActionsChangeIpRangeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNetworksIdActionsChangeIpRangeRequest req = new PostNetworksIdActionsChangeIpRangeRequest(964490L) {{
                requestBody = new PostNetworksIdActionsChangeIPRangeChangeIPRangeRequest("10.0.0.0/12");;
            }};            

            PostNetworksIdActionsChangeIpRangeResponse res = sdk.networkActions.postNetworksIdActionsChangeIpRange(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNetworksIdActionsChangeProtection

Changes the protection configuration of a Network.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNetworksIdActionsChangeProtectionChangeProtectionRequest;
import org.openapis.openapi.models.operations.PostNetworksIdActionsChangeProtectionRequest;
import org.openapis.openapi.models.operations.PostNetworksIdActionsChangeProtectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNetworksIdActionsChangeProtectionRequest req = new PostNetworksIdActionsChangeProtectionRequest(311945L) {{
                requestBody = new PostNetworksIdActionsChangeProtectionChangeProtectionRequest() {{
                    delete = true;
                }};;
            }};            

            PostNetworksIdActionsChangeProtectionResponse res = sdk.networkActions.postNetworksIdActionsChangeProtection(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNetworksIdActionsDeleteRoute

Delete a route entry from a Network.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest;
import org.openapis.openapi.models.operations.PostNetworksIdActionsDeleteRouteRequest;
import org.openapis.openapi.models.operations.PostNetworksIdActionsDeleteRouteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNetworksIdActionsDeleteRouteRequest req = new PostNetworksIdActionsDeleteRouteRequest(554242L) {{
                requestBody = new PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest("10.100.1.0/24", "10.0.1.1");;
            }};            

            PostNetworksIdActionsDeleteRouteResponse res = sdk.networkActions.postNetworksIdActionsDeleteRoute(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNetworksIdActionsDeleteSubnet

Deletes a single subnet entry from a Network. You cannot delete subnets which still have Servers attached. If you have Servers attached you first need to detach all Servers that use IPs from this subnet before you can delete the subnet.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest;
import org.openapis.openapi.models.operations.PostNetworksIdActionsDeleteSubnetRequest;
import org.openapis.openapi.models.operations.PostNetworksIdActionsDeleteSubnetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNetworksIdActionsDeleteSubnetRequest req = new PostNetworksIdActionsDeleteSubnetRequest(398221L) {{
                requestBody = new PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest("10.0.1.0/24");;
            }};            

            PostNetworksIdActionsDeleteSubnetResponse res = sdk.networkActions.postNetworksIdActionsDeleteSubnet(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
