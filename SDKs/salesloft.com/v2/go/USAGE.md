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

    req := operations.GetV2AccountStagesJSONRequest{
        Ids: []int64{
            592845,
            715190,
            844266,
        },
        IncludePagingCounts: false,
        LimitPagingCounts: false,
        Page: 602763,
        PerPage: 857946,
        SortBy: "corrupti",
        SortDirection: "illum",
        UpdatedAt: []string{
            "error",
            "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.AccountStages.GetV2AccountStagesJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->