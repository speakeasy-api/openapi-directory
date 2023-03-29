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
            Apikey: shared.SchemeApikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetArticlesearchJSONRequest{
        QueryParams: operations.GetArticlesearchJSONQueryParams{
            BeginDate: "unde",
            EndDate: "deserunt",
            FacetField: "porro",
            FacetFilter: false,
            Fl: "nulla",
            Fq: "id",
            Hl: false,
            Page: 857946,
            Q: "perspiciatis",
            Sort: "oldest",
        },
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