# productsOnline

### Available Operations

* [createProductSlug](#createproductslug) - Create a product identifier

## createProductSlug

Creates a unique slug (identifier) for a product. The slug is used to create a product URL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductSlugRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSlugRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductSlugSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProductSlugRequest();
    $request->createSlugRequest = new CreateSlugRequest();
    $request->createSlugRequest->productName = 'autem';
    $request->organizationUuid = '5b85efbd-02ba-4e0b-a2d7-82259e3ea4b5';

    $requestSecurity = new CreateProductSlugSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->productsOnline->createProductSlug($request, $requestSecurity);

    if ($response->slugResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
