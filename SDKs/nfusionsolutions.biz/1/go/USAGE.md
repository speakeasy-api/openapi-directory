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

    req := operations.GetAPIVVersionCurrenciesHistoryRequest{
        PathParams: operations.GetAPIVVersionCurrenciesHistoryPathParams{
            Version: "unde",
        },
        QueryParams: operations.GetAPIVVersionCurrenciesHistoryQueryParams{
            End: "2022-08-25T03:26:03.964Z",
            Format: "xml",
            Interval: "nulla",
            Pairs: "id",
            Start: "2022-05-20T09:08:58.984Z",
            Token: "perspiciatis",
        },
    }

    ctx := context.Background()
    res, err := s.Currencies.GetAPIVVersionCurrenciesHistory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.IntervalCollectionResponses != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->