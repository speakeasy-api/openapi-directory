# Contributor

### Available Operations

* [GetContributor](#getcontributor) - Contributor Detail
* [ListContributor](#listcontributor) - Contributor Collection

## GetContributor

Return the content of the selected contributor.

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
    res, err := s.Contributor.GetContributor(ctx, operations.GetContributorRequest{
        Aliases: sdk.Bool(false),
        ContributorID: "placeat",
    }, operations.GetContributorSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContributor200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListContributor

Return a collection of Contributors.

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
    res, err := s.Contributor.ListContributor(ctx, operations.ListContributorRequest{
        Aliases: sdk.Bool(false),
        Limit: sdk.Int(528895),
        UpdatedAfter: sdk.String("iusto"),
    }, operations.ListContributorSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContributor200ApplicationJSONObject != nil {
        // handle response
    }
}
```
