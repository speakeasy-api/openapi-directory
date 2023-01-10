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
            Name: "ullam",
        },
        QueryParams: operations.CloudtasksProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "reiciendis",
            Alt: "proto",
            Callback: "voluptates",
            Fields: "et",
            Filter: "fugiat",
            Key: "at",
            OauthToken: "qui",
            PageSize: 1647388063564067175,
            PageToken: "officia",
            PrettyPrint: true,
            QuotaUser: "ratione",
            UploadType: "labore",
            UploadProtocol: "cupiditate",
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