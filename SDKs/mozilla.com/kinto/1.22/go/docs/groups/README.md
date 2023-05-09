# Groups

### Available Operations

* [GetGroup](#getgroup)
* [GetGroups](#getgroups)

## GetGroup

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
    res, err := s.Groups.GetGroup(ctx, operations.GetGroupRequest{
        IfMatch: sdk.String("porro"),
        IfNoneMatch: sdk.String("consequuntur"),
        Fields: []string{
            "error",
            "eaque",
            "occaecati",
        },
        BucketID: "rerum",
        ID: "3fe49a8d-9cbf-4486-b332-3f9b77f3a410",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObjectSchema != nil {
        // handle response
    }
}
```

## GetGroups

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
    res, err := s.Groups.GetGroups(ctx, operations.GetGroupsRequest{
        IfMatch: sdk.String("ipsa"),
        IfNoneMatch: sdk.String("iure"),
        Before: sdk.Int64(487838),
        Fields: []string{
            "accusamus",
            "quidem",
        },
        Limit: sdk.Int64(976405),
        Since: sdk.Int64(377752),
        Sort: []string{
            "eos",
            "atque",
            "sit",
        },
        To: sdk.Int64(854614),
        Token: sdk.String("ab"),
        BucketID: "soluta",
        ID: sdk.String("a77a89eb-f737-4ae4-a03c-e5e6a95d8a0d"),
        LastModified: sdk.Int64(311860),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schema != nil {
        // handle response
    }
}
```
