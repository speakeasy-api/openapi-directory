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
    
    req := operations.ServicedirectoryProjectsLocationsListRequest{
        Security: operations.ServicedirectoryProjectsLocationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ServicedirectoryProjectsLocationsListPathParams{
            Name: "fuga",
        },
        QueryParams: operations.ServicedirectoryProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "voluptates",
            Alt: "media",
            Callback: "qui",
            Fields: "consequuntur",
            Filter: "quibusdam",
            Key: "aut",
            OauthToken: "rerum",
            PageSize: 6822616350411676285,
            PageToken: "corporis",
            PrettyPrint: true,
            QuotaUser: "provident",
            UploadType: "velit",
            UploadProtocol: "et",
        },
    }
    
    res, err := s.Projects.ServicedirectoryProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->