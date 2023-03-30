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

    req := operations.CalcSigmaRsvExchangeRequest{
        PathParams: operations.CalcSigmaRsvExchangePathParams{
            Amount: 548814,
        },
    }

    ctx := context.Background()
    res, err := s.AgeUsd.CalcSigmaRsvExchange(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->