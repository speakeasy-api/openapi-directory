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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CurrenciesHistoryGETRequest{
        End: "2021-10-25T05:21:43.948Z",
        Format: "xml",
        Interval: "quibusdam",
        Pairs: "unde",
        Start: "2021-05-14T08:28:11.899Z",
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