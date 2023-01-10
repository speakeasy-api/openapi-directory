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
    
    req := operations.GkehubProjectsLocationsListRequest{
        Security: operations.GkehubProjectsLocationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GkehubProjectsLocationsListPathParams{
            Name: "dolorem",
        },
        QueryParams: operations.GkehubProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "voluptatem",
            Alt: "json",
            Callback: "dolores",
            Fields: "quia",
            Filter: "ex",
            Key: "aliquid",
            OauthToken: "aliquid",
            PageSize: 88768073244243036,
            PageToken: "culpa",
            PrettyPrint: true,
            QuotaUser: "maiores",
            UploadType: "qui",
            UploadProtocol: "voluptatem",
        },
    }
    
    res, err := s.Projects.GkehubProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->