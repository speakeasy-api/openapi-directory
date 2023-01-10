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
            Name: "minus",
        },
        QueryParams: operations.AssuredworkloadsOrganizationsLocationsOperationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "nisi",
            Alt: "proto",
            Callback: "ducimus",
            Fields: "nulla",
            Filter: "non",
            Key: "et",
            OauthToken: "dolore",
            PageSize: 8865056654676877038,
            PageToken: "non",
            PrettyPrint: false,
            QuotaUser: "quisquam",
            UploadType: "cumque",
            UploadProtocol: "aspernatur",
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