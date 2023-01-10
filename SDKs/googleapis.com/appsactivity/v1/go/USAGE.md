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
            DriveAncestorID: "et",
            DriveFileID: "eveniet",
            Fields: "corrupti",
            GroupingStrategy: "none",
            Key: "itaque",
            OauthToken: "fugiat",
            PageSize: 9061303465946652355,
            PageToken: "quod",
            PrettyPrint: false,
            QuotaUser: "pariatur",
            Source: "aut",
            UserID: "et",
            UserIP: "eum",
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