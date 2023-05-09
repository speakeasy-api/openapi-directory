# ServiceOffering

### Available Operations

* [AppliedInventoriesTagsForServiceOffering](#appliedinventoriestagsforserviceoffering) - Invokes computing of ServiceInventories tags for given ServiceOffering
* [ListServiceOfferingServiceInstances](#listserviceofferingserviceinstances) - List ServiceInstances for ServiceOffering
* [ListServiceOfferingServiceOfferingNodes](#listserviceofferingserviceofferingnodes) - List ServiceOfferingNodes for ServiceOffering
* [ListServiceOfferingServicePlans](#listserviceofferingserviceplans) - List ServicePlans for ServiceOffering
* [ListServiceOfferings](#listserviceofferings) - List ServiceOfferings
* [OrderServiceOffering](#orderserviceoffering) - Order an existing ServiceOffering
* [ShowServiceOffering](#showserviceoffering) - Show an existing ServiceOffering

## AppliedInventoriesTagsForServiceOffering

Returns an array of inventories tags

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ServiceOffering.AppliedInventoriesTagsForServiceOffering(ctx, operations.AppliedInventoriesTagsForServiceOfferingRequest{
        AppliedInventoriesParametersServicePlan: shared.AppliedInventoriesParametersServicePlan{
            ServiceParameters: map[string]interface{}{
                "architecto": "repudiandae",
            },
        },
        ID: "5b7fd2ed-0289-421c-9dc6-92601fb576b0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tags != nil {
        // handle response
    }
}
```

## ListServiceOfferingServiceInstances

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
    res, err := s.ServiceOffering.ListServiceOfferingServiceInstances(ctx, operations.ListServiceOfferingServiceInstancesRequest{
        Filter: map[string]interface{}{
            "nemo": "voluptatibus",
            "perferendis": "fugiat",
            "amet": "aut",
            "cumque": "corporis",
        },
        ID: "fbb25870-5320-42c7-bd5f-e9b90c28909b",
        Limit: sdk.Int64(237893),
        Offset: sdk.Int64(992397),
        SortBy: map[string]interface{}{
            "modi": "iste",
            "dolorum": "deleniti",
            "pariatur": "provident",
            "nobis": "libero",
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

## ListServiceOfferingServiceOfferingNodes

Returns an array of ServiceOfferingNode objects

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
    res, err := s.ServiceOffering.ListServiceOfferingServiceOfferingNodes(ctx, operations.ListServiceOfferingServiceOfferingNodesRequest{
        Filter: map[string]interface{}{
            "quaerat": "quos",
            "aliquid": "dolorem",
            "dolorem": "dolor",
            "qui": "ipsum",
        },
        ID: "f9b77f3a-4100-4674-abf6-9280d1ba77a8",
        Limit: sdk.Int64(607045),
        Offset: sdk.Int64(896672),
        SortBy: map[string]interface{}{
            "asperiores": "nihil",
            "ipsum": "voluptate",
            "id": "saepe",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceOfferingNodesCollection != nil {
        // handle response
    }
}
```

## ListServiceOfferingServicePlans

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
    res, err := s.ServiceOffering.ListServiceOfferingServicePlans(ctx, operations.ListServiceOfferingServicePlansRequest{
        Filter: map[string]interface{}{
            "aspernatur": "perferendis",
            "amet": "optio",
        },
        ID: "e5e6a95d-8a0d-4446-8e2a-f7a73cf3be45",
        Limit: sdk.Int64(213312),
        Offset: sdk.Int64(957451),
        SortBy: map[string]interface{}{
            "nihil": "sit",
            "expedita": "neque",
            "sed": "vel",
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

## ListServiceOfferings

Returns an array of ServiceOffering objects

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
    res, err := s.ServiceOffering.ListServiceOfferings(ctx, operations.ListServiceOfferingsRequest{
        Filter: map[string]interface{}{
            "voluptas": "deserunt",
            "quam": "ipsum",
            "incidunt": "qui",
        },
        Limit: sdk.Int64(586784),
        Offset: sdk.Int64(807581),
        SortBy: map[string]interface{}{
            "soluta": "dicta",
            "laborum": "totam",
            "incidunt": "aspernatur",
            "dolores": "distinctio",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceOfferingsCollection != nil {
        // handle response
    }
}
```

## OrderServiceOffering

Returns a Task id

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ServiceOffering.OrderServiceOffering(ctx, operations.OrderServiceOfferingRequest{
        OrderParametersServiceOfferingInput: shared.OrderParametersServiceOfferingInput{
            ProviderControlParameters: map[string]interface{}{
                "aliquid": "quam",
                "molestias": "temporibus",
                "qui": "neque",
            },
            ServiceParameters: map[string]interface{}{
                "magni": "odio",
            },
        },
        ID: "15bf0cbb-1e31-4b8b-90f3-443a1108e0ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderServiceOffering200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ShowServiceOffering

Returns a ServiceOffering object

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
    res, err := s.ServiceOffering.ShowServiceOffering(ctx, operations.ShowServiceOfferingRequest{
        ID: "cf4b9218-79fc-4e95-bf73-ef7fbc7abd74",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceOffering != nil {
        // handle response
    }
}
```
