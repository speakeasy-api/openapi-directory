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
            Name: "velit",
        },
        QueryParams: operations.WorkflowsProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "earum",
            Alt: "media",
            Callback: "magni",
            Fields: "a",
            Filter: "possimus",
            Key: "autem",
            OauthToken: "et",
            PageSize: 595808688407247426,
            PageToken: "laborum",
            PrettyPrint: true,
            QuotaUser: "modi",
            UploadType: "illo",
            UploadProtocol: "maiores",
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