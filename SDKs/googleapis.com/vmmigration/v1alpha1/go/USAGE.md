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
            Group: "iste",
        },
        QueryParams: operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams{
            DollarXgafv: "2",
            AccessToken: "odit",
            Alt: "proto",
            Callback: "ut",
            Fields: "corporis",
            Key: "fugit",
            OauthToken: "placeat",
            PrettyPrint: false,
            QuotaUser: "dignissimos",
            UploadType: "neque",
            UploadProtocol: "rerum",
        },
        Request: &shared.AddGroupMigrationRequest{
            MigratingVM: "et",
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