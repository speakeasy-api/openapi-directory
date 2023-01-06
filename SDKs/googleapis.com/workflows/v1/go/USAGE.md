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
            Name: "unde",
        },
        QueryParams: operations.WorkflowsProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "corrupti",
            Alt: "proto",
            Callback: "nihil",
            Fields: "laborum",
            Filter: "quam",
            Key: "veritatis",
            OauthToken: "dignissimos",
            PageSize: 1393963312073455910,
            PageToken: "a",
            PrettyPrint: false,
            QuotaUser: "consequatur",
            UploadType: "laborum",
            UploadProtocol: "et",
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