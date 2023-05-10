# leg

## Overview

A leg can be a video call, IP call, or PSTN call that users participate in using multiple platforms. With this endpoint you can retrieve the details about all of the legs that took place in your application.

### Available Operations

* [deleteLeg](#deleteleg) - Delete a leg
* [listLegs](#listlegs) - List legs

## deleteLeg

Delete a leg

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLegRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLegRequest();
    $request->legId = 'voluptatum';

    $response = $sdk->leg->deleteLeg($request);

    if ($response->deleteLeg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLegs

List legs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->leg->listLegs();

    if ($response->listLegs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
