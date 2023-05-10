# liveFeedItems

## Overview

Live Feed Items

### Available Operations

* [postV2ThirdPartyLiveFeedItems](#postv2thirdpartylivefeeditems) - Create a live feed item

## postV2ThirdPartyLiveFeedItems

Creates a live feed item that can be sent to users. May only be used by whitelisted Frontend Integrations. Reference the Salesloft App Directory and Frontend Integrations sections for additional details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2ThirdPartyLiveFeedItemsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2ThirdPartyLiveFeedItemsRequestBody();
    $request->eventOccurredAt = 'vel';
    $request->idempotencyKey = 'magnam';
    $request->message = 'quibusdam';
    $request->subjectId = 78969;
    $request->subjectType = 'facere';
    $request->userGuid = 'libero';

    $response = $sdk->liveFeedItems->postV2ThirdPartyLiveFeedItems($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
