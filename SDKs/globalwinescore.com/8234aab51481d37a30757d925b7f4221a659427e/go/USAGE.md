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
            TokenAuthentication: shared.SchemeTokenAuthentication{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetGlobalwinescoresLatestRequest{
        QueryParams: operations.GetGlobalwinescoresLatestQueryParams{
            Color: "white",
            IsPrimeurs: false,
            Limit: 592845,
            Lwin: "porro",
            Lwin11: "nulla",
            Offset: 602763,
            Ordering: "-score",
            Vintage: "perspiciatis",
            WineID: []int64{
                423655,
                623564,
                645894,
                384382,
            },
        },
        Headers: operations.GetGlobalwinescoresLatestHeaders{
            Authorization: "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.GlobalWineScore.GetGlobalwinescoresLatest(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->