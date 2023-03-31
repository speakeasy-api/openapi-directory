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

    req := operations.CalendarACLDeleteRequest{
        Alt: "json",
        CalendarID: "corrupti",
        Fields: "provident",
        Key: "distinctio",
        OauthToken: "quibusdam",
        PrettyPrint: false,
        QuotaUser: "unde",
        RuleID: "nulla",
        UserIP: "corrupti",
    }

    ctx := context.Background()
    res, err := s.ACL.CalendarACLDelete(ctx, req, operations.CalendarACLDeleteSecurity{
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