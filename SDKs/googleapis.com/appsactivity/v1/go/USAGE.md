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
            DriveAncestorID: "voluptas",
            DriveFileID: "culpa",
            Fields: "expedita",
            GroupingStrategy: "none",
            Key: "dolor",
            OauthToken: "expedita",
            PageSize: 6044372234677422456,
            PageToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            Source: "rerum",
            UserID: "dicta",
            UserIP: "debitis",
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