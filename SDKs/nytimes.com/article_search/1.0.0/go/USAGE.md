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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetArticlesearchJSONRequest{
        BeginDate: "corrupti",
        EndDate: "provident",
        FacetField: "distinctio",
        FacetFilter: false,
        Fl: "quibusdam",
        Fq: "unde",
        Hl: false,
        Page: 857946,
        Q: "corrupti",
        Sort: "oldest",
    }

    ctx := context.Background()
    res, err := s.Stories.GetArticlesearchJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetArticlesearchJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->