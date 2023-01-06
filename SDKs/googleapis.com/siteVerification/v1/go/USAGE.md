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
    
    req := operations.SiteVerificationWebResourceDeleteRequest{
        Security: operations.SiteVerificationWebResourceDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.SiteVerificationWebResourceDeletePathParams{
            ID: "autem",
        },
        QueryParams: operations.SiteVerificationWebResourceDeleteQueryParams{
            Alt: "json",
            Fields: "tempore",
            Key: "labore",
            OauthToken: "in",
            PrettyPrint: false,
            QuotaUser: "illo",
            UserIP: "doloremque",
        },
    }
    
    res, err := s.WebResource.SiteVerificationWebResourceDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->