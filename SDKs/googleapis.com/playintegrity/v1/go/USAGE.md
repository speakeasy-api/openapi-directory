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
        Security: operations.PlayintegrityDecodeIntegrityTokenSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.PlayintegrityDecodeIntegrityTokenPathParams{
            PackageName: "unde",
        },
        QueryParams: operations.PlayintegrityDecodeIntegrityTokenQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.DecodeIntegrityTokenRequest{
            IntegrityToken: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.V1.PlayintegrityDecodeIntegrityToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DecodeIntegrityTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->