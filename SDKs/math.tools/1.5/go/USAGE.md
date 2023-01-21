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
    
    req := operations.GetNumbersBaseRequest{
        Security: operations.GetNumbersBaseSecurity{
            XMathtoolsAPISecret: shared.SchemeXMathtoolsAPISecret{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GetNumbersBaseQueryParams{
            From: 8717895732742165505,
            Number: 2259404117704393152,
            To: 6050128673802995827,
        },
    }
    
    res, err := s.BaseConversion.GetNumbersBase(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->