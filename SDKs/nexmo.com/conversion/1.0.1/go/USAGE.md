<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Option1: &shared.SecurityOption1{
                    APIKey: shared.SchemeAPIKey{
                        APIKey: "YOUR_API_KEY_HERE",
                    },
                    APISecret: shared.SchemeAPISecret{
                        APIKey: "YOUR_API_KEY_HERE",
                    },
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.SmsConversionRequest{
        QueryParams: operations.SmsConversionQueryParams{
            Delivered: "eos",
            MessageID: "minima",
            Timestamp: "iure",
        },
    }
    
    res, err := s.SMSConversion.SmsConversion(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->