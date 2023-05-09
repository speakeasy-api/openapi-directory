# Firewalls

## Overview

Firewalls can limit the network access to or from your resources.

* When applying a firewall with no `in` rule all inbound traffic will be dropped. The default for `in` is `DROP`.
* When applying a firewall with no `out` rule all outbound traffic will be accepted. The default for `out` is `ACCEPT`.


### Available Operations

* [DeleteFirewallsID](#deletefirewallsid) - Delete a Firewall
* [GetFirewalls](#getfirewalls) - Get all Firewalls
* [GetFirewallsID](#getfirewallsid) - Get a Firewall
* [PostFirewalls](#postfirewalls) - Create a Firewall
* [PutFirewallsID](#putfirewallsid) - Update a Firewall

## DeleteFirewallsID

Deletes a Firewall.

#### Call specific error codes

| Code                 | Description                               |
|--------------------- |-------------------------------------------|
| `resource_in_use`    | Firewall must not be in use to be deleted |


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
    res, err := s.Firewalls.DeleteFirewallsID(ctx, operations.DeleteFirewallsIDRequest{
        ID: 616934,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFirewalls

Returns all Firewall objects.

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
    res, err := s.Firewalls.GetFirewalls(ctx, operations.GetFirewallsRequest{
        LabelSelector: sdk.String("laboriosam"),
        Name: sdk.String("Elias Parker"),
        Sort: operations.GetFirewallsSortEnumNameDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirewallsResponse != nil {
        // handle response
    }
}
```

## GetFirewallsID

Gets a specific Firewall object.

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
    res, err := s.Firewalls.GetFirewallsID(ctx, operations.GetFirewallsIDRequest{
        ID: 437032,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirewallResponse != nil {
        // handle response
    }
}
```

## PostFirewalls

Creates a new Firewall.

#### Call specific error codes

| Code                          | Description                                                   |
|------------------------------ |-------------------------------------------------------------- |
| `server_already_added`        | Server added more than one time to resource                   |
| `incompatible_network_type`   | The Network type is incompatible for the given resource       |
| `firewall_resource_not_found` | The resource the Firewall should be attached to was not found |


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
    res, err := s.Firewalls.PostFirewalls(ctx, operations.PostFirewallsCreateFirewallRequest{
        ApplyTo: []PostFirewallsCreateFirewallRequestApplyTo{
            operations.PostFirewallsCreateFirewallRequestApplyTo{
                LabelSelector: &operations.PostFirewallsCreateFirewallRequestApplyToLabelSelector{
                    Selector: "quidem",
                },
                Server: &operations.PostFirewallsCreateFirewallRequestApplyToServer{
                    ID: 99280,
                },
                Type: operations.PostFirewallsCreateFirewallRequestApplyToTypeEnumServer,
            },
            operations.PostFirewallsCreateFirewallRequestApplyTo{
                LabelSelector: &operations.PostFirewallsCreateFirewallRequestApplyToLabelSelector{
                    Selector: "reiciendis",
                },
                Server: &operations.PostFirewallsCreateFirewallRequestApplyToServer{
                    ID: 666767,
                },
                Type: operations.PostFirewallsCreateFirewallRequestApplyToTypeEnumLabelSelector,
            },
            operations.PostFirewallsCreateFirewallRequestApplyTo{
                LabelSelector: &operations.PostFirewallsCreateFirewallRequestApplyToLabelSelector{
                    Selector: "laborum",
                },
                Server: &operations.PostFirewallsCreateFirewallRequestApplyToServer{
                    ID: 170909,
                },
                Type: operations.PostFirewallsCreateFirewallRequestApplyToTypeEnumServer,
            },
            operations.PostFirewallsCreateFirewallRequestApplyTo{
                LabelSelector: &operations.PostFirewallsCreateFirewallRequestApplyToLabelSelector{
                    Selector: "corporis",
                },
                Server: &operations.PostFirewallsCreateFirewallRequestApplyToServer{
                    ID: 128926,
                },
                Type: operations.PostFirewallsCreateFirewallRequestApplyToTypeEnumLabelSelector,
            },
        },
        Labels: map[string]interface{}{
            "omnis": "nemo",
            "minima": "excepturi",
        },
        Name: "Corporate Intranet Protection",
        Rules: []PostFirewallsCreateFirewallRequestRule{
            operations.PostFirewallsCreateFirewallRequestRule{
                Description: sdk.String("iure"),
                DestinationIps: []string{
                    "doloribus",
                    "sapiente",
                    "architecto",
                },
                Direction: operations.PostFirewallsCreateFirewallRequestRuleDirectionEnumOut,
                Port: sdk.String("80"),
                Protocol: operations.PostFirewallsCreateFirewallRequestRuleProtocolEnumUDP,
                SourceIps: []string{
                    "consequuntur",
                    "repellat",
                    "mollitia",
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFirewallResponse != nil {
        // handle response
    }
}
```

## PutFirewallsID

Updates the Firewall.

Note that when updating labels, the Firewall's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the Firewall object changes during the request, the response will be a “conflict” error.


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
    res, err := s.Firewalls.PutFirewallsID(ctx, operations.PutFirewallsIDRequest{
        RequestBody: &operations.PutFirewallsIDUpdateFirewallRequest{
            Labels: map[string]interface{}{
                "numquam": "commodi",
                "quam": "molestiae",
                "velit": "error",
            },
            Name: sdk.String("new-name"),
        },
        ID: 158969,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirewallResponse != nil {
        // handle response
    }
}
```
