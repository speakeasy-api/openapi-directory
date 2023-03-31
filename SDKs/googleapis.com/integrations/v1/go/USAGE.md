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
    }

    ctx := context.Background()
    res, err := s.Callback.IntegrationsCallbackGenerateToken(ctx, req, operations.IntegrationsCallbackGenerateTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudIntegrationsV1alphaGenerateTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->