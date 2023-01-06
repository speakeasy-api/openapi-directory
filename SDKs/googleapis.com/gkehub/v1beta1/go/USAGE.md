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
    
    req := operations.GkehubProjectsLocationsListRequest{
        Security: operations.GkehubProjectsLocationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GkehubProjectsLocationsListPathParams{
            Name: "quo",
        },
        QueryParams: operations.GkehubProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "laborum",
            Alt: "media",
            Callback: "maxime",
            Fields: "et",
            Filter: "sunt",
            Key: "eaque",
            OauthToken: "a",
            PageSize: 6882523907407774367,
            PageToken: "dolor",
            PrettyPrint: false,
            QuotaUser: "quibusdam",
            UploadType: "laborum",
            UploadProtocol: "qui",
        },
    }
    
    res, err := s.Projects.GkehubProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->