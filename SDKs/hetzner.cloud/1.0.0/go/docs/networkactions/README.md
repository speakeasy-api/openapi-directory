# NetworkActions

### Available Operations

* [GetNetworksIDActions](#getnetworksidactions) - Get all Actions for a Network
* [GetNetworksIDActionsActionID](#getnetworksidactionsactionid) - Get an Action for a Network
* [PostNetworksIDActionsAddRoute](#postnetworksidactionsaddroute) - Add a route to a Network
* [PostNetworksIDActionsAddSubnet](#postnetworksidactionsaddsubnet) - Add a subnet to a Network
* [PostNetworksIDActionsChangeIPRange](#postnetworksidactionschangeiprange) - Change IP range of a Network
* [PostNetworksIDActionsChangeProtection](#postnetworksidactionschangeprotection) - Change Network Protection
* [PostNetworksIDActionsDeleteRoute](#postnetworksidactionsdeleteroute) - Delete a route from a Network
* [PostNetworksIDActionsDeleteSubnet](#postnetworksidactionsdeletesubnet) - Delete a subnet from a Network

## GetNetworksIDActions

Returns all Action objects for a Network. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.NetworkActions.GetNetworksIDActions(ctx, operations.GetNetworksIDActionsRequest{
        ID: 435865,
        Sort: operations.GetNetworksIDActionsSortParameterSortEnumFinishedDesc.ToPointer(),
        Status: operations.GetNetworksIDActionsStatusParameterStatusEnumError.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
}
```

## GetNetworksIDActionsActionID

Returns a specific Action for a Network.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.NetworkActions.GetNetworksIDActionsActionID(ctx, operations.GetNetworksIDActionsActionIDRequest{
        ActionID: 260341,
        ID: 806194,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostNetworksIDActionsAddRoute

Adds a route entry to a Network.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.NetworkActions.PostNetworksIDActionsAddRoute(ctx, operations.PostNetworksIDActionsAddRouteRequest{
        RequestBody: &operations.PostNetworksIDActionsAddRouteAddDeleteRouteRequest{
            Destination: "10.100.1.0/24",
            Gateway: "10.0.1.1",
        },
        ID: 537023,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostNetworksIDActionsAddSubnet

Adds a new subnet object to the Network. If you do not specify an `ip_range` for the subnet we will automatically pick the first available /24 range for you if possible.

Note: if the parent Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.NetworkActions.PostNetworksIDActionsAddSubnet(ctx, operations.PostNetworksIDActionsAddSubnetRequest{
        RequestBody: &operations.PostNetworksIDActionsAddSubnetAddSubnetRequest{
            IPRange: sdk.String("10.0.1.0/24"),
            NetworkZone: "eu-central",
            Type: operations.PostNetworksIDActionsAddSubnetAddSubnetRequestTypeEnumVswitch,
            VswitchID: sdk.Int64(1000),
        },
        ID: 447926,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostNetworksIDActionsChangeIPRange

Changes the IP range of a Network. IP ranges can only be extended and never shrunk. You can only add IPs at the end of an existing IP range. This means that the IP part of your existing range must stay the same and you can only change its netmask.

For example if you have a range `10.0.0.0/16` you want to extend then your new range must also start with the IP `10.0.0.0`. Your CIDR netmask `/16` may change to a number that is smaller than `16` thereby increasing the IP range. So valid entries would be `10.0.0.0/15`, `10.0.0.0/14`, `10.0.0.0/13` and so on.

After changing the IP range you will have to adjust the routes on your connected Servers by either rebooting them or manually changing the routes to your private Network interface.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.NetworkActions.PostNetworksIDActionsChangeIPRange(ctx, operations.PostNetworksIDActionsChangeIPRangeRequest{
        RequestBody: &operations.PostNetworksIDActionsChangeIPRangeChangeIPRangeRequest{
            IPRange: "10.0.0.0/12",
        },
        ID: 100226,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostNetworksIDActionsChangeProtection

Changes the protection configuration of a Network.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.NetworkActions.PostNetworksIDActionsChangeProtection(ctx, operations.PostNetworksIDActionsChangeProtectionRequest{
        RequestBody: &operations.PostNetworksIDActionsChangeProtectionChangeProtectionRequest{
            Delete: sdk.Bool(true),
        },
        ID: 99569,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostNetworksIDActionsDeleteRoute

Delete a route entry from a Network.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.NetworkActions.PostNetworksIDActionsDeleteRoute(ctx, operations.PostNetworksIDActionsDeleteRouteRequest{
        RequestBody: &operations.PostNetworksIDActionsDeleteRouteAddDeleteRouteRequest{
            Destination: "10.100.1.0/24",
            Gateway: "10.0.1.1",
        },
        ID: 919483,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostNetworksIDActionsDeleteSubnet

Deletes a single subnet entry from a Network. You cannot delete subnets which still have Servers attached. If you have Servers attached you first need to detach all Servers that use IPs from this subnet before you can delete the subnet.

Note: if the Network object changes during the request, the response will be a “conflict” error.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.NetworkActions.PostNetworksIDActionsDeleteSubnet(ctx, operations.PostNetworksIDActionsDeleteSubnetRequest{
        RequestBody: &operations.PostNetworksIDActionsDeleteSubnetDeleteSubnetRequest{
            IPRange: "10.0.1.0/24",
        },
        ID: 352312,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```
