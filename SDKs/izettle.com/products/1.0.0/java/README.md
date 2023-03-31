# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateCategoriesSecurity;
import org.openapis.openapi.models.operations.CreateCategoriesPathParams;
import org.openapis.openapi.models.operations.CreateCategoriesRequest;
import org.openapis.openapi.models.operations.CreateCategoriesResponse;
import org.openapis.openapi.models.shared.CreateCategoriesRequest;
import org.openapis.openapi.models.shared.CategoryDTO;
import org.openapis.openapi.models.shared.SchemeZettleOauth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCategoriesRequest req = new CreateCategoriesRequest() {{
                security = new CreateCategoriesSecurity() {{
                    zettleOauth = new SchemeZettleOauth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CreateCategoriesPathParams() {{
                    organizationUuid = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
                }};
                request = new CreateCategoriesRequest() {{
                    categories = new org.openapis.openapi.models.shared.CategoryDTO[]{{
                        add(new CategoryDTO() {{
                            name = "perferendis";
                            uuid = "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb";
                        }}),
                        add(new CategoryDTO() {{
                            name = "esse";
                            uuid = "39205929-396f-4ea7-996e-b10faaa2352c";
                        }}),
                        add(new CategoryDTO() {{
                            name = "enim";
                            uuid = "955907af-f1a3-4a2f-a946-7739251aa52c";
                        }}),
                    }};
                }};
            }};            

            CreateCategoriesResponse res = sdk.categories.createCategories(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
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

### import_

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
