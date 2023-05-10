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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryDTO;
use \OpenAPI\OpenAPI\Models\Operations\CreateCategoriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCategoriesRequest();
    $request->createCategoriesRequest = new CreateCategoriesRequest();
    $request->createCategoriesRequest->categories = [
        new CategoryDTO(),
        new CategoryDTO(),
        new CategoryDTO(),
    ];
    $request->organizationUuid = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';

    $requestSecurity = new CreateCategoriesSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->categories->createCategories($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [categories](docs/categories/README.md)

* [createCategories](docs/categories/README.md#createcategories) - Create a new category
* [deleteCategory](docs/categories/README.md#deletecategory) - Delete a category
* [getProductTypes](docs/categories/README.md#getproducttypes) - Retrieve all categories
* [renameCategory](docs/categories/README.md#renamecategory) - Rename a category

### [discounts](docs/discounts/README.md)

* [createDiscount](docs/discounts/README.md#creatediscount) - Create a discount
* [deleteDiscount](docs/discounts/README.md#deletediscount) - Delete a single discount 
* [getAllDiscounts](docs/discounts/README.md#getalldiscounts) - Retrieve all discounts
* [getDiscount](docs/discounts/README.md#getdiscount) - Retrieve a single discount
* [updateDiscount](docs/discounts/README.md#updatediscount) - Update a single discount

### [images](docs/images/README.md)

* [getAllImageUrls](docs/images/README.md#getallimageurls) - Retrieve all library item images

### [import](docs/import/README.md)

* [getLatestImportStatus](docs/import/README.md#getlatestimportstatus) - Get status for latest import
* [getStatusByUuid](docs/import/README.md#getstatusbyuuid) - Get status for an import
* [importLibraryV2](docs/import/README.md#importlibraryv2) - Import library items

### [library](docs/library/README.md)

* [getLibrary](docs/library/README.md#getlibrary) - Retrieve the entire library

### [products](docs/products/README.md)

* [countAllProducts](docs/products/README.md#countallproducts) - Retrieve the count of existing products
* [createProduct](docs/products/README.md#createproduct) - Create a new product
* [deleteProduct](docs/products/README.md#deleteproduct) - Delete a single product
* [deleteProducts](docs/products/README.md#deleteproducts) - Delete a list of products
* [getAllOptions](docs/products/README.md#getalloptions) - Retrieve an aggregate of active Options in the library
* [getAllProductsInPos](docs/products/README.md#getallproductsinpos) - Retrieve all products visible in POS
* [getAllProductsV2](docs/products/README.md#getallproductsv2) - Retrieve all products visible in POS – v2
* [getProduct](docs/products/README.md#getproduct) - Retrieve a single product
* [updateProduct](docs/products/README.md#updateproduct) - Update a single product

### [productsOnline](docs/productsonline/README.md)

* [createProductSlug](docs/productsonline/README.md#createproductslug) - Create a product identifier

### [taxes](docs/taxes/README.md)

* [createTaxRates](docs/taxes/README.md#createtaxrates) - Create new tax rates
* [deleteTaxRate](docs/taxes/README.md#deletetaxrate) - Delete a single tax rate
* [getProductCountForAllTaxes](docs/taxes/README.md#getproductcountforalltaxes) - Get all tax rates and a count of products associated with each
* [getTaxRate](docs/taxes/README.md#gettaxrate) - Get a single tax rate
* [getTaxRates](docs/taxes/README.md#gettaxrates) - Get all available tax rates
* [getTaxSettings](docs/taxes/README.md#gettaxsettings) - Get the organization tax settings 
* [setTaxationMode](docs/taxes/README.md#settaxationmode) - Update the organization tax settings
* [updateTaxRate](docs/taxes/README.md#updatetaxrate) - Update a single tax rate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
