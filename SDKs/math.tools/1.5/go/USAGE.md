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
            From: 2006383342718172601,
            Number: 4241360175728352681,
            To: 2551169230147762882,
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