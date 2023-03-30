<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            Name: "corrupti",
        },
        QueryParams: operations.AssuredworkloadsOrganizationsLocationsOperationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Filter: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PageSize: 623564,
            PageToken: "deserunt",
            PrettyPrint: false,
            QuotaUser: "suscipit",
            UploadType: "iure",
            UploadProtocol: "magnam",
        },
    }

    ctx := context.Background()
    res, err := s.Organizations.AssuredworkloadsOrganizationsLocationsOperationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->