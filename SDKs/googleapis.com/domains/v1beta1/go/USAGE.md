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
            Name: "labore",
        },
        QueryParams: operations.DomainsProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "aut",
            Alt: "json",
            Callback: "doloremque",
            Fields: "sunt",
            Filter: "eius",
            Key: "voluptatum",
            OauthToken: "ullam",
            PageSize: 3597737839668063849,
            PageToken: "vel",
            PrettyPrint: false,
            QuotaUser: "rerum",
            UploadType: "nemo",
            UploadProtocol: "reprehenderit",
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