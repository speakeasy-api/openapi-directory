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
        QueryParams: operations.Oauth2TokeninfoQueryParams{
            AccessToken: "unde",
            Alt: "json",
            Fields: "porro",
            IDToken: "nulla",
            Key: "id",
            OauthToken: "vero",
            PrettyPrint: false,
            QuotaUser: "perspiciatis",
            UserIP: "nulla",
        },
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