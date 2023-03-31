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
        ClassificationID: []interface{}{
            "provident",
            "distinctio",
            "quibusdam",
        },
        ClassificationName: []interface{}{
            "nulla",
            "corrupti",
            "illum",
        },
        ID: "vel",
        IncludeLicensedContent: " no",
        IncludeSpellcheck: " no",
        IncludeTest: " no",
        Keyword: "iure",
        Locale: "magnam",
        Page: "debitis",
        Size: "ipsa",
        Sort: "delectus",
        Source: " universe",
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