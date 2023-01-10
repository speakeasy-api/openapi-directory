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
            Name: "error",
        },
        QueryParams: operations.LifesciencesProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "qui",
            Alt: "json",
            Callback: "praesentium",
            Fields: "hic",
            Filter: "magni",
            Key: "aut",
            OauthToken: "at",
            PageSize: 7752918628891821845,
            PageToken: "aliquam",
            PrettyPrint: false,
            QuotaUser: "exercitationem",
            UploadType: "ut",
            UploadProtocol: "sunt",
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