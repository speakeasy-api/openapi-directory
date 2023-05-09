# Buckets

### Available Operations

* [GetBucket](#getbucket)
* [GetBuckets](#getbuckets)

## GetBucket

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
    res, err := s.Buckets.GetBucket(ctx, operations.GetBucketRequest{
        IfMatch: sdk.String("voluptatibus"),
        IfNoneMatch: sdk.String("vero"),
        Fields: []string{
            "praesentium",
            "voluptatibus",
        },
        ID: "097b0074-f154-471b-9e6e-13b99d488e1e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObjectSchema != nil {
        // handle response
    }
}
```

## GetBuckets

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
    res, err := s.Buckets.GetBuckets(ctx, operations.GetBucketsRequest{
        IfMatch: sdk.String("sint"),
        IfNoneMatch: sdk.String("veritatis"),
        Before: sdk.Int64(929297),
        Fields: []string{
            "enim",
            "consequatur",
        },
        Limit: sdk.Int64(667411),
        Since: sdk.Int64(842342),
        Sort: []string{
            "deserunt",
        },
        To: sdk.Int64(716327),
        Token: sdk.String("quibusdam"),
        ID: sdk.String("44269802-d502-4a94-bb4f-63c969e9a3ef"),
        LastModified: sdk.Int64(680056),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schema != nil {
        // handle response
    }
}
```
