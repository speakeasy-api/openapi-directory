<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Apikey: shared.SchemeApikey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetArticlesearchJSONRequest{
        QueryParams: operations.GetArticlesearchJSONQueryParams{
            BeginDate: "sit",
            EndDate: "voluptas",
            FacetField: "culpa",
            FacetFilter: false,
            Fl: "consequuntur",
            Fq: "dolor",
            Hl: true,
            Page: 6044372234677422456,
            Q: "fugit",
            Sort: "newest",
        },
    }
    
    res, err := s.Stories.GetArticlesearchJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetArticlesearchJSON200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->