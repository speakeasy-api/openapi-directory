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
            BeginDate: "incidunt",
            EndDate: "dicta",
            FacetField: "veritatis",
            FacetFilter: true,
            Fl: "recusandae",
            Fq: "qui",
            Hl: false,
            Page: 1366123293212064668,
            Q: "sint",
            Sort: "oldest",
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