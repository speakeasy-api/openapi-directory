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
            DollarXgafv: "2",
            AccessToken: "non",
            Alt: "json",
            Callback: "nihil",
            Fields: "non",
            Key: "necessitatibus",
            OauthToken: "nemo",
            PrettyPrint: true,
            QuotaUser: "harum",
            UploadType: "aut",
            UploadProtocol: "aperiam",
        },
        Request: &shared.GoogleIdentityStsV1IntrospectTokenRequest{
            Token: "dignissimos",
            TokenTypeHint: "expedita",
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