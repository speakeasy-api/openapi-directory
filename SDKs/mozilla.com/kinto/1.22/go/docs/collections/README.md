# Collections

### Available Operations

* [GetCollection](#getcollection)
* [GetCollections](#getcollections)

## GetCollection

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
    res, err := s.Collections.GetCollection(ctx, operations.GetCollectionRequest{
        IfMatch: sdk.String("mollitia"),
        IfNoneMatch: sdk.String("reiciendis"),
        Fields: []string{
            "ad",
            "eum",
            "dolor",
        },
        BucketID: "necessitatibus",
        ID: "2516fe4c-8b71-41e5-b7fd-2ed028921cdd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObjectSchema != nil {
        // handle response
    }
}
```

## GetCollections

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
    res, err := s.Collections.GetCollections(ctx, operations.GetCollectionsRequest{
        IfMatch: sdk.String("maxime"),
        IfNoneMatch: sdk.String("ea"),
        Before: sdk.Int64(569101),
        Fields: []string{
            "ea",
        },
        Limit: sdk.Int64(33222),
        Since: sdk.Int64(69167),
        Sort: []string{
            "quidem",
            "ipsam",
            "voluptate",
            "autem",
        },
        To: sdk.Int64(722056),
        Token: sdk.String("eaque"),
        BucketID: "pariatur",
        ID: sdk.String("5f0d30c5-fbb2-4587-8532-02c73d5fe9b9"),
        LastModified: sdk.Int64(31838),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schema != nil {
        // handle response
    }
}
```
