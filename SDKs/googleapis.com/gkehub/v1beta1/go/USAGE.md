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
            Name: "eligendi",
        },
        QueryParams: operations.GkehubProjectsLocationsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "ducimus",
            Alt: "media",
            Callback: "quaerat",
            Fields: "rerum",
            Filter: "sint",
            Key: "autem",
            OauthToken: "sapiente",
            PageSize: 6967151006170035181,
            PageToken: "repellat",
            PrettyPrint: false,
            QuotaUser: "non",
            UploadType: "praesentium",
            UploadProtocol: "maxime",
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