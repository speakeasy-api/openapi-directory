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
    
    req := operations.StsIntrospectRequest{
        QueryParams: operations.StsIntrospectQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.GoogleIdentityStsV1IntrospectTokenRequest{
            Token: "rerum",
            TokenTypeHint: "dicta",
        },
    }
    
    res, err := s.V1.StsIntrospect(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIdentityStsV1IntrospectTokenResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->