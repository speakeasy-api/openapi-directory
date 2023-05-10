# images

### Available Operations

* [getAllImageUrls](#getallimageurls) - Retrieve all library item images

## getAllImageUrls

Retrieves all library items images used by the organization, sorted by updated date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllImageUrlsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAllImageUrlsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllImageUrlsRequest();
    $request->organizationUuid = '9c0f5d2c-ff7c-470a-8562-6d436813f16d';

    $requestSecurity = new GetAllImageUrlsSecurity();
    $requestSecurity->zettleOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->getAllImageUrls($request, $requestSecurity);

    if ($response->libraryImagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
