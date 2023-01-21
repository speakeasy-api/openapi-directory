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
    
    req := operations.Oauth2TokeninfoRequest{
        QueryParams: operations.Oauth2TokeninfoQueryParams{
            AccessToken: "sit",
            Alt: "json",
            Fields: "culpa",
            IDToken: "expedita",
            Key: "consequuntur",
            OauthToken: "dolor",
            PrettyPrint: true,
            QuotaUser: "voluptas",
            UserIP: "fugit",
        },
    }
    
    res, err := s.Oauth2Tokeninfo(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Tokeninfo != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->