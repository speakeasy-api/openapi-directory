# SDK

## Overview

A plugin that allows users to interact with Slack using ChatGPT

### Available Operations

* [aiAlphaSearchMessages](#aialphasearchmessages) - Search for messages matching a query

## aiAlphaSearchMessages

Search for messages matching a query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->query = 'provident';

    $response = $sdk->sdk->aiAlphaSearchMessages($request);

    if ($response->aiAlphaSearchMessages200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
