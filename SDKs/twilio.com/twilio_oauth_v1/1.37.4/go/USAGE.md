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
    
    req := operations.CreateTokenRequest{
        Security: operations.CreateTokenSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateTokenCreateTokenRequest{
            ClientSecret: "rerum",
            ClientSid: "tempore",
            Code: "repellat",
            CodeVerifier: "dicta",
            DeviceCode: "nihil",
            DeviceID: "dolor",
            GrantType: "ab",
            RefreshToken: "qui",
        },
    }
    
    res, err := s.CreateToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.OauthV1Token != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->