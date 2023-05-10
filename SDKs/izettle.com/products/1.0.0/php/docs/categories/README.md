# categories

### Available Operations

* [createCategories](#createcategories) - Create a new category
* [deleteCategory](#deletecategory) - Delete a category
* [getProductTypes](#getproducttypes) - Retrieve all categories
* [renameCategory](#renamecategory) - Rename a category

## createCategories

Create a new category

### Example Usage

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
    ];
    $request->organizationUuid = '5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb';

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

## deleteCategory

Delete a category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCategorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCategoryRequest();
    $request->categoryUuid = '73920592-9396-4fea-b596-eb10faaa2352';
    $request->organizationUuid = 'c5955907-aff1-4a3a-afa9-467739251aa5';

    $requestSecurity = new DeleteCategorySecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->categories->deleteCategory($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductTypes

Retrieve all categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProductTypesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductTypesRequest();
    $request->organizationUuid = '2c3f5ad0-19da-41ff-a78f-097b0074f154';

    $requestSecurity = new GetProductTypesSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->categories->getProductTypes($request, $requestSecurity);

    if ($response->categoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renameCategory

Rename a category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RenameCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\RenameCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\RenameCategorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenameCategoryRequest();
    $request->renameCategoryRequest = new RenameCategoryRequest();
    $request->renameCategoryRequest->name = 'Mildred Pfeffer';
    $request->categoryUuid = '6e13b99d-488e-41e9-9e45-0ad2abd44269';
    $request->organizationUuid = '802d502a-94bb-44f6-bc96-9e9a3efa77df';

    $requestSecurity = new RenameCategorySecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->categories->renameCategory($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
