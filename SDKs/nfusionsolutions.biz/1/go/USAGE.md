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
            Version: "sit",
        },
        QueryParams: operations.GetAPIVVersionCurrenciesHistoryQueryParams{
            End: "2006-05-01T09:38:06Z",
            Format: "xml",
            Interval: "expedita",
            Pairs: "consequuntur",
            Start: "2003-04-20T23:11:44Z",
            Token: "expedita",
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