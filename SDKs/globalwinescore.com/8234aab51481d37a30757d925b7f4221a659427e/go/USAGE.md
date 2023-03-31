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
            TokenAuthentication: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetGlobalwinescoresLatestRequest{
        Authorization: "corrupti",
        Color: "white",
        IsPrimeurs: false,
        Limit: 715190,
        Lwin: "quibusdam",
        Lwin11: "unde",
        Offset: 857946,
        Ordering: "score",
        Vintage: "illum",
        WineID: []int64{
            623564,
            645894,
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