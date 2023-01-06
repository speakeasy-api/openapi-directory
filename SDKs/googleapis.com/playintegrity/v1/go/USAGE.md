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
            PackageName: "velit",
        },
        QueryParams: operations.PlayintegrityDecodeIntegrityTokenQueryParams{
            DollarXgafv: "2",
            AccessToken: "possimus",
            Alt: "media",
            Callback: "veritatis",
            Fields: "est",
            Key: "est",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "at",
            UploadType: "doloremque",
            UploadProtocol: "consequuntur",
        },
        Request: &shared.DecodeIntegrityTokenRequest{
            IntegrityToken: "ducimus",
        },
    }
    
    res, err := s.V1.PlayintegrityDecodeIntegrityToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DecodeIntegrityTokenResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->