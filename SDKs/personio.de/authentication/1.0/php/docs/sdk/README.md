# SDK

## Overview

Personio Authentication API

### Available Operations

* [postAuth](#postauth) - Request Authentication Token

## postAuth

Request Authentication Token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAuthRequest();
    $request->clientId = 'distinctio';
    $request->clientSecret = 'quibusdam';

    $response = $sdk->sdk->postAuth($request);

    if ($response->authenticationTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
