# MultiSearch

### Available Operations

* [SearchOneOrMoreIndexes](#searchoneormoreindexes) - Search one or more indexes

## SearchOneOrMoreIndexes

Search one or more indexes

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
    res, err := s.MultiSearch.SearchOneOrMoreIndexes(ctx, operations.SearchOneOrMoreIndexesRequestBody{
        Queries: []SearchOneOrMoreIndexesRequestBodyQueries{
            operations.SearchOneOrMoreIndexesRequestBodyQueries{
                AttributesToHighlight: []string{
                    "title",
                    "title",
                    "title",
                    "title",
                },
                IndexUID: sdk.String("books"),
                Q: sdk.String("Pride and Prejudice"),
            },
            operations.SearchOneOrMoreIndexesRequestBodyQueries{
                AttributesToHighlight: []string{
                    "title",
                },
                IndexUID: sdk.String("books"),
                Q: sdk.String("Pride and Prejudice"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
