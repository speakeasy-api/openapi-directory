# PrimaryIPs

## Overview

Primary IPs help you to create more flexible networking setups. You can assign at most one Primary IP of type `ipv4` and one of type `ipv6` per Server. This Server then uses these IPs.

You can only unassign a Primary IP from a Server when it's powered off. This Primary IP can then be assigned to a different powered off Server, or you can keep it around for later use.

Primary IPs are bound to a specific Datacenter. You can not assign a Primary IP from one Datacenter to a Server in a different Datacenter. If you need this capability use Floating IPs instead.

If your Server's operating system supports cloud-init there is no further configuration needed to make Primary IPs work.

Primary IPs of type `ipv4` use a single IPv4 address as their `ip` property. Primary IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.

Primary IPs are billed on an hourly basis.


### Available Operations

* [DeletePrimaryIpsID](#deleteprimaryipsid) - Delete a Primary IP
* [GetPrimaryIps](#getprimaryips) - Get all Primary IPs
* [GetPrimaryIpsID](#getprimaryipsid) - Get a Primary IP
* [PostPrimaryIps](#postprimaryips) - Create a Primary IP
* [PutPrimaryIpsID](#putprimaryipsid) - Update a Primary IP

## DeletePrimaryIpsID

Deletes a Primary IP.

The Primary IP may be assigned to a Server. In this case it is unassigned automatically. The Server must be powered off (status `off`) in order for this operation to succeed.


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
    res, err := s.PrimaryIPs.DeletePrimaryIpsID(ctx, operations.DeletePrimaryIpsIDRequest{
        ID: 54338,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPrimaryIps

Returns all Primary IP objects.

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
    res, err := s.PrimaryIPs.GetPrimaryIps(ctx, operations.GetPrimaryIpsRequest{
        IP: sdk.String("quis"),
        LabelSelector: sdk.String("nesciunt"),
        Name: sdk.String("Dorothy Dach"),
        Sort: operations.GetPrimaryIpsSortEnumIDAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrimaryIPsResponse != nil {
        // handle response
    }
}
```

## GetPrimaryIpsID

Returns a specific Primary IP object.

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
    res, err := s.PrimaryIPs.GetPrimaryIpsID(ctx, operations.GetPrimaryIpsIDRequest{
        ID: 874573,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrimaryIPResponse != nil {
        // handle response
    }
}
```

## PostPrimaryIps

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
    res, err := s.PrimaryIPs.PostPrimaryIps(ctx, operations.PostPrimaryIpsCreatePrimaryIPRequest{
        AssigneeID: sdk.Int64(17),
        AssigneeType: operations.PostPrimaryIpsCreatePrimaryIPRequestAssigneeTypeEnumServer,
        AutoDelete: sdk.Bool(false),
        Datacenter: sdk.String("fsn1-dc8"),
        Labels: map[string]interface{}{
            "hic": "recusandae",
            "omnis": "facilis",
        },
        Name: "my-ip",
        Type: operations.PostPrimaryIpsCreatePrimaryIPRequestTypeEnumIpv6,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePrimaryIPResponse != nil {
        // handle response
    }
}
```

## PutPrimaryIpsID

Updates the Primary IP.

Note that when updating labels, the Primary IP's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

If the Primary IP object changes during the request, the response will be a “conflict” error.


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
    res, err := s.PrimaryIPs.PutPrimaryIpsID(ctx, operations.PutPrimaryIpsIDRequest{
        RequestBody: &operations.PutPrimaryIpsIDUpdatePrimaryIPRequest{
            AutoDelete: sdk.Bool(true),
            Labels: map[string]interface{}{
                "porro": "consequuntur",
            },
            Name: sdk.String("my-ip"),
        },
        ID: 500026,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrimaryIPResponse != nil {
        // handle response
    }
}
```
