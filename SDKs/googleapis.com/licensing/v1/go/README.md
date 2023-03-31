# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/licensing/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### LicenseAssignments

* `LicensingLicenseAssignmentsDelete` - Revoke a license.
* `LicensingLicenseAssignmentsGet` - Get a specific user's license by product SKU.
* `LicensingLicenseAssignmentsInsert` - Assign a license.
* `LicensingLicenseAssignmentsListForProduct` - List all users assigned licenses for a specific product SKU.
* `LicensingLicenseAssignmentsListForProductAndSku` - List all users assigned licenses for a specific product SKU.
* `LicensingLicenseAssignmentsPatch` - Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
* `LicensingLicenseAssignmentsUpdate` - Reassign a user's product SKU with a different SKU in the same product.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
