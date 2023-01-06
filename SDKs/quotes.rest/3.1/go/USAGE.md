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
    
    req := operations.DeleteQuoteRequest{
        Security: operations.DeleteQuoteSecurity{
            XTheySaidSoAPISecret: shared.SchemeXTheySaidSoAPISecret{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.DeleteQuoteQueryParams{
            ID: "nihil",
        },
    }
    
    res, err := s.PrivateQuotes.DeleteQuote(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->