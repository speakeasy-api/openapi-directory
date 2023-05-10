# videoLink

### Available Operations

* [getDeviceCameraVideoLink](#getdevicecameravideolink) - Returns video link to the specified camera

## getDeviceCameraVideoLink

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceCameraVideoLinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceCameraVideoLinkRequest();
    $request->serial = 'optio';
    $request->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T01:29:01.950Z');

    $response = $sdk->videoLink->getDeviceCameraVideoLink($request);

    if ($response->getDeviceCameraVideoLink200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
