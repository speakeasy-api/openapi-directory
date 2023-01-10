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
    
    req := operations.WorkflowsProjectsLocationsListRequest{
        Security: operations.WorkflowsProjectsLocationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.WorkflowsProjectsLocationsListPathParams{
            Name: "dignissimos",
        },
        QueryParams: operations.WorkflowsProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "totam",
            Alt: "proto",
            Callback: "atque",
            Fields: "autem",
            Filter: "molestias",
            Key: "consequatur",
            OauthToken: "aliquid",
            PageSize: 6692385287967966554,
            PageToken: "reiciendis",
            PrettyPrint: true,
            QuotaUser: "sit",
            UploadType: "facilis",
            UploadProtocol: "nostrum",
        },
    }
    
    res, err := s.Projects.WorkflowsProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->