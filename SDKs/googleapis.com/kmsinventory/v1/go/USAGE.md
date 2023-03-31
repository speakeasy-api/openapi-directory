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
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        CryptoKey: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PageSize: 423655,
        PageToken: "error",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        Scope: "suscipit",
        UploadType: "iure",
        UploadProtocol: "magnam",
    }

    ctx := context.Background()
    res, err := s.Organizations.KmsinventoryOrganizationsProtectedResourcesSearch(ctx, req, operations.KmsinventoryOrganizationsProtectedResourcesSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->