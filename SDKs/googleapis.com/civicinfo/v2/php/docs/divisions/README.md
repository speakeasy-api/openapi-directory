# divisions

### Available Operations

* [civicinfoDivisionsSearch](#civicinfodivisionssearch) - Searches for political divisions by their natural name or OCD ID.

## civicinfoDivisionsSearch

Searches for political divisions by their natural name or OCD ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CivicinfoDivisionsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CivicinfoDivisionsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->query = 'suscipit';
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $response = $sdk->divisions->civicinfoDivisionsSearch($request);

    if ($response->divisionSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
