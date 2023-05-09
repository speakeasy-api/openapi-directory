# ServiceInstance

### Available Operations

* [ListServiceInstances](#listserviceinstances) - List ServiceInstances
* [ShowServiceInstance](#showserviceinstance) - Show an existing ServiceInstance

## ListServiceInstances

Returns an array of ServiceInstance objects

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
    res, err := s.ServiceInstance.ListServiceInstances(ctx, operations.ListServiceInstancesRequest{
        Filter: map[string]interface{}{
            "excepturi": "accusantium",
            "iure": "culpa",
        },
        Limit: sdk.Int64(988374),
        Offset: sdk.Int64(958950),
        SortBy: map[string]interface{}{
            "mollitia": "dolorem",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceInstancesCollection != nil {
        // handle response
    }
}
```

## ShowServiceInstance

Returns a ServiceInstance object

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
    res, err := s.ServiceInstance.ShowServiceInstance(ctx, operations.ShowServiceInstanceRequest{
        ID: "a2fa9467-7392-451a-a52c-3f5ad019da1f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceInstance != nil {
        // handle response
    }
}
```
