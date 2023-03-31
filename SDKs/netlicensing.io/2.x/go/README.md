# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/netlicensing.io/2.x/go
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

    req := operations.CreateLicenseRequestBody{
        Active: false,
        Currency: "corrupti",
        Hidden: false,
        LicenseTemplateNumber: "provident",
        LicenseeNumber: "distinctio",
        Name: "quibusdam",
        Number: "unde",
        Parentfeature: "nulla",
        Price: 5448.83,
        Quantity: "illum",
        StartDate: "2022-05-18T09:34:54.894Z",
        TimeVolume: "deserunt",
        TimeVolumePeriod: "suscipit",
        UsedQuantity: "iure",
    }

    ctx := context.Background()
    res, err := s.License.CreateLicense(ctx, req, operations.CreateLicenseSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### License

* `CreateLicense` - Create License
* `DeleteLicense` - Delete License
* `GetLicense` - Get License
* `ListLicenses` - List Licenses
* `UpdateLicense` - Update License

### LicenseTemplate

* `CreateLicenseTemplate` - Create License Template
* `DeleteLicenseTemplate` - Delete License Template
* `GetLicenseTemplate` - Get License Template
* `ListLicenseTemplates` - List License Templates
* `UpdateLicenseTemplate` - Update License Template

### Licensee

* `CreateLicensee` - Create Licensee
* `DeleteLicensee` - Delete Licensee
* `GetLicensee` - Get Licensee
* `ListLicensees` - List Licensees
* `TransferLicenses` - Transfer Licenses
* `UpdateLicensee` - Update Licensee
* `ValidateLicensee` - Validate Licensee

### PaymentMethod

* `GetPaymentMethod` - Get Payment Method
* `ListPaymentMethods` - List Payment Methods
* `UpdatePaymentMethod` - Update Payment Method

### Product

* `CreateProduct` - Create Product
* `DeleteProduct` - Delete Product
* `ListProducts` - List Products
* `ProductNumber` - Get Product
* `UpdateProduct` - Update Product

### ProductModule

* `CreateProductModule` - Create Product Module
* `DeleteProductModule` - Delete Product Module
* `GetProductModule` - Get Product Module
* `ListProductModules` - List Product Modules
* `UpdateProductModule` - Update Product Module

### Token

* `CreateToken` - Create token
* `DeleteToken` - Delete token
* `GetToken` - Get token
* `ListTokens` - List Tokens

### Transaction

* `CreateTransaction` - Create Transaction
* `GetTransaction` - Get Transaction 
* `ListTransactions` - List Transactions
* `UpdateTransaction` - Update Transaction

### Utility

* `LicenseTypes` - List License Types
* `LicensingModels` - List Licensing Models
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
