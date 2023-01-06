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
    
    req := operations.AppsactivityActivitiesListRequest{
        Security: operations.AppsactivityActivitiesListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.AppsactivityActivitiesListQueryParams{
            Alt: "json",
            DriveAncestorID: "eligendi",
            DriveFileID: "voluptatem",
            Fields: "eaque",
            GroupingStrategy: "none",
            Key: "expedita",
            OauthToken: "quaerat",
            PageSize: 4107792366515620763,
            PageToken: "doloremque",
            PrettyPrint: true,
            QuotaUser: "et",
            Source: "beatae",
            UserID: "occaecati",
            UserIP: "autem",
        },
    }
    
    res, err := s.Activities.AppsactivityActivitiesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActivitiesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->