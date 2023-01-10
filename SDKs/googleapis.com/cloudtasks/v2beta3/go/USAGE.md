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
            Name: "culpa",
        },
        QueryParams: operations.CloudtasksProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "magnam",
            Alt: "media",
            Callback: "mollitia",
            Fields: "commodi",
            Filter: "cum",
            Key: "error",
            OauthToken: "ut",
            PageSize: 2260814708668604765,
            PageToken: "officiis",
            PrettyPrint: false,
            QuotaUser: "aut",
            UploadType: "quo",
            UploadProtocol: "nihil",
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