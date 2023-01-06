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
            Name: "iusto",
        },
        QueryParams: operations.DomainsProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "expedita",
            Alt: "media",
            Callback: "delectus",
            Fields: "ipsa",
            Filter: "velit",
            Key: "aut",
            OauthToken: "beatae",
            PageSize: 4798602002420613429,
            PageToken: "vel",
            PrettyPrint: false,
            QuotaUser: "aut",
            UploadType: "a",
            UploadProtocol: "et",
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