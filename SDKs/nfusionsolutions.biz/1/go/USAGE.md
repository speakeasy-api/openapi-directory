<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetAPIVVersionCurrenciesHistoryRequest{
        PathParams: operations.GetAPIVVersionCurrenciesHistoryPathParams{
            Version: "dolore",
        },
        QueryParams: operations.GetAPIVVersionCurrenciesHistoryQueryParams{
            End: "2010-01-25T22:13:49Z",
            Format: "json",
            Interval: "et",
            Pairs: "omnis",
            Start: "1983-11-30T07:57:18Z",
            Token: "autem",
        },
    }
    
    res, err := s.Currencies.GetAPIVVersionCurrenciesHistory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.IntervalCollectionResponses != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->