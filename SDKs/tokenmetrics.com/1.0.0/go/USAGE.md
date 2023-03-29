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

    req := operations.CorrelationRequest{
        QueryParams: operations.CorrelationQueryParams{
            Limit: "1000",
            Tokens: "3375, 3306",
        },
    }

    ctx := context.Background()
    res, err := s.Correlation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->