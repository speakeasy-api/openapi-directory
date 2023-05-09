# ServiceOfferingNode

### Available Operations

* [ListServiceOfferingNodes](#listserviceofferingnodes) - List ServiceOfferingNodes
* [ShowServiceOfferingNode](#showserviceofferingnode) - Show an existing ServiceOfferingNode

## ListServiceOfferingNodes

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
    res, err := s.ServiceOfferingNode.ListServiceOfferingNodes(ctx, operations.ListServiceOfferingNodesRequest{
        Filter: map[string]interface{}{
            "illum": "sequi",
            "natus": "impedit",
            "aut": "voluptatibus",
            "exercitationem": "nulla",
        },
        Limit: sdk.Int64(148141),
        Offset: sdk.Int64(780427),
        SortBy: map[string]interface{}{
            "doloribus": "iusto",
            "eligendi": "ducimus",
            "alias": "officia",
            "tempora": "ipsam",
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

## ShowServiceOfferingNode

Returns a ServiceOfferingNode object

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
    res, err := s.ServiceOfferingNode.ShowServiceOfferingNode(ctx, operations.ShowServiceOfferingNodeRequest{
        ID: "626d4368-13f1-46d9-b5fc-e6c556146c3e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceOfferingNode != nil {
        // handle response
    }
}
```
