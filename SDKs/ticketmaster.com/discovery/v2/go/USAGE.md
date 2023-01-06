<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.FindRequest{
        QueryParams: operations.FindQueryParams{
            ClassificationID: []interface{}{
                "et",
                "quidem",
            },
            ClassificationName: []interface{}{
                "enim",
                "magni",
                "nobis",
            },
            ID: "repellat",
            IncludeLicensedContent: "yes",
            IncludeSpellcheck: " no",
            IncludeTest: " only",
            Keyword: "debitis",
            Locale: "non",
            Page: "tempore",
            Size: "temporibus",
            Sort: "sed",
            Source: " tmr",
        },
    }
    
    res, err := s.Find(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->