# sampleResponse

## Overview

Operations related to card detail responses sent to HubSpot by an app.

### Available Operations

* [getCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse](#getcrmv3extensionscardssampleresponsegetcardssampleresponse) - Get sample card detail response

## getCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse

Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sampleResponse->getCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse();

    if ($response->integratorCardPayloadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
