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
    
    req := operations.IntegrationsCallbackGenerateTokenRequest{
        Security: operations.IntegrationsCallbackGenerateTokenSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.IntegrationsCallbackGenerateTokenQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Code: "consequuntur",
            Fields: "dolor",
            GcpProjectID: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            Product: "UNSPECIFIED_PRODUCT",
            QuotaUser: "rerum",
            RedirectURI: "dicta",
            State: "debitis",
            UploadType: "voluptatum",
            UploadProtocol: "et",
        },
    }
    
    res, err := s.Callback.IntegrationsCallbackGenerateToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaGenerateTokenResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->