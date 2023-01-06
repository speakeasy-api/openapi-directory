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
            Name: "nemo",
        },
        QueryParams: operations.ServicedirectoryProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "ipsam",
            Alt: "proto",
            Callback: "ipsam",
            Fields: "iure",
            Filter: "tempora",
            Key: "pariatur",
            OauthToken: "quisquam",
            PageSize: 8299801255683559147,
            PageToken: "cum",
            PrettyPrint: false,
            QuotaUser: "ullam",
            UploadType: "expedita",
            UploadProtocol: "atque",
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