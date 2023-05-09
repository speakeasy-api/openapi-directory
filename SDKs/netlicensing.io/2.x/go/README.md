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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.License.CreateLicense(ctx, operations.CreateLicenseRequestBody{
        Active: false,
        Currency: sdk.String("corrupti"),
        Hidden: sdk.Bool(false),
        LicenseTemplateNumber: "provident",
        LicenseeNumber: "distinctio",
        Name: sdk.String("Stuart Stiedemann"),
        Number: sdk.String("vel"),
        Parentfeature: sdk.String("error"),
        Price: sdk.Float64(6458.94),
        Quantity: sdk.String("suscipit"),
        StartDate: types.MustTimeFromString("2022-09-14T09:35:47.986Z"),
        TimeVolume: sdk.String("debitis"),
        TimeVolumePeriod: sdk.String("ipsa"),
        UsedQuantity: sdk.String("delectus"),
    }, operations.CreateLicenseSecurity{
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


### [License](docs/license/README.md)

* [CreateLicense](docs/license/README.md#createlicense) - Create License
* [DeleteLicense](docs/license/README.md#deletelicense) - Delete License
* [GetLicense](docs/license/README.md#getlicense) - Get License
* [ListLicenses](docs/license/README.md#listlicenses) - List Licenses
* [UpdateLicense](docs/license/README.md#updatelicense) - Update License

### [LicenseTemplate](docs/licensetemplate/README.md)

* [CreateLicenseTemplate](docs/licensetemplate/README.md#createlicensetemplate) - Create License Template
* [DeleteLicenseTemplate](docs/licensetemplate/README.md#deletelicensetemplate) - Delete License Template
* [GetLicenseTemplate](docs/licensetemplate/README.md#getlicensetemplate) - Get License Template
* [ListLicenseTemplates](docs/licensetemplate/README.md#listlicensetemplates) - List License Templates
* [UpdateLicenseTemplate](docs/licensetemplate/README.md#updatelicensetemplate) - Update License Template

### [Licensee](docs/licensee/README.md)

* [CreateLicensee](docs/licensee/README.md#createlicensee) - Create Licensee
* [DeleteLicensee](docs/licensee/README.md#deletelicensee) - Delete Licensee
* [GetLicensee](docs/licensee/README.md#getlicensee) - Get Licensee
* [ListLicensees](docs/licensee/README.md#listlicensees) - List Licensees
* [TransferLicenses](docs/licensee/README.md#transferlicenses) - Transfer Licenses
* [UpdateLicensee](docs/licensee/README.md#updatelicensee) - Update Licensee
* [ValidateLicensee](docs/licensee/README.md#validatelicensee) - Validate Licensee

### [PaymentMethod](docs/paymentmethod/README.md)

* [GetPaymentMethod](docs/paymentmethod/README.md#getpaymentmethod) - Get Payment Method
* [ListPaymentMethods](docs/paymentmethod/README.md#listpaymentmethods) - List Payment Methods
* [UpdatePaymentMethod](docs/paymentmethod/README.md#updatepaymentmethod) - Update Payment Method

### [Product](docs/product/README.md)

* [CreateProduct](docs/product/README.md#createproduct) - Create Product
* [DeleteProduct](docs/product/README.md#deleteproduct) - Delete Product
* [ListProducts](docs/product/README.md#listproducts) - List Products
* [ProductNumber](docs/product/README.md#productnumber) - Get Product
* [UpdateProduct](docs/product/README.md#updateproduct) - Update Product

### [ProductModule](docs/productmodule/README.md)

* [CreateProductModule](docs/productmodule/README.md#createproductmodule) - Create Product Module
* [DeleteProductModule](docs/productmodule/README.md#deleteproductmodule) - Delete Product Module
* [GetProductModule](docs/productmodule/README.md#getproductmodule) - Get Product Module
* [ListProductModules](docs/productmodule/README.md#listproductmodules) - List Product Modules
* [UpdateProductModule](docs/productmodule/README.md#updateproductmodule) - Update Product Module

### [Token](docs/token/README.md)

* [CreateToken](docs/token/README.md#createtoken) - Create token
* [DeleteToken](docs/token/README.md#deletetoken) - Delete token
* [GetToken](docs/token/README.md#gettoken) - Get token
* [ListTokens](docs/token/README.md#listtokens) - List Tokens

### [Transaction](docs/transaction/README.md)

* [CreateTransaction](docs/transaction/README.md#createtransaction) - Create Transaction
* [GetTransaction](docs/transaction/README.md#gettransaction) - Get Transaction 
* [ListTransactions](docs/transaction/README.md#listtransactions) - List Transactions
* [UpdateTransaction](docs/transaction/README.md#updatetransaction) - Update Transaction

### [Utility](docs/utility/README.md)

* [LicenseTypes](docs/utility/README.md#licensetypes) - List License Types
* [LicensingModels](docs/utility/README.md#licensingmodels) - List Licensing Models
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
