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
            Group: "eum",
        },
        QueryParams: operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams{
            DollarXgafv: "1",
            AccessToken: "veniam",
            Alt: "media",
            Callback: "ducimus",
            Fields: "necessitatibus",
            Key: "dolor",
            OauthToken: "consectetur",
            PrettyPrint: true,
            QuotaUser: "qui",
            UploadType: "facere",
            UploadProtocol: "voluptas",
        },
        Request: &shared.AddGroupMigrationRequest{
            MigratingVM: "perferendis",
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