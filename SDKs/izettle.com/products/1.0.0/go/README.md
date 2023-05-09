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
    res, err := s.Categories.CreateCategories(ctx, operations.CreateCategoriesRequest{
        CreateCategoriesRequest: shared.CreateCategoriesRequest{
            Categories: []shared.CategoryDTO{
                shared.CategoryDTO{
                    Name: "Kelvin Sporer",
                    UUID: "8d69a674-e0f4-467c-8879-6ed151a05dfc",
                },
                shared.CategoryDTO{
                    Name: "Teri Strosin",
                    UUID: "cc78ca1b-a928-4fc8-9674-2cb739205929",
                },
                shared.CategoryDTO{
                    Name: "Faye Howe",
                    UUID: "a7596eb1-0faa-4a23-92c5-955907aff1a3",
                },
            },
        },
        OrganizationUUID: "a2fa9467-7392-451a-a52c-3f5ad019da1f",
    }, operations.CreateCategoriesSecurity{
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


### [Categories](docs/categories/README.md)

* [CreateCategories](docs/categories/README.md#createcategories) - Create a new category
* [DeleteCategory](docs/categories/README.md#deletecategory) - Delete a category
* [GetProductTypes](docs/categories/README.md#getproducttypes) - Retrieve all categories
* [RenameCategory](docs/categories/README.md#renamecategory) - Rename a category

### [Discounts](docs/discounts/README.md)

* [CreateDiscount](docs/discounts/README.md#creatediscount) - Create a discount
* [DeleteDiscount](docs/discounts/README.md#deletediscount) - Delete a single discount 
* [GetAllDiscounts](docs/discounts/README.md#getalldiscounts) - Retrieve all discounts
* [GetDiscount](docs/discounts/README.md#getdiscount) - Retrieve a single discount
* [UpdateDiscount](docs/discounts/README.md#updatediscount) - Update a single discount

### [Images](docs/images/README.md)

* [GetAllImageUrls](docs/images/README.md#getallimageurls) - Retrieve all library item images

### [Import](docs/import/README.md)

* [GetLatestImportStatus](docs/import/README.md#getlatestimportstatus) - Get status for latest import
* [GetStatusByUUID](docs/import/README.md#getstatusbyuuid) - Get status for an import
* [ImportLibraryV2](docs/import/README.md#importlibraryv2) - Import library items

### [Library](docs/library/README.md)

* [GetLibrary](docs/library/README.md#getlibrary) - Retrieve the entire library

### [Products](docs/products/README.md)

* [CountAllProducts](docs/products/README.md#countallproducts) - Retrieve the count of existing products
* [CreateProduct](docs/products/README.md#createproduct) - Create a new product
* [DeleteProduct](docs/products/README.md#deleteproduct) - Delete a single product
* [DeleteProducts](docs/products/README.md#deleteproducts) - Delete a list of products
* [GetAllOptions](docs/products/README.md#getalloptions) - Retrieve an aggregate of active Options in the library
* [GetAllProductsInPos](docs/products/README.md#getallproductsinpos) - Retrieve all products visible in POS
* [GetAllProductsV2](docs/products/README.md#getallproductsv2) - Retrieve all products visible in POS – v2
* [GetProduct](docs/products/README.md#getproduct) - Retrieve a single product
* [UpdateProduct](docs/products/README.md#updateproduct) - Update a single product

### [ProductsOnline](docs/productsonline/README.md)

* [CreateProductSlug](docs/productsonline/README.md#createproductslug) - Create a product identifier

### [Taxes](docs/taxes/README.md)

* [CreateTaxRates](docs/taxes/README.md#createtaxrates) - Create new tax rates
* [DeleteTaxRate](docs/taxes/README.md#deletetaxrate) - Delete a single tax rate
* [GetProductCountForAllTaxes](docs/taxes/README.md#getproductcountforalltaxes) - Get all tax rates and a count of products associated with each
* [GetTaxRate](docs/taxes/README.md#gettaxrate) - Get a single tax rate
* [GetTaxRates](docs/taxes/README.md#gettaxrates) - Get all available tax rates
* [GetTaxSettings](docs/taxes/README.md#gettaxsettings) - Get the organization tax settings 
* [SetTaxationMode](docs/taxes/README.md#settaxationmode) - Update the organization tax settings
* [UpdateTaxRate](docs/taxes/README.md#updatetaxrate) - Update a single tax rate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
