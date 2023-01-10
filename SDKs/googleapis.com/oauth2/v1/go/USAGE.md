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
            AccessToken: "doloribus",
            Alt: "json",
            Fields: "autem",
            IDToken: "adipisci",
            Key: "accusantium",
            OauthToken: "ut",
            PrettyPrint: false,
            QuotaUser: "quaerat",
            UserIP: "et",
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