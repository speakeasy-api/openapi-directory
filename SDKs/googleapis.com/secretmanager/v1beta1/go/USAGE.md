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
    
    req := operations.SecretmanagerProjectsLocationsListRequest{
        Security: operations.SecretmanagerProjectsLocationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.SecretmanagerProjectsLocationsListPathParams{
            Name: "laudantium",
        },
        QueryParams: operations.SecretmanagerProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "omnis",
            Alt: "proto",
            Callback: "accusamus",
            Fields: "atque",
            Filter: "et",
            Key: "dolores",
            OauthToken: "voluptates",
            PageSize: 6245272018620454410,
            PageToken: "occaecati",
            PrettyPrint: true,
            QuotaUser: "neque",
            UploadType: "dolorum",
            UploadProtocol: "ea",
        },
    }
    
    res, err := s.Projects.SecretmanagerProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->