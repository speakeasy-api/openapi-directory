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
            GroupUniqueID: "sunt",
        },
        QueryParams: operations.GroupsSettingsGroupsGetQueryParams{
            Alt: "json",
            Fields: "aut",
            Key: "vel",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "maiores",
            UserIP: "et",
        },
    }
    
    res, err := s.Groups.GroupsSettingsGroupsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Groups != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->