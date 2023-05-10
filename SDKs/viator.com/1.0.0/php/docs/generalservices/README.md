# generalServices

## Overview

General services

### Available Operations

* [healthCheck](#healthcheck) - /health/check

## healthCheck

Health check
Use this service to determine whether the Viator API is presently online and that your API key is valid. You should receive a response identical to the example shown. If you have not yet received an API key, please request one from your business development partner. If you have not yet signed up as a Viator merchant partner and would like to, please visit our [distribution partner website](https://www.viator.com/distribution-partners?mcid=58463#api-solutions)."


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\HealthCheckRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HealthCheckRequest();
    $request->acceptLanguage = 'en-US';

    $response = $sdk->generalServices->healthCheck($request);

    if ($response->healthCheck200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
