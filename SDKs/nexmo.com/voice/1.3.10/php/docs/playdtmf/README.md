# playDTMF

## Overview

Play DTMF tones in to an active call

### Available Operations

* [startDTMF](#startdtmf) - Play DTMF tones into a call

## startDTMF

Play DTMF tones into a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StartDTMFRequest;
use \OpenAPI\OpenAPI\Models\Shared\DTMFRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartDTMFSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDTMFRequest();
    $request->dtmfRequest = new DTMFRequest();
    $request->dtmfRequest->digits = '1713';
    $request->uuid = '94677392-51aa-452c-bf5a-d019da1ffe78';

    $requestSecurity = new StartDTMFSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->playDTMF->startDTMF($request, $requestSecurity);

    if ($response->dtmfResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
