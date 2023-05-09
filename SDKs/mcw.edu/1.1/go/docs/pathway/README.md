# Pathway

### Available Operations

* [GETPathwaysWithDiagramsForCategoryUsingGET](#getpathwayswithdiagramsforcategoryusingget) - Return a list of pathways based on category provided
* [SearchPathwaysUsingGET](#searchpathwaysusingget) - Return a list of pathways based on search term

## GETPathwaysWithDiagramsForCategoryUsingGET

Return a list of pathways based on category provided

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
    res, err := s.Pathway.GETPathwaysWithDiagramsForCategoryUsingGET(ctx, operations.GETPathwaysWithDiagramsForCategoryUsingGETRequest{
        Category: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## SearchPathwaysUsingGET

Return a list of pathways based on search term

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
    res, err := s.Pathway.SearchPathwaysUsingGET(ctx, operations.SearchPathwaysUsingGETRequest{
        SearchString: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
