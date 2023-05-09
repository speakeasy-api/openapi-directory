# FloatingIPs

## Overview

Floating IPs help you to create highly available setups. You can assign a Floating IP to any Server. The Server can then use this IP. You can reassign it to a different Server at any time, or you can choose to unassign the IP from Servers all together.

Floating IPs can be used globally. This means you can assign a Floating IP to a Server in one Location and later reassign it to a Server in a different Location. For optimal routing and latency Floating IPs should be used in the Location they were created in.

For Floating IPs to work with your Server, you must configure them inside your operation system.

Floating IPs of type `ipv4` use a single IPv4 address as their `ip` property. Floating IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.

Floating IPs are billed on a monthly basis.


### Available Operations

* [DeleteFloatingIpsID](#deletefloatingipsid) - Delete a Floating IP
* [GetFloatingIps](#getfloatingips) - Get all Floating IPs
* [GetFloatingIpsID](#getfloatingipsid) - Get a Floating IP
* [PostFloatingIps](#postfloatingips) - Create a Floating IP
* [PutFloatingIpsID](#putfloatingipsid) - Update a Floating IP

## DeleteFloatingIpsID

Deletes a Floating IP. If it is currently assigned to a Server it will automatically get unassigned.

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
    res, err := s.FloatingIPs.DeleteFloatingIpsID(ctx, operations.DeleteFloatingIpsIDRequest{
        ID: 368725,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFloatingIps

Returns all Floating IP objects.

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
    res, err := s.FloatingIPs.GetFloatingIps(ctx, operations.GetFloatingIpsRequest{
        LabelSelector: sdk.String("id"),
        Name: sdk.String("Richard Boyer"),
        Sort: operations.GetFloatingIpsSortEnumCreatedAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFloatingIps200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetFloatingIpsID

Returns a specific Floating IP object.

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
    res, err := s.FloatingIPs.GetFloatingIpsID(ctx, operations.GetFloatingIpsIDRequest{
        ID: 96098,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFloatingIpsID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostFloatingIps

Creates a new Floating IP assigned to a Server. If you want to create a Floating IP that is not bound to a Server, you need to provide the `home_location` key instead of `server`. This can be either the ID or the name of the Location this IP shall be created in. Note that a Floating IP can be assigned to a Server in any Location later on. For optimal routing it is advised to use the Floating IP in the same Location it was created in.

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
    res, err := s.FloatingIPs.PostFloatingIps(ctx, operations.PostFloatingIpsCreateFloatingIPRequest{
        Description: sdk.String("Web Frontend"),
        HomeLocation: sdk.String("fsn1"),
        Labels: map[string]interface{}{
            "voluptatibus": "vero",
            "nihil": "praesentium",
            "voluptatibus": "ipsa",
            "omnis": "voluptate",
        },
        Name: sdk.String("Web Frontend"),
        Server: sdk.Int64(42),
        Type: operations.PostFloatingIpsCreateFloatingIPRequestTypeEnumIpv6,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostFloatingIps201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PutFloatingIpsID

Updates the description or labels of a Floating IP.
Also note that when updating labels, the Floating IP’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

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
    res, err := s.FloatingIPs.PutFloatingIpsID(ctx, operations.PutFloatingIpsIDRequest{
        RequestBody: &operations.PutFloatingIpsIDUpdateFloatingIPRequest{
            Description: sdk.String("Web Frontend"),
            Labels: map[string]interface{}{
                "doloremque": "reprehenderit",
            },
            Name: sdk.String("Web Frontend"),
        },
        ID: 282807,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutFloatingIpsID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
