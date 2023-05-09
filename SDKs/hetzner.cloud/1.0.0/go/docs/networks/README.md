# Networks

## Overview

Networks is a private networks feature. These Networks are optional and they coexist with the public network that every Server has by default.

They allow Servers to talk to each other over a dedicated network interface using private IP addresses not available publicly.

The IP addresses are allocated and managed via the API, they must conform to [RFC1918](https://tools.ietf.org/html/rfc1918#section-3) standard. IPs and network interfaces defined under Networks do not provide public internet connectivity, you will need to use the already existing public network interface for that.

Each network has a user selected `ip_range` which defines all available IP addresses which can be used for Subnets within the Network.

To assign individual IPs to Servers you will need to create Network Subnets, described below.

Currently Networks support IPv4 only.

### Subnets
Subnets divide the `ip_range` from the parent Network object into multiple Subnetworks that you can use for different specific purposes.

For each subnet you need to specify its own `ip_range` which must be contained within the parent Network’s `ip_range`. Additionally each subnet must belong to one of the available Network Zones described below. Subnets can not have overlapping IP ranges.

Currently there are three types of subnet:
* type `cloud` is used to connect cloud Resources into your Network.
* type `server` was used to connect only cloud Servers into your Network. This type is deprecated and is replaced by type cloud.
* type `vswitch` allows you to connect [Dedicated Server vSwitch](https://docs.hetzner.com/robot/dedicated-server/network/vswitch) - and all Dedicated Servers attached to it - into your Network

Subnets of type `vswitch` must set a `vswitch_id` which is the ID of the existing vSwitch in Hetzner Robot that should be coupled.

### Network Zones
Network Zones are groups of Locations which have special high-speed network connections between them. The [Location object](https://docs.hetzner.cloud/#locations-get-a-location) contains the `network_zone` property each Location belongs to. Currently these network zones exist:

|Network Zone|Contains Locations|
|------------|------------------|
|eu-central  | nbg1, fsn1, hel1 |
|us-east     | ash              |

### IP address management
When a cloud Server is attached to a network without the user specifying an IP it automatically gets an IP address assigned from a subnet of type `server` in the same network zone. If you specify the optional `ip` parameter when attaching then we will try to assign that IP. Keep in mind that the Server’s location must be covered by the Subnet’s Network Zone if you specify an IP, or that at least one Subnet with the zone covering Server’s location must exist.

A cloud Server can also have more than one IP address in a Network by specifying aliases. For details see the [attach to network action](https://docs.hetzner.cloud/#server-actions-attach-a-server-to-a-network).

The following IP addresses are reserved in networks and can not be used:
  * the first IP of the network `ip_range` as it will be used as a default gateway for the private Network interface.
  * `172.31.1.1` as it is being used as default gateway for our public Network interfaces.

### Coupling Dedicated Servers

By using subnets of type `vswitch` you can couple the Cloud Networks with an existing [Dedicated Server vSwitch](https://docs.hetzner.com/robot/dedicated-server/network/vswitch) and enable dedicated and cloud servers to
talk to each other over the Network.
In order for this to work the dedicated servers may only use IPs from the subnet and must have a special network configuration. Please refer to [FAQ](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch). vSwitch Layer 2 features are not supported.

### Routes
Networks also support the notion of routes which are automatically applied to private traffic. A route makes sure that all packets for a given `destination` IP prefix will be sent to the address specified in its `gateway`.


### Available Operations

* [DeleteNetworksID](#deletenetworksid) - Delete a Network
* [GetNetworks](#getnetworks) - Get all Networks
* [GetNetworksID](#getnetworksid) - Get a Network
* [PostNetworks](#postnetworks) - Create a Network
* [PutNetworksID](#putnetworksid) - Update a Network

## DeleteNetworksID

Deletes a network. If there are Servers attached they will be detached in the background.

Note: if the network object changes during the request, the response will be a “conflict” error.


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
    res, err := s.Networks.DeleteNetworksID(ctx, operations.DeleteNetworksIDRequest{
        ID: 714242,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworks

Gets all existing networks that you have available.

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
    res, err := s.Networks.GetNetworks(ctx, operations.GetNetworksRequest{
        LabelSelector: sdk.String("nihil"),
        Name: sdk.String("Marty Cormier"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworks200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworksID

Gets a specific network object.

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
    res, err := s.Networks.GetNetworksID(ctx, operations.GetNetworksIDRequest{
        ID: 37559,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworksID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostNetworks

Creates a network with the specified `ip_range`.

You may specify one or more `subnets`. You can also add more Subnets later by using the [add subnet action](https://docs.hetzner.cloud/#network-actions-add-a-subnet-to-a-network). If you do not specify an `ip_range` in the subnet we will automatically pick the first available /24 range for you.

You may specify one or more routes in `routes`. You can also add more routes later by using the [add route action](https://docs.hetzner.cloud/#network-actions-add-a-route-to-a-network).


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
    res, err := s.Networks.PostNetworks(ctx, operations.PostNetworksCreateNetworkRequest{
        IPRange: "10.0.0.0/16",
        Labels: &operations.PostNetworksCreateNetworkRequestLabels{
            Labelkey: sdk.String("value"),
        },
        Name: "mynet",
        Routes: []PostNetworksCreateNetworkRequestRoutes{
            operations.PostNetworksCreateNetworkRequestRoutes{
                Destination: "10.100.1.0/24",
                Gateway: "10.0.1.1",
            },
        },
        Subnets: []PostNetworksCreateNetworkRequestSubnets{
            operations.PostNetworksCreateNetworkRequestSubnets{
                IPRange: sdk.String("10.0.1.0/24"),
                NetworkZone: "eu-central",
                Type: operations.PostNetworksCreateNetworkRequestSubnetsTypeEnumServer,
                VswitchID: sdk.Int64(1000),
            },
            operations.PostNetworksCreateNetworkRequestSubnets{
                IPRange: sdk.String("10.0.1.0/24"),
                NetworkZone: "eu-central",
                Type: operations.PostNetworksCreateNetworkRequestSubnetsTypeEnumCloud,
                VswitchID: sdk.Int64(1000),
            },
            operations.PostNetworksCreateNetworkRequestSubnets{
                IPRange: sdk.String("10.0.1.0/24"),
                NetworkZone: "eu-central",
                Type: operations.PostNetworksCreateNetworkRequestSubnetsTypeEnumCloud,
                VswitchID: sdk.Int64(1000),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostNetworks201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PutNetworksID

Updates the network properties.

Note that when updating labels, the network’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the network object changes during the request, the response will be a “conflict” error.


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
    res, err := s.Networks.PutNetworksID(ctx, operations.PutNetworksIDRequest{
        RequestBody: &operations.PutNetworksIDUpdateNetworkRequest{
            Labels: &operations.PutNetworksIDUpdateNetworkRequestLabels{
                Labelkey: sdk.String("value"),
            },
            Name: sdk.String("new-name"),
        },
        ID: 779051,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutNetworksID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
