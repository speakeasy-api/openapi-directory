# click

## Overview

**Operations:** Get List

### Available Operations

* [getClicks](#getclicks) - Get clicks

## getClicks

Retrieve the raw click data for your account. Clicks are retrieved by creation date in descending order. 

 If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClicksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClicksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClicksRequest();
    $request->continueFrom = 'voluptatum';
    $request->limit = 479977;

    $requestSecurity = new GetClicksSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->click->getClicks($request, $requestSecurity);

    if ($response->getClicksModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
