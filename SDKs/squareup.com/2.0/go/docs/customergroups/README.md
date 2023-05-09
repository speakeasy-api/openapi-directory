# CustomerGroups

### Available Operations

* [CreateCustomerGroup](#createcustomergroup) - CreateCustomerGroup
* [DeleteCustomerGroup](#deletecustomergroup) - DeleteCustomerGroup
* [ListCustomerGroups](#listcustomergroups) - ListCustomerGroups
* [RetrieveCustomerGroup](#retrievecustomergroup) - RetrieveCustomerGroup
* [UpdateCustomerGroup](#updatecustomergroup) - UpdateCustomerGroup

## CreateCustomerGroup

Creates a new customer group for a business.

The request must include the `name` value of the group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerGroups.CreateCustomerGroup(ctx, shared.CreateCustomerGroupRequest{
        Group: shared.CustomerGroup{
            CreatedAt: sdk.String("laudantium"),
            ID: sdk.String("46e2c330-9db0-4536-99e7-5ca006f5392c"),
            Name: "Debra Ortiz",
            UpdatedAt: sdk.String("est"),
        },
        IdempotencyKey: sdk.String("rem"),
    }, operations.CreateCustomerGroupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomerGroupResponse != nil {
        // handle response
    }
}
```

## DeleteCustomerGroup

Deletes a customer group as identified by the `group_id` value.

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
    res, err := s.CustomerGroups.DeleteCustomerGroup(ctx, operations.DeleteCustomerGroupRequest{
        GroupID: "cum",
    }, operations.DeleteCustomerGroupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomerGroupResponse != nil {
        // handle response
    }
}
```

## ListCustomerGroups

Retrieves the list of customer groups of a business.

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
    res, err := s.CustomerGroups.ListCustomerGroups(ctx, operations.ListCustomerGroupsRequest{
        Cursor: sdk.String("maiores"),
        Limit: sdk.Int64(588202),
    }, operations.ListCustomerGroupsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomerGroupsResponse != nil {
        // handle response
    }
}
```

## RetrieveCustomerGroup

Retrieves a specific customer group as identified by the `group_id` value.

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
    res, err := s.CustomerGroups.RetrieveCustomerGroup(ctx, operations.RetrieveCustomerGroupRequest{
        GroupID: "sunt",
    }, operations.RetrieveCustomerGroupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveCustomerGroupResponse != nil {
        // handle response
    }
}
```

## UpdateCustomerGroup

Updates a customer group as identified by the `group_id` value.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CustomerGroups.UpdateCustomerGroup(ctx, operations.UpdateCustomerGroupRequest{
        UpdateCustomerGroupRequest: shared.UpdateCustomerGroupRequest{
            Group: shared.CustomerGroup{
                CreatedAt: sdk.String("maiores"),
                ID: sdk.String("97428ad9-a9f8-4bf8-a211-25359d98387f"),
                Name: "Molly Kling",
                UpdatedAt: sdk.String("assumenda"),
            },
        },
        GroupID: "nihil",
    }, operations.UpdateCustomerGroupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCustomerGroupResponse != nil {
        // handle response
    }
}
```
