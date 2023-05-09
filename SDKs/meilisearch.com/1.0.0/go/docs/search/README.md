# Search

### Available Operations

* [SearchInIndex](#searchinindex) - Search in index
* [SearchInIndex1](#searchinindex1) - Search in index

## SearchInIndex

Search in index

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
    res, err := s.Search.SearchInIndex(ctx, operations.SearchInIndexRequest{
        AttributesToCrop: sdk.String("title"),
        AttributesToHighlight: sdk.String("*"),
        AttributesToRetrieve: sdk.String("title,author"),
        CropLength: sdk.String("5"),
        CropMarker: sdk.String("[...]"),
        Facets: sdk.String("genre"),
        Filter: sdk.String("genre="fantasy""),
        HighlightPostTag: sdk.String("</mark>"),
        HighlightPreTag: sdk.String("<mark>"),
        HitsPerPage: sdk.String("50"),
        Limit: sdk.String("1"),
        MatchingStrategy: sdk.String("all"),
        Offset: sdk.String("0"),
        Page: sdk.String("2"),
        Q: sdk.String("prinec"),
        ShowMatchesPosition: sdk.String("true"),
        Sort: sdk.String("price"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SearchInIndex1

Search in index

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
    res, err := s.Search.SearchInIndex1(ctx, operations.SearchInIndex1RequestBody{
        AttributesToHighlight: []string{
            "title",
            "title",
            "title",
            "title",
        },
        Q: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
