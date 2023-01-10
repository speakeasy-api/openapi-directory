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
            PackageName: "nobis",
        },
        QueryParams: operations.PlayintegrityDecodeIntegrityTokenQueryParams{
            DollarXgafv: "1",
            AccessToken: "tenetur",
            Alt: "proto",
            Callback: "occaecati",
            Fields: "sequi",
            Key: "inventore",
            OauthToken: "necessitatibus",
            PrettyPrint: false,
            QuotaUser: "accusantium",
            UploadType: "qui",
            UploadProtocol: "voluptas",
        },
        Request: &shared.DecodeIntegrityTokenRequest{
            IntegrityToken: "mollitia",
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