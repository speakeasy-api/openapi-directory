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