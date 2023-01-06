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
    
    req := operations.LifesciencesProjectsLocationsListRequest{
        Security: operations.LifesciencesProjectsLocationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.LifesciencesProjectsLocationsListPathParams{
            Name: "consequuntur",
        },
        QueryParams: operations.LifesciencesProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "qui",
            Alt: "json",
            Callback: "dignissimos",
            Fields: "explicabo",
            Filter: "qui",
            Key: "illo",
            OauthToken: "qui",
            PageSize: 3948882714508759682,
            PageToken: "et",
            PrettyPrint: true,
            QuotaUser: "cupiditate",
            UploadType: "fugiat",
            UploadProtocol: "hic",
        },
    }
    
    res, err := s.Projects.LifesciencesProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->