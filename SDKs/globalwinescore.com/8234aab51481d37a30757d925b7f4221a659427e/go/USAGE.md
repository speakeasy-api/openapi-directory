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
            Lwin: "distinctio",
            Lwin11: "quibusdam",
            Offset: 602763,
            Ordering: "-score",
            Vintage: "corrupti",
            WineID: []int64{
                423655,
                623564,
                645894,
                384382,
            },
        },
        Headers: operations.GetGlobalwinescoresLatestHeaders{
            Authorization: "iure",
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