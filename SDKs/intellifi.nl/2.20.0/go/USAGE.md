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
                CookieSid: &shared.SchemeCookieSid{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    res, err := s.Authinfo.GetAuthinfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthinfo200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->