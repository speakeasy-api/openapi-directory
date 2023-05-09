# Search

### Available Operations

* [CheckDocumentsReindex](#checkdocumentsreindex) - Check reindex status of the client source and translation documents.
* [ReindexDocuments](#reindexdocuments) - Reindex for search all of the client source and translation documents.
* [SearchEverywhere](#searcheverywhere) - Search everything in your account

## CheckDocumentsReindex

Check reindex status of the client source and translation documents.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search.CheckDocumentsReindex(ctx, operations.CheckDocumentsReindexRequest{
        AsyncRequestKey: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncOperationStatus != nil {
        // handle response
    }
}
```

## ReindexDocuments

Reindex for search all of the client source and translation documents.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search.ReindexDocuments(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncOperationStatus != nil {
        // handle response
    }
}
```

## SearchEverywhere

Search through everything in your account, from projects to documents, from source strings to translations...

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search.SearchEverywhere(ctx, operations.SearchEverywhereRequest{
        Include: []SearchEverywhereIncludeEnum{
            operations.SearchEverywhereIncludeEnumProjects,
            operations.SearchEverywhereIncludeEnumStrings,
            operations.SearchEverywhereIncludeEnumDocuments,
        },
        Page: sdk.Int64(536275),
        PerPage: sdk.Int64(929292),
        Query: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchEverywhereResult != nil {
        // handle response
    }
}
```
