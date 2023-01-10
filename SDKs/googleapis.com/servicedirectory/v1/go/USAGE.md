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
            Name: "quia",
        },
        QueryParams: operations.ServicedirectoryProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "media",
            Callback: "cumque",
            Fields: "provident",
            Filter: "atque",
            Key: "ut",
            OauthToken: "dolor",
            PageSize: 81552667699180543,
            PageToken: "voluptates",
            PrettyPrint: true,
            QuotaUser: "nesciunt",
            UploadType: "laudantium",
            UploadProtocol: "nam",
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