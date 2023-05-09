# PrimaryIPActions

### Available Operations

* [PostPrimaryIpsIDActionsAssign](#postprimaryipsidactionsassign) - Assign a Primary IP to a resource
* [PostPrimaryIpsIDActionsChangeDNSPtr](#postprimaryipsidactionschangednsptr) - Change reverse DNS entry for a Primary IP
* [PostPrimaryIpsIDActionsChangeProtection](#postprimaryipsidactionschangeprotection) - Change Primary IP Protection
* [PostPrimaryIpsIDActionsUnassign](#postprimaryipsidactionsunassign) - Unassign a Primary IP from a resource

## PostPrimaryIpsIDActionsAssign

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
    res, err := s.PrimaryIPActions.PostPrimaryIpsIDActionsAssign(ctx, operations.PostPrimaryIpsIDActionsAssignRequest{
        RequestBody: &operations.PostPrimaryIpsIDActionsAssignAssignPrimaryIPRequest{
            AssigneeID: 4711,
            AssigneeType: operations.PostPrimaryIpsIDActionsAssignAssignPrimaryIPRequestAssigneeTypeEnumServer,
        },
        ID: 171629,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostPrimaryIpsIDActionsChangeDNSPtr

Changes the hostname that will appear when getting the hostname belonging to this Primary IP.

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
    res, err := s.PrimaryIPActions.PostPrimaryIpsIDActionsChangeDNSPtr(ctx, operations.PostPrimaryIpsIDActionsChangeDNSPtrRequest{
        RequestBody: &operations.PostPrimaryIpsIDActionsChangeDNSPtrChangeDNSPTRRequest{
            DNSPtr: "server02.example.com",
            IP: "1.2.3.4",
        },
        ID: 339404,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostPrimaryIpsIDActionsChangeProtection

Changes the protection configuration of a Primary IP.

A Primary IP can only be delete protected if its `auto_delete` property is set to `false`.


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
    res, err := s.PrimaryIPActions.PostPrimaryIpsIDActionsChangeProtection(ctx, operations.PostPrimaryIpsIDActionsChangeProtectionRequest{
        RequestBody: &operations.PostPrimaryIpsIDActionsChangeProtectionChangeProtectionRequest{
            Delete: sdk.Bool(true),
        },
        ID: 521037,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```

## PostPrimaryIpsIDActionsUnassign

Unassigns a Primary IP from a Server.

The Server must be powered off (status `off`) in order for this operation to succeed.

Note that only Servers that have at least one network interface (public or private) attached can be powered on.

#### Call specific error codes

| Code                              | Description                                                   |
|---------------------------------- |-------------------------------------------------------------- |
| `server_not_stopped`              | The server is running, but needs to be powered off            |
| `server_is_load_balancer_target`  | The server ipv4 address is a loadbalancer target              |


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
    res, err := s.PrimaryIPActions.PostPrimaryIpsIDActionsUnassign(ctx, operations.PostPrimaryIpsIDActionsUnassignRequest{
        ID: 489549,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionResponse != nil {
        // handle response
    }
}
```
