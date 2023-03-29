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
        QueryParams: operations.StsIntrospectQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.GoogleIdentityStsV1IntrospectTokenRequest{
            Token: "facilis",
            TokenTypeHint: "eum",
        },
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