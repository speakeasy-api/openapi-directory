# ServicePlan

### Available Operations

* [ListServicePlans](#listserviceplans) - List ServicePlans
* [ShowServicePlan](#showserviceplan) - Show an existing ServicePlan

## ListServicePlans

Returns an array of ServicePlan objects

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ServicePlan.ListServicePlans(ctx, operations.ListServicePlansRequest{
        Filter: map[string]interface{}{
            "minima": "eaque",
        },
        Limit: sdk.Int64(952871),
        Offset: sdk.Int64(725595),
        SortBy: map[string]interface{}{
            "aut": "deleniti",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServicePlansCollection != nil {
        // handle response
    }
}
```

## ShowServicePlan

Returns a ServicePlan object

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ServicePlan.ShowServicePlan(ctx, operations.ShowServicePlanRequest{
        ID: "c42e141a-ac36-46c8-9d6b-144290747477",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServicePlan != nil {
        // handle response
    }
}
```
