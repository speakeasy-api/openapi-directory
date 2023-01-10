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
    
    req := operations.EventarcProjectsLocationsListRequest{
        Security: operations.EventarcProjectsLocationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.EventarcProjectsLocationsListPathParams{
            Name: "saepe",
        },
        QueryParams: operations.EventarcProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "maxime",
            Alt: "proto",
            Callback: "aut",
            Fields: "et",
            Filter: "fugit",
            Key: "nostrum",
            OauthToken: "quia",
            PageSize: 862857162017981555,
            PageToken: "quia",
            PrettyPrint: false,
            QuotaUser: "assumenda",
            UploadType: "doloremque",
            UploadProtocol: "quia",
        },
    }
    
    res, err := s.Projects.EventarcProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->