# Source

### Available Operations

* [IncrementalRefreshSource](#incrementalrefreshsource) - Incremental Refresh an existing Source
* [ListSourceServiceInstances](#listsourceserviceinstances) - List ServiceInstances for Source
* [ListSourceServiceInventories](#listsourceserviceinventories) - List ServiceInventories for Source
* [ListSourceServiceOfferingNodes](#listsourceserviceofferingnodes) - List ServiceOfferingNodes for Source
* [ListSourceServiceOfferings](#listsourceserviceofferings) - List ServiceOfferings for Source
* [ListSourceServicePlans](#listsourceserviceplans) - List ServicePlans for Source
* [ListSourceTasks](#listsourcetasks) - List Tasks for Source
* [ListSources](#listsources) - List Sources
* [RefreshSource](#refreshsource) -  Refresh an existing Source
* [ShowSource](#showsource) - Show an existing Source

## IncrementalRefreshSource

Incremental Refresh a source object

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
    res, err := s.Source.IncrementalRefreshSource(ctx, operations.IncrementalRefreshSourceRequest{
        ID: "8a7bd466-d28c-410a-b3cd-ca4251904e52",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListSourceServiceInstances

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
    res, err := s.Source.ListSourceServiceInstances(ctx, operations.ListSourceServiceInstancesRequest{
        Filter: map[string]interface{}{
            "quo": "esse",
        },
        ID: "e0bc7178-e479-46f2-a70c-688282aa4825",
        Limit: sdk.Int64(392676),
        Offset: sdk.Int64(147014),
        SortBy: map[string]interface{}{
            "consequuntur": "ratione",
            "explicabo": "saepe",
            "occaecati": "atque",
            "et": "esse",
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

## ListSourceServiceInventories

Returns an array of ServiceInventory objects

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
    res, err := s.Source.ListSourceServiceInventories(ctx, operations.ListSourceServiceInventoriesRequest{
        Filter: map[string]interface{}{
            "accusamus": "veritatis",
            "esse": "quod",
            "nam": "vero",
            "aliquid": "quasi",
        },
        ID: "e6b7b95b-c0ab-43c2-8c4f-3789fd871f99",
        Limit: sdk.Int64(863023),
        Offset: sdk.Int64(820767),
        SortBy: map[string]interface{}{
            "eveniet": "asperiores",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceInventoriesCollection != nil {
        // handle response
    }
}
```

## ListSourceServiceOfferingNodes

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
    res, err := s.Source.ListSourceServiceOfferingNodes(ctx, operations.ListSourceServiceOfferingNodesRequest{
        Filter: map[string]interface{}{
            "veritatis": "consequuntur",
            "quasi": "similique",
            "culpa": "aliquid",
            "tenetur": "quae",
        },
        ID: "e674bdb0-4f15-4756-882d-68ea19f1d170",
        Limit: sdk.Int64(326701),
        Offset: sdk.Int64(86532),
        SortBy: map[string]interface{}{
            "adipisci": "iste",
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

## ListSourceServiceOfferings

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
    res, err := s.Source.ListSourceServiceOfferings(ctx, operations.ListSourceServiceOfferingsRequest{
        Filter: map[string]interface{}{
            "accusantium": "rem",
            "aut": "laudantium",
            "eum": "mollitia",
            "ab": "corrupti",
        },
        ID: "40394c26-071f-493f-9f06-42dac7af515c",
        Limit: sdk.Int64(801836),
        Offset: sdk.Int64(288398),
        SortBy: map[string]interface{}{
            "adipisci": "fuga",
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

## ListSourceServicePlans

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
    res, err := s.Source.ListSourceServicePlans(ctx, operations.ListSourceServicePlansRequest{
        Filter: map[string]interface{}{
            "suscipit": "velit",
            "culpa": "est",
            "recusandae": "totam",
        },
        ID: "d67864db-b675-4fd5-a60b-375ed4f6fbee",
        Limit: sdk.Int64(296556),
        Offset: sdk.Int64(121059),
        SortBy: map[string]interface{}{
            "adipisci": "non",
            "amet": "beatae",
            "dignissimos": "a",
            "debitis": "consectetur",
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

## ListSourceTasks

Returns an array of Task objects

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
    res, err := s.Source.ListSourceTasks(ctx, operations.ListSourceTasksRequest{
        Filter: map[string]interface{}{
            "harum": "laboriosam",
            "ipsa": "voluptates",
        },
        ID: "b1ea4265-55ba-43c2-8744-ed53b88f3a8d",
        Limit: sdk.Int64(519643),
        Offset: sdk.Int64(940210),
        SortBy: map[string]interface{}{
            "nobis": "sit",
            "rerum": "sed",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TasksCollection != nil {
        // handle response
    }
}
```

## ListSources

Returns an array of Source objects

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
    res, err := s.Source.ListSources(ctx, operations.ListSourcesRequest{
        Filter: map[string]interface{}{
            "explicabo": "asperiores",
            "facilis": "voluptate",
            "expedita": "ab",
            "iste": "dolore",
        },
        Limit: sdk.Int64(671907),
        Offset: sdk.Int64(152354),
        SortBy: map[string]interface{}{
            "commodi": "quidem",
            "explicabo": "voluptas",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourcesCollection != nil {
        // handle response
    }
}
```

## RefreshSource

Refresh a source object

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
    res, err := s.Source.RefreshSource(ctx, operations.RefreshSourceRequest{
        ID: "916fe1f0-8f42-494e-b698-f447f603e8b4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ShowSource

Returns a Source object

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
    res, err := s.Source.ShowSource(ctx, operations.ShowSourceRequest{
        ID: "45e80ca5-5efd-420e-857e-1858b6a89fbe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Source != nil {
        // handle response
    }
}
```
