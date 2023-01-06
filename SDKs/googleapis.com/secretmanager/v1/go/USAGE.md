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
            Name: "est",
        },
        QueryParams: operations.SecretmanagerProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "ducimus",
            Alt: "json",
            Callback: "id",
            Fields: "cupiditate",
            Filter: "dolorem",
            Key: "omnis",
            OauthToken: "esse",
            PageSize: 5870066211296627357,
            PageToken: "soluta",
            PrettyPrint: true,
            QuotaUser: "quibusdam",
            UploadType: "libero",
            UploadProtocol: "unde",
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