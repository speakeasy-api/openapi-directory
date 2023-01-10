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
            Name: "in",
        },
        QueryParams: operations.SecretmanagerProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "expedita",
            Alt: "media",
            Callback: "repellendus",
            Fields: "sint",
            Filter: "rerum",
            Key: "maiores",
            OauthToken: "et",
            PageSize: 1672131744666614647,
            PageToken: "veniam",
            PrettyPrint: true,
            QuotaUser: "qui",
            UploadType: "aut",
            UploadProtocol: "sunt",
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