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
    
    req := operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest{
        Security: operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams{
            Group: "culpa",
        },
        QueryParams: operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams{
            DollarXgafv: "1",
            AccessToken: "tempora",
            Alt: "proto",
            Callback: "mollitia",
            Fields: "consequatur",
            Key: "excepturi",
            OauthToken: "itaque",
            PrettyPrint: true,
            QuotaUser: "exercitationem",
            UploadType: "ipsam",
            UploadProtocol: "soluta",
        },
        Request: &shared.AddGroupMigrationRequest{
            MigratingVM: "rerum",
        },
    }
    
    res, err := s.Projects.VmmigrationProjectsLocationsGroupsAddGroupMigration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->