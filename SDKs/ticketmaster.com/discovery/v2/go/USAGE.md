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
                "voluptas",
            },
            ClassificationName: []interface{}{
                "expedita",
                "consequuntur",
            },
            ID: "dolor",
            IncludeLicensedContent: " no",
            IncludeSpellcheck: " no",
            IncludeTest: "yes",
            Keyword: "et",
            Locale: "nihil",
            Page: "rerum",
            Size: "dicta",
            Sort: "debitis",
            Source: "ticketmaster",
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