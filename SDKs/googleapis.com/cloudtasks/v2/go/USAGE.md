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
    
    req := operations.CloudtasksProjectsLocationsListRequest{
        Security: operations.CloudtasksProjectsLocationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudtasksProjectsLocationsListPathParams{
            Name: "amet",
        },
        QueryParams: operations.CloudtasksProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "culpa",
            Alt: "proto",
            Callback: "ex",
            Fields: "quod",
            Filter: "corporis",
            Key: "delectus",
            OauthToken: "architecto",
            PageSize: 2092632794924482414,
            PageToken: "aliquam",
            PrettyPrint: false,
            QuotaUser: "perferendis",
            UploadType: "voluptatem",
            UploadProtocol: "harum",
        },
    }
    
    res, err := s.Projects.CloudtasksProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->