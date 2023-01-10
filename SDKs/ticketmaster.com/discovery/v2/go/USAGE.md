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
                "officia",
                "vitae",
                "qui",
            },
            ClassificationName: []interface{}{
                "voluptas",
            },
            ID: "id",
            IncludeLicensedContent: " no",
            IncludeSpellcheck: " no",
            IncludeTest: "yes",
            Keyword: "tenetur",
            Locale: "sed",
            Page: "non",
            Size: "saepe",
            Sort: "eum",
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