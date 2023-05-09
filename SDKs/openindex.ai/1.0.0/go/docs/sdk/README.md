# SDK

## Overview

A retrieval API for querying and filtering documents based on natural language queries and metadata

### Available Operations

* [QueryQueryPost](#queryquerypost) - Query

## QueryQueryPost

Accepts search query objects array each with query and optional filter. Break down complex questions into sub-questions. Refine results by criteria, e.g. time / source, don't do this often. Split queries if ResponseTooLargeError occurs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.QueryQueryPost(ctx, shared.QueryRequest{
        Namespace: sdk.String("occaecati"),
        Queries: []shared.Query{
            shared.Query{
                Filter: &shared.DocumentMetadataFilter{
                    Author: sdk.String("deleniti"),
                    CollectionID: sdk.String("hic"),
                    DocumentID: sdk.String("optio"),
                    EndDate: sdk.String("totam"),
                    Keywords: []string{
                        "commodi",
                    },
                    Language: sdk.String("molestiae"),
                    Source: shared.SourceEnumWeb.ToPointer(),
                    SourceID: sdk.String("qui"),
                    StartDate: sdk.String("impedit"),
                    TimePeriod: sdk.String("cum"),
                    UserID: sdk.String("esse"),
                },
                Query: "ipsum",
                TopK: sdk.Int64(568434),
            },
        },
    }, operations.QueryQueryPostSecurity{
        HTTPBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryResponse != nil {
        // handle response
    }
}
```
