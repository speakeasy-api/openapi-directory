<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FindRequest{
        QueryParams: operations.FindQueryParams{
            ClassificationID: []interface{}{
                "deserunt",
                "porro",
                "nulla",
            },
            ClassificationName: []interface{}{
                "vero",
                "perspiciatis",
                "nulla",
            },
            ID: "nihil",
            IncludeLicensedContent: " no",
            IncludeSpellcheck: " no",
            IncludeTest: " no",
            Keyword: "iusto",
            Locale: "ullam",
            Page: "saepe",
            Size: "inventore",
            Sort: "sapiente",
            Source: " universe",
        },
    }

    ctx := context.Background()
    res, err := s.Find(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->