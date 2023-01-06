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
    
    req := operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest{
        Security: operations.AssuredworkloadsOrganizationsLocationsOperationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AssuredworkloadsOrganizationsLocationsOperationsListPathParams{
            Name: "aut",
        },
        QueryParams: operations.AssuredworkloadsOrganizationsLocationsOperationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "quo",
            Alt: "json",
            Callback: "et",
            Fields: "ut",
            Filter: "laborum",
            Key: "incidunt",
            OauthToken: "rem",
            PageSize: 4252662740806996599,
            PageToken: "facilis",
            PrettyPrint: false,
            QuotaUser: "autem",
            UploadType: "quae",
            UploadProtocol: "temporibus",
        },
    }
    
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsOperationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->