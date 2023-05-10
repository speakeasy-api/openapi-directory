# websites

## Overview

Endpoints for managing websites.

### Available Operations

* [getTrackingSnippet](#gettrackingsnippet) - Get snippet for a website

## getTrackingSnippet

Endpoint used to get a snippet for a website.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackingSnippetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrackingSnippetRequest();
    $request->domain = 'architecto';

    $response = $sdk->websites->getTrackingSnippet($request);

    if ($response->getTrackingSnippet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
