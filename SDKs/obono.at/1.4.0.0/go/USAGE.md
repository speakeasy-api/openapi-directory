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
                Jwt: shared.SchemeJwt{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetAuthRequest{
        Security: operations.GetAuthSecurity{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
    }
    
    res, err := s.Auth.GetAuth(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->