<!-- Start SDK Example Usage -->
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
    res, err := s.Find(ctx, operations.FindRequest{
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
        ID: sdk.String("69a674e0-f467-4cc8-b96e-d151a05dfc2d"),
        IncludeLicensedContent: operations.FindIncludeLicensedContentEnumNo.ToPointer(),
        IncludeSpellcheck: operations.FindIncludeSpellcheckEnumNo.ToPointer(),
        IncludeTest: operations.FindIncludeTestEnumNo.ToPointer(),
        Keyword: sdk.String("quod"),
        Locale: sdk.String("quod"),
        Page: sdk.String("esse"),
        Size: sdk.String("totam"),
        Sort: sdk.String("porro"),
        Source: operations.FindSourceEnumFrontgate.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->