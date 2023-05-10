# peerDetection

## Overview

Detecting nodes to use for submitting transactions

### Available Operations

* [getPeersList](#getpeerslist) - Lists known peers sorted by block height

## getPeersList

Lists known peers sorted by block height

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPeersListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPeersListRequest();
    $request->closedApi = false;
    $request->limit = 681820;
    $request->unreachable = false;

    $response = $sdk->peerDetection->getPeersList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
