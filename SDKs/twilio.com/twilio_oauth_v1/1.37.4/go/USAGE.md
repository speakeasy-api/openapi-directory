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
            ClientSecret: "sit",
            ClientSid: "voluptas",
            Code: "culpa",
            CodeVerifier: "expedita",
            DeviceCode: "consequuntur",
            DeviceID: "dolor",
            GrantType: "expedita",
            RefreshToken: "voluptas",
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