# FloatingIPActions

### Available Operations

* [GetFloatingIpsIDActions](#getfloatingipsidactions) - Get all Actions for a Floating IP
* [GetFloatingIpsIDActionsActionID](#getfloatingipsidactionsactionid) - Get an Action for a Floating IP
* [PostFloatingIpsIDActionsAssign](#postfloatingipsidactionsassign) - Assign a Floating IP to a Server
* [PostFloatingIpsIDActionsChangeDNSPtr](#postfloatingipsidactionschangednsptr) - Change reverse DNS entry for a Floating IP
* [PostFloatingIpsIDActionsChangeProtection](#postfloatingipsidactionschangeprotection) - Change Floating IP Protection
* [PostFloatingIpsIDActionsUnassign](#postfloatingipsidactionsunassign) - Unassign a Floating IP

## GetFloatingIpsIDActions

Returns all Action objects for a Floating IP. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

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
    res, err := s.FloatingIPActions.GetFloatingIpsIDActions(ctx, operations.GetFloatingIpsIDActionsRequest{
        ID: 338007,
        Sort: operations.GetFloatingIpsIDActionsSortParameterSortEnumIDAsc.ToPointer(),
        Status: operations.GetFloatingIpsIDActionsStatusParameterStatusEnumError.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFloatingIpsIDActions200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetFloatingIpsIDActionsActionID

Returns a specific Action object for a Floating IP.

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
    res, err := s.FloatingIPActions.GetFloatingIpsIDActionsActionID(ctx, operations.GetFloatingIpsIDActionsActionIDRequest{
        ActionID: 656330,
        ID: 317202,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostFloatingIpsIDActionsAssign

Assigns a Floating IP to a Server.

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
    res, err := s.FloatingIPActions.PostFloatingIpsIDActionsAssign(ctx, operations.PostFloatingIpsIDActionsAssignRequest{
        RequestBody: &operations.PostFloatingIpsIDActionsAssignAssignFloatingIPRequest{
            Server: 42,
        },
        ID: 138183,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostFloatingIpsIDActionsChangeDNSPtr

Changes the hostname that will appear when getting the hostname belonging to this Floating IP.

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
    res, err := s.FloatingIPActions.PostFloatingIpsIDActionsChangeDNSPtr(ctx, operations.PostFloatingIpsIDActionsChangeDNSPtrRequest{
        RequestBody: &operations.PostFloatingIpsIDActionsChangeDNSPtrChangeDNSPTRRequest{
            DNSPtr: "server02.example.com",
            IP: "1.2.3.4",
        },
        ID: 778346,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostFloatingIpsIDActionsChangeProtection

Changes the protection configuration of the Floating IP.

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
    res, err := s.FloatingIPActions.PostFloatingIpsIDActionsChangeProtection(ctx, operations.PostFloatingIpsIDActionsChangeProtectionRequest{
        RequestBody: &operations.PostFloatingIpsIDActionsChangeProtectionChangeProtectionRequest{
            Delete: sdk.Bool(true),
        },
        ID: 196582,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostFloatingIpsIDActionsUnassign

Unassigns a Floating IP, resulting in it being unreachable. You may assign it to a Server again at a later time.

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
    res, err := s.FloatingIPActions.PostFloatingIpsIDActionsUnassign(ctx, operations.PostFloatingIpsIDActionsUnassignRequest{
        ID: 949572,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```
