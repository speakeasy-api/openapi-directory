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
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
                APISecret: shared.SchemeAPISecret{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BuyANumberRequest{
        Request: shared.NumberDetails{
            Country: "repellendus",
            Msisdn: "minima",
            TargetAPIKey: "consequatur",
        },
    }
    
    res, err := s.BuyANumber(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->