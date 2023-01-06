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
            Name: "et",
        },
        QueryParams: operations.WorkflowsProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "saepe",
            Alt: "json",
            Callback: "non",
            Fields: "consequatur",
            Filter: "esse",
            Key: "molestias",
            OauthToken: "nemo",
            PageSize: 7405723945059452399,
            PageToken: "vel",
            PrettyPrint: false,
            QuotaUser: "nostrum",
            UploadType: "earum",
            UploadProtocol: "autem",
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