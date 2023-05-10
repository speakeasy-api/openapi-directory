# global

### Available Operations

* [get](#get) - List global resources

## get

List global resources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetHypermediaEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->contentType = GetContentTypeEnum::TEXT_HTML;
    $request->hypermedia = GetHypermediaEnum::YES;

    $response = $sdk->global->get($request);

    if ($response->get200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
