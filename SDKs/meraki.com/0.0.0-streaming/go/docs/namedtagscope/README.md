# NamedTagScope

### Available Operations

* [CreateNetworkSmTargetGroup](#createnetworksmtargetgroup) - Add a target group
* [DeleteNetworkSmTargetGroup](#deletenetworksmtargetgroup) - Delete a target group from a network
* [GetNetworkSmTargetGroup](#getnetworksmtargetgroup) - Return a target group
* [GetNetworkSmTargetGroups](#getnetworksmtargetgroups) - List the target groups in this network
* [UpdateNetworkSmTargetGroup](#updatenetworksmtargetgroup) - Update a target group

## CreateNetworkSmTargetGroup

Add a target group

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.NamedTagScope.CreateNetworkSmTargetGroup(ctx, operations.CreateNetworkSmTargetGroupRequest{
        RequestBody: &operations.CreateNetworkSmTargetGroupRequestBody{
            Name: sdk.String("Erma Paucek"),
            Scope: sdk.String("necessitatibus"),
        },
        NetworkID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSmTargetGroup201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkSmTargetGroup

Delete a target group from a network

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.NamedTagScope.DeleteNetworkSmTargetGroup(ctx, operations.DeleteNetworkSmTargetGroupRequest{
        NetworkID: "consequatur",
        TargetGroupID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkSmTargetGroup

Return a target group

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.NamedTagScope.GetNetworkSmTargetGroup(ctx, operations.GetNetworkSmTargetGroupRequest{
        NetworkID: "et",
        TargetGroupID: "ducimus",
        WithDetails: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmTargetGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSmTargetGroups

List the target groups in this network

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.NamedTagScope.GetNetworkSmTargetGroups(ctx, operations.GetNetworkSmTargetGroupsRequest{
        NetworkID: "natus",
        WithDetails: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmTargetGroups200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkSmTargetGroup

Update a target group

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.NamedTagScope.UpdateNetworkSmTargetGroup(ctx, operations.UpdateNetworkSmTargetGroupRequest{
        RequestBody: &operations.UpdateNetworkSmTargetGroupRequestBody{
            Name: sdk.String("Mr. Sam Flatley"),
            Scope: sdk.String("nulla"),
        },
        NetworkID: "necessitatibus",
        TargetGroupID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSmTargetGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```
