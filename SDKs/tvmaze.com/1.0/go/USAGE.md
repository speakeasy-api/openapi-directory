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
                Usertoken: shared.SchemeUsertoken{
                    Password: "YOUR_PASSWORD_HERE",
                    Username: "YOUR_USERNAME_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    res, err := s.Auth.GetAuthValidate(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuthValidate200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->