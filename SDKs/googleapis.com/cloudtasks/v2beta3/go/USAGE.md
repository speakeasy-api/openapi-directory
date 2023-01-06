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
            Name: "explicabo",
        },
        QueryParams: operations.CloudtasksProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "maiores",
            Alt: "media",
            Callback: "praesentium",
            Fields: "saepe",
            Filter: "eos",
            Key: "ipsam",
            OauthToken: "ipsum",
            PageSize: 3900171265638121852,
            PageToken: "ut",
            PrettyPrint: false,
            QuotaUser: "qui",
            UploadType: "facere",
            UploadProtocol: "doloremque",
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