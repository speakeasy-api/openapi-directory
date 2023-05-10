# requestTag

## Overview

An example tag

Here's a link
<https://example.com>
### Available Operations

* [getApod](#getapod) - Returns images

## getApod

Returns the picture of the day

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApodRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApodRequest();
    $request->date = 'provident';
    $request->hd = false;

    $requestSecurity = new GetApodSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->requestTag->getApod($request, $requestSecurity);

    if ($response->getApod200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
