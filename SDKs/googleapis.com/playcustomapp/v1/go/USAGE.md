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
    
    req := operations.PlaycustomappAccountsCustomAppsCreateRequest{
        Security: operations.PlaycustomappAccountsCustomAppsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.PlaycustomappAccountsCustomAppsCreatePathParams{
            Account: "delectus",
        },
        QueryParams: operations.PlaycustomappAccountsCustomAppsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "totam",
            Alt: "proto",
            Callback: "quia",
            Fields: "id",
            Key: "sint",
            OauthToken: "amet",
            PrettyPrint: false,
            QuotaUser: "qui",
            UploadType: "vel",
            UploadProtocol: "porro",
        },
        Request: []byte("tenetur"),
    }
    
    res, err := s.Accounts.PlaycustomappAccountsCustomAppsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomApp != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->