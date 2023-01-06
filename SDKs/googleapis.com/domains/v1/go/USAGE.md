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
    
    req := operations.DomainsProjectsLocationsListRequest{
        Security: operations.DomainsProjectsLocationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DomainsProjectsLocationsListPathParams{
            Name: "adipisci",
        },
        QueryParams: operations.DomainsProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "aut",
            Alt: "json",
            Callback: "id",
            Fields: "minima",
            Filter: "perspiciatis",
            Key: "dolor",
            OauthToken: "dicta",
            PageSize: 4868669579381336602,
            PageToken: "similique",
            PrettyPrint: false,
            QuotaUser: "rerum",
            UploadType: "sapiente",
            UploadProtocol: "animi",
        },
    }
    
    res, err := s.Projects.DomainsProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->