<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Code: "unde",
            Fields: "nulla",
            GcpProjectID: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            Product: "APIGEE",
            QuotaUser: "deserunt",
            RedirectURI: "suscipit",
            State: "iure",
            UploadType: "magnam",
            UploadProtocol: "debitis",
        },
    }

    ctx := context.Background()
    res, err := s.Callback.IntegrationsCallbackGenerateToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaGenerateTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->