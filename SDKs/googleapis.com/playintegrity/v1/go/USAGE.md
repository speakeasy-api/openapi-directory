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

    req := operations.PlayintegrityDecodeIntegrityTokenRequest{
        DollarXgafv: "2",
        DecodeIntegrityTokenRequest: &shared.DecodeIntegrityTokenRequest{
            IntegrityToken: "provident",
        },
        AccessToken: "distinctio",
        Alt: "proto",
        Callback: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PackageName: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.V1.PlayintegrityDecodeIntegrityToken(ctx, req, operations.PlayintegrityDecodeIntegrityTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DecodeIntegrityTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->