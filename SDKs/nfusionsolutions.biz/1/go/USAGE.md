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
            Version: "exercitationem",
        },
        QueryParams: operations.GetAPIVVersionCurrenciesHistoryQueryParams{
            End: "2006-07-13T17:38:01Z",
            Format: "xml",
            Interval: "voluptatum",
            Pairs: "neque",
            Start: "2009-08-05T13:18:10Z",
            Token: "odit",
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