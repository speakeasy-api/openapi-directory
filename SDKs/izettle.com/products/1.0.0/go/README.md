# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/izettle.com/products/1.0.0/go
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

    req := operations.CreateCategoriesRequest{
        CreateCategoriesRequest: shared.CreateCategoriesRequest{
            Categories: []shared.CategoryDTO{
                shared.CategoryDTO{
                    Name: "provident",
                    UUID: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
                },
                shared.CategoryDTO{
                    Name: "ipsam",
                    UUID: "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7",
                },
                shared.CategoryDTO{
                    Name: "ipsum",
                    UUID: "92059293-96fe-4a75-96eb-10faaa2352c5",
                },
            },
        },
        OrganizationUUID: "955907af-f1a3-4a2f-a946-7739251aa52c",
    }

    ctx := context.Background()
    res, err := s.Categories.CreateCategories(ctx, req, operations.CreateCategoriesSecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Categories

* `CreateCategories` - Create a new category
* `DeleteCategory` - Delete a category
* `GetProductTypes` - Retrieve all categories
* `RenameCategory` - Rename a category

### Discounts

* `CreateDiscount` - Create a discount
* `DeleteDiscount` - Delete a single discount 
* `GetAllDiscounts` - Retrieve all discounts
* `GetDiscount` - Retrieve a single discount
* `UpdateDiscount` - Update a single discount

### Images

* `GetAllImageUrls` - Retrieve all library item images

### Import

* `GetLatestImportStatus` - Get status for latest import
* `GetStatusByUUID` - Get status for an import
* `ImportLibraryV2` - Import library items

### Library

* `GetLibrary` - Retrieve the entire library

### Products

* `CountAllProducts` - Retrieve the count of existing products
* `CreateProduct` - Create a new product
* `DeleteProduct` - Delete a single product
* `DeleteProducts` - Delete a list of products
* `GetAllOptions` - Retrieve an aggregate of active Options in the library
* `GetAllProductsInPos` - Retrieve all products visible in POS
* `GetAllProductsV2` - Retrieve all products visible in POS – v2
* `GetProduct` - Retrieve a single product
* `UpdateProduct` - Update a single product

### ProductsOnline

* `CreateProductSlug` - Create a product identifier

### Taxes

* `CreateTaxRates` - Create new tax rates
* `DeleteTaxRate` - Delete a single tax rate
* `GetProductCountForAllTaxes` - Get all tax rates and a count of products associated with each
* `GetTaxRate` - Get a single tax rate
* `GetTaxRates` - Get all available tax rates
* `GetTaxSettings` - Get the organization tax settings 
* `SetTaxationMode` - Update the organization tax settings
* `UpdateTaxRate` - Update a single tax rate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
