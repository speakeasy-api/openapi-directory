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

    req := operations.GroupsSettingsGroupsGetRequest{
        Alt: "json",
        Fields: "provident",
        GroupUniqueID: "distinctio",
        Key: "quibusdam",
        OauthToken: "unde",
        PrettyPrint: false,
        QuotaUser: "nulla",
        UserIP: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Groups.GroupsSettingsGroupsGet(ctx, req, operations.GroupsSettingsGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groups != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->