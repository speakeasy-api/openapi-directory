# nameAuthority

### Available Operations

* [getNameAuthorities](#getnameauthorities) - Get all name authorities

## getNameAuthorities

Gets a list of all name authorities responsible for naming decisions of the geographical names in the BC Geographical Names Information System (BCGNIS)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNameAuthoritiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNameAuthoritiesOutputFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNameAuthoritiesRequest();
    $request->outputFormat = GetNameAuthoritiesOutputFormatEnum::XML;

    $response = $sdk->nameAuthority->getNameAuthorities($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
