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
            Option1: &shared.SecurityOption1{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                APISecret: shared.SchemeAPISecret{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            },
        }),
    )

    req := operations.SmsConversionRequest{
        QueryParams: operations.SmsConversionQueryParams{
            Delivered: "0",
            MessageID: "provident",
            Timestamp: "distinctio",
        },
    }

    ctx := context.Background()
    res, err := s.SMSConversion.SmsConversion(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->