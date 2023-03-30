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
        QueryParams: operations.GetV2AccountStagesJSONQueryParams{
            Ids: []int64{
                592845,
                715190,
                844266,
            },
            IncludePagingCounts: false,
            LimitPagingCounts: false,
            Page: 602763,
            PerPage: 857946,
            SortBy: "perspiciatis",
            SortDirection: "nulla",
            UpdatedAt: []string{
                "fuga",
                "facilis",
            },
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