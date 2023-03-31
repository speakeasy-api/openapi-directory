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

    req := operations.SiteVerificationWebResourceDeleteRequest{
        Alt: "json",
        Fields: "corrupti",
        ID: "provident",
        Key: "distinctio",
        OauthToken: "quibusdam",
        PrettyPrint: false,
        QuotaUser: "unde",
        UserIP: "nulla",
    }

    ctx := context.Background()
    res, err := s.WebResource.SiteVerificationWebResourceDelete(ctx, req, operations.SiteVerificationWebResourceDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->