# categories

### Available Operations

* [getCategory](#getcategory) - Get category
* [getCategoryDocs](#getcategorydocs) - Get docs for category

## getCategory

Returns the category with this slug

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCategorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCategoryRequest();
    $request->slug = 'accusantium';
    $request->xReadmeVersion = 'iure';

    $requestSecurity = new GetCategorySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->categories->getCategory($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCategoryDocs

Returns the docs and children docs within this category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoryDocsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoryDocsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCategoryDocsRequest();
    $request->slug = 'culpa';
    $request->xReadmeVersion = 'doloribus';

    $requestSecurity = new GetCategoryDocsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->categories->getCategoryDocs($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
