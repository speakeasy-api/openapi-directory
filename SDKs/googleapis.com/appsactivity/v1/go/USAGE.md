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
            DriveAncestorID: "deserunt",
            DriveFileID: "porro",
            Fields: "nulla",
            GroupingStrategy: "none",
            Key: "vero",
            OauthToken: "perspiciatis",
            PageSize: 847252,
            PageToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            Source: "facilis",
            UserID: "eum",
            UserIP: "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.Activities.AppsactivityActivitiesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListActivitiesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->