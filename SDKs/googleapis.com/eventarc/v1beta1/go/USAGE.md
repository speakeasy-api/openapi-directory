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
            Name: "officia",
        },
        QueryParams: operations.EventarcProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "recusandae",
            Alt: "media",
            Callback: "itaque",
            Fields: "velit",
            Filter: "fugiat",
            Key: "mollitia",
            OauthToken: "omnis",
            PageSize: 4390550923259112561,
            PageToken: "error",
            PrettyPrint: true,
            QuotaUser: "accusantium",
            UploadType: "et",
            UploadProtocol: "blanditiis",
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