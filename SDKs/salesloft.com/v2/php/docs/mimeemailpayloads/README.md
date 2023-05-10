# mimeEmailPayloads

## Overview

MIME content for email

### Available Operations

* [getV2MimeEmailPayloadsIdJson](#getv2mimeemailpayloadsidjson) - Fetch the MIME content for email

## getV2MimeEmailPayloadsIdJson

Fetch the MIME content for email.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2MimeEmailPayloadsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2MimeEmailPayloadsIdJsonRequest();
    $request->id = '5b85efbd-02ba-4e0b-a2d7-82259e3ea4b5';

    $response = $sdk->mimeEmailPayloads->getV2MimeEmailPayloadsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
