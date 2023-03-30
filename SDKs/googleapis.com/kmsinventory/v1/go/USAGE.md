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

    req := operations.KmsinventoryOrganizationsProtectedResourcesSearchRequest{
        Security: operations.KmsinventoryOrganizationsProtectedResourcesSearchSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.KmsinventoryOrganizationsProtectedResourcesSearchPathParams{
            Scope: "corrupti",
        },
        QueryParams: operations.KmsinventoryOrganizationsProtectedResourcesSearchQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            CryptoKey: "nulla",
            Fields: "corrupti",
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
    res, err := s.Organizations.KmsinventoryOrganizationsProtectedResourcesSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->