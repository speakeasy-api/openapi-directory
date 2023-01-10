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
            Name: "aperiam",
        },
        QueryParams: operations.SecretmanagerProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "veritatis",
            Alt: "json",
            Callback: "vero",
            Fields: "expedita",
            Filter: "placeat",
            Key: "distinctio",
            OauthToken: "qui",
            PageSize: 2875379615129349522,
            PageToken: "et",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "velit",
            UploadProtocol: "porro",
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