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
            AccessToken: "est",
            Alt: "json",
            Callback: "nostrum",
            Fields: "ea",
            Key: "omnis",
            OauthToken: "quia",
            PrettyPrint: true,
            QuotaUser: "omnis",
            UploadType: "soluta",
            UploadProtocol: "sequi",
        },
        Request: &shared.GoogleIdentityStsV1IntrospectTokenRequest{
            Token: "neque",
            TokenTypeHint: "et",
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