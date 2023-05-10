# miscellaneous

## Overview

Miscellaneous Endpoints.

### Available Operations

* [getResolve](#getresolve) - Resolves soundcloud.com URLs to Resource URLs to use with the API.

## getResolve

Resolves soundcloud.com URLs to Resource URLs to use with the API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResolveRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResolveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResolveRequest();
    $request->url = 'maiores';

    $requestSecurity = new GetResolveSecurity();
    $requestSecurity->authHeader = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->miscellaneous->getResolve($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
