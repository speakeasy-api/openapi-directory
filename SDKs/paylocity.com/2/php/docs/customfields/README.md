# customFields

### Available Operations

* [getAllCustomFieldsByCategory](#getallcustomfieldsbycategory) - Get All Custom Fields

## getAllCustomFieldsByCategory

Get All Custom Fields for the selected company

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllCustomFieldsByCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllCustomFieldsByCategorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllCustomFieldsByCategoryRequest();
    $request->category = 'ipsam';
    $request->companyId = 'repellendus';

    $requestSecurity = new GetAllCustomFieldsByCategorySecurity();
    $requestSecurity->paylocityAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customFields->getAllCustomFieldsByCategory($request, $requestSecurity);

    if ($response->customFieldDefinitions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
