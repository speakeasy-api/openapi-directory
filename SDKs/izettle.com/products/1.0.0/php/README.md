# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### categories

* `createCategories` - Create a new category
* `deleteCategory` - Delete a category
* `getProductTypes` - Retrieve all categories
* `renameCategory` - Rename a category

### discounts

* `createDiscount` - Create a discount
* `deleteDiscount` - Delete a single discount 
* `getAllDiscounts` - Retrieve all discounts
* `getDiscount` - Retrieve a single discount
* `updateDiscount` - Update a single discount

### images

* `getAllImageUrls` - Retrieve all library item images

### import

* `getLatestImportStatus` - Get status for latest import
* `getStatusByUuid` - Get status for an import
* `importLibraryV2` - Import library items

### library

* `getLibrary` - Retrieve the entire library

### products

* `countAllProducts` - Retrieve the count of existing products
* `createProduct` - Create a new product
* `deleteProduct` - Delete a single product
* `deleteProducts` - Delete a list of products
* `getAllOptions` - Retrieve an aggregate of active Options in the library
* `getAllProductsInPos` - Retrieve all products visible in POS
* `getAllProductsV2` - Retrieve all products visible in POS – v2
* `getProduct` - Retrieve a single product
* `updateProduct` - Update a single product

### productsOnline

* `createProductSlug` - Create a product identifier

### taxes

* `createTaxRates` - Create new tax rates
* `deleteTaxRate` - Delete a single tax rate
* `getProductCountForAllTaxes` - Get all tax rates and a count of products associated with each
* `getTaxRate` - Get a single tax rate
* `getTaxRates` - Get all available tax rates
* `getTaxSettings` - Get the organization tax settings 
* `setTaxationMode` - Update the organization tax settings
* `updateTaxRate` - Update a single tax rate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
