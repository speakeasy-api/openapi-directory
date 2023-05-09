# ServiceInventory

### Available Operations

* [ListServiceInventories](#listserviceinventories) - List ServiceInventories
* [ListServiceInventoryTags](#listserviceinventorytags) - List Tags for ServiceInventory
* [ShowServiceInventory](#showserviceinventory) - Show an existing ServiceInventory
* [TagServiceInventory](#tagserviceinventory) - Tag a ServiceInventory
* [UntagServiceInventory](#untagserviceinventory) - Untag a ServiceInventory

## ListServiceInventories

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
    res, err := s.ServiceInventory.ListServiceInventories(ctx, operations.ListServiceInventoriesRequest{
        Filter: map[string]interface{}{
            "vero": "nihil",
            "praesentium": "voluptatibus",
            "ipsa": "omnis",
            "voluptate": "cum",
        },
        Limit: sdk.Int64(19987),
        Offset: sdk.Int64(39187),
        SortBy: map[string]interface{}{
            "ut": "maiores",
            "dicta": "corporis",
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

## ListServiceInventoryTags

Returns an array of Tag objects

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
    res, err := s.ServiceInventory.ListServiceInventoryTags(ctx, operations.ListServiceInventoryTagsRequest{
        Filter: map[string]interface{}{
            "iusto": "dicta",
            "harum": "enim",
        },
        ID: "e6e13b99-d488-4e1e-91e4-50ad2abd4426",
        Limit: sdk.Int64(586513),
        Offset: sdk.Int64(552822),
        SortBy: map[string]interface{}{
            "magni": "assumenda",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagsCollection != nil {
        // handle response
    }
}
```

## ShowServiceInventory

Returns a ServiceInventory object

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
    res, err := s.ServiceInventory.ShowServiceInventory(ctx, operations.ShowServiceInventoryRequest{
        ID: "502a94bb-4f63-4c96-9e9a-3efa77dfb14c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceInventory != nil {
        // handle response
    }
}
```

## TagServiceInventory

Tags a ServiceInventory object

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
    res, err := s.ServiceInventory.TagServiceInventory(ctx, operations.TagServiceInventoryRequest{
        RequestBody: []shared.Tag{
            shared.Tag{
                Tag: sdk.String("/namespace/architecture=x86_64"),
            },
            shared.Tag{
                Tag: sdk.String("/namespace/architecture=x86_64"),
            },
            shared.Tag{
                Tag: sdk.String("/namespace/architecture=x86_64"),
            },
            shared.Tag{
                Tag: sdk.String("/namespace/architecture=x86_64"),
            },
        },
        ID: "66ae395e-fb9b-4a88-b3a6-6997074ba446",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tags != nil {
        // handle response
    }
}
```

## UntagServiceInventory

Untags a ServiceInventory object

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
    res, err := s.ServiceInventory.UntagServiceInventory(ctx, operations.UntagServiceInventoryRequest{
        RequestBody: []shared.Tag{
            shared.Tag{
                Tag: sdk.String("/namespace/architecture=x86_64"),
            },
            shared.Tag{
                Tag: sdk.String("/namespace/architecture=x86_64"),
            },
            shared.Tag{
                Tag: sdk.String("/namespace/architecture=x86_64"),
            },
        },
        ID: "b6e21419-5989-40af-a563-e2516fe4c8b7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
