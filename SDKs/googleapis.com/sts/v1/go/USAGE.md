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

    req := operations.StsIntrospectRequest{
        DollarXgafv: "2",
        GoogleIdentityStsV1IntrospectTokenRequest: &shared.GoogleIdentityStsV1IntrospectTokenRequest{
            Token: "provident",
            TokenTypeHint: "distinctio",
        },
        AccessToken: "quibusdam",
        Alt: "media",
        Callback: "nulla",
        Fields: "corrupti",
        Key: "illum",
        OauthToken: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.V1.StsIntrospect(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIdentityStsV1IntrospectTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->