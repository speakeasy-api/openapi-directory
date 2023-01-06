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
            From: 6103547779745543967,
            Number: 6357648265329028289,
            To: 4433821285997355071,
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