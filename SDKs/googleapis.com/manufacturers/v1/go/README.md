# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/manufacturers/v1/go
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
    res, err := s.Accounts.ManufacturersAccountsLanguagesProductCertificationsDelete(ctx, operations.ManufacturersAccountsLanguagesProductCertificationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        Name: "Dallas Kassulke",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.ManufacturersAccountsLanguagesProductCertificationsDeleteSecurity{
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


### [Accounts](docs/accounts/README.md)

* [ManufacturersAccountsLanguagesProductCertificationsDelete](docs/accounts/README.md#manufacturersaccountslanguagesproductcertificationsdelete) - Deletes a product certification by its name. This method can only be called by certification bodies.
* [ManufacturersAccountsLanguagesProductCertificationsGet](docs/accounts/README.md#manufacturersaccountslanguagesproductcertificationsget) - Gets a product certification by its name. This method can only be called by certification bodies.
* [ManufacturersAccountsLanguagesProductCertificationsList](docs/accounts/README.md#manufacturersaccountslanguagesproductcertificationslist) - Lists product certifications from a specified certification body. This method can only be called by certification bodies.
* [ManufacturersAccountsLanguagesProductCertificationsPatch](docs/accounts/README.md#manufacturersaccountslanguagesproductcertificationspatch) - Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.
* [ManufacturersAccountsProductsDelete](docs/accounts/README.md#manufacturersaccountsproductsdelete) - Deletes the product from a Manufacturer Center account.
* [ManufacturersAccountsProductsGet](docs/accounts/README.md#manufacturersaccountsproductsget) - Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.
* [ManufacturersAccountsProductsList](docs/accounts/README.md#manufacturersaccountsproductslist) - Lists all the products in a Manufacturer Center account.
* [ManufacturersAccountsProductsUpdate](docs/accounts/README.md#manufacturersaccountsproductsupdate) - Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
