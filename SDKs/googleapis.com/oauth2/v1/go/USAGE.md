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

    req := operations.Oauth2TokeninfoRequest{
        AccessToken: "corrupti",
        Alt: "json",
        Fields: "provident",
        IDToken: "distinctio",
        Key: "quibusdam",
        OauthToken: "unde",
        PrettyPrint: false,
        QuotaUser: "nulla",
        UserIP: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Oauth2Tokeninfo(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Tokeninfo != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->