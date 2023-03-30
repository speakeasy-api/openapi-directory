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
            Token: shared.SchemeToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CurrenciesHistoryGETRequest{
        QueryParams: operations.CurrenciesHistoryGETQueryParams{
            End: "2022-09-10T17:11:35.327Z",
            Format: "xml",
            Interval: "porro",
            Pairs: "nulla",
            Start: "2022-08-22T00:35:32.341Z",
        },
    }

    ctx := context.Background()
    res, err := s.Currencies.CurrenciesHistoryGET(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.IntervalCollectionResponses != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->