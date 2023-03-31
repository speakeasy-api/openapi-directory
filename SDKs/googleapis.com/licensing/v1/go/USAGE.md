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

    req := operations.LicensingLicenseAssignmentsDeleteRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PrettyPrint: false,
        ProductID: "illum",
        QuotaUser: "vel",
        SkuID: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
        UserID: "iure",
    }

    ctx := context.Background()
    res, err := s.LicenseAssignments.LicensingLicenseAssignmentsDelete(ctx, req, operations.LicensingLicenseAssignmentsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->