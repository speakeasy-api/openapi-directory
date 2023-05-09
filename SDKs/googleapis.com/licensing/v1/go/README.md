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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LicenseAssignments.LicensingLicenseAssignmentsDelete(ctx, operations.LicensingLicenseAssignmentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "illum",
        QuotaUser: sdk.String("vel"),
        SkuID: "error",
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("suscipit"),
        UserID: "iure",
    }, operations.LicensingLicenseAssignmentsDeleteSecurity{
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


### [LicenseAssignments](docs/licenseassignments/README.md)

* [LicensingLicenseAssignmentsDelete](docs/licenseassignments/README.md#licensinglicenseassignmentsdelete) - Revoke a license.
* [LicensingLicenseAssignmentsGet](docs/licenseassignments/README.md#licensinglicenseassignmentsget) - Get a specific user's license by product SKU.
* [LicensingLicenseAssignmentsInsert](docs/licenseassignments/README.md#licensinglicenseassignmentsinsert) - Assign a license.
* [LicensingLicenseAssignmentsListForProduct](docs/licenseassignments/README.md#licensinglicenseassignmentslistforproduct) - List all users assigned licenses for a specific product SKU.
* [LicensingLicenseAssignmentsListForProductAndSku](docs/licenseassignments/README.md#licensinglicenseassignmentslistforproductandsku) - List all users assigned licenses for a specific product SKU.
* [LicensingLicenseAssignmentsPatch](docs/licenseassignments/README.md#licensinglicenseassignmentspatch) - Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
* [LicensingLicenseAssignmentsUpdate](docs/licenseassignments/README.md#licensinglicenseassignmentsupdate) - Reassign a user's product SKU with a different SKU in the same product.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
