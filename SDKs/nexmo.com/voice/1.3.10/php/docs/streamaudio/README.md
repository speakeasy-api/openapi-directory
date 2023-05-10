# streamAudio

## Overview

Start or stop streaming audio in to an active call

### Available Operations

* [startStream](#startstream) - Play an audio file into a call
* [stopStream](#stopstream) - Stop playing an audio file into a call

## startStream

Play an audio file into a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StartStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartStreamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartStreamRequest();
    $request->startStreamRequest = new StartStreamRequest();
    $request->startStreamRequest->level = '0.4';
    $request->startStreamRequest->loop = 576157;
    $request->startStreamRequest->streamUrl = [
        'provident',
        'necessitatibus',
    ];
    $request->uuid = '9a3efa77-dfb1-44cd-a6ae-395efb9ba88f';

    $requestSecurity = new StartStreamSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->streamAudio->startStream($request, $requestSecurity);

    if ($response->startStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopStream

Stop playing an audio file into a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopStreamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopStreamRequest();
    $request->uuid = '3a669970-74ba-4446-9b6e-2141959890af';

    $requestSecurity = new StopStreamSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->streamAudio->stopStream($request, $requestSecurity);

    if ($response->stopStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
