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
            Name: "omnis",
        },
        QueryParams: operations.GkehubProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "et",
            Alt: "json",
            Callback: "voluptas",
            Fields: "eligendi",
            Filter: "architecto",
            Key: "explicabo",
            OauthToken: "nostrum",
            PageSize: 9067063275803007797,
            PageToken: "repudiandae",
            PrettyPrint: true,
            QuotaUser: "ut",
            UploadType: "rerum",
            UploadProtocol: "est",
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