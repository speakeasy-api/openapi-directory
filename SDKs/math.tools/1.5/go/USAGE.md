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

    req := operations.GetNumbersBaseRequest{
        Security: operations.GetNumbersBaseSecurity{
            XMathtoolsAPISecret: shared.SchemeXMathtoolsAPISecret{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GetNumbersBaseQueryParams{
            From: 548814,
            Number: 592845,
            To: 715190,
        },
    }

    ctx := context.Background()
    res, err := s.BaseConversion.GetNumbersBase(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->