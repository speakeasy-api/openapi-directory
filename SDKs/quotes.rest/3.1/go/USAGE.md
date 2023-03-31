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

    req := operations.DeleteQuoteRequest{
        ID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.PrivateQuotes.DeleteQuote(ctx, req, operations.DeleteQuoteSecurity{
        XTheySaidSoAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->