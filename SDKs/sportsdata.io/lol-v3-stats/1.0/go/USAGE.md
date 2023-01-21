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
                APIKeyHeader: &shared.SchemeAPIKeyHeader{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AreasCountriesRequest{
        PathParams: operations.AreasCountriesPathParams{
            Format: "xml",
        },
    }
    
    res, err := s.AreasCountries(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Areas != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->