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
        Security: operations.GroupsSettingsGroupsGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GroupsSettingsGroupsGetPathParams{
            GroupUniqueID: "unde",
        },
        QueryParams: operations.GroupsSettingsGroupsGetQueryParams{
            Alt: "json",
            Fields: "porro",
            Key: "nulla",
            OauthToken: "id",
            PrettyPrint: false,
            QuotaUser: "vero",
            UserIP: "perspiciatis",
        },
    }

    ctx := context.Background()
    res, err := s.Groups.GroupsSettingsGroupsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Groups != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->