# calls

## Overview

Create phone calls via an API

### Available Operations

* [getCalls](#getcalls) - Validate a phone number by calling it once
* [postCalls](#postcalls) - Create phone calls with or without announcements and scheduled hangups

## getCalls

Validate a phone number by calling it once

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetCallsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallsRequest();
    $request->validate = 623564;

    $response = $sdk->calls->getCalls($request);

    if ($response->oneGetResponses200ContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCalls

Create phone calls with or without announcements and scheduled hangups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\PostCallsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostCallsRequestBodyOptions;
use \OpenAPI\OpenAPI\Models\Operations\PostCallsRequestBodyOptionsPlayAudio;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCallsRequestBody();
    $request->announcementAt = '180';
    $request->announcementId = 'hgCRVfWB4hGRSEAkICyA';
    $request->callerId = '1224900123';
    $request->from = '442035159999';
    $request->hangupAnnouncementId = 'RVfWB4hGRSEAkIXYCyA';
    $request->hangupAt = '300';
    $request->options = new PostCallsRequestBodyOptions();
    $request->options->aLegCallerId = '1224900123';
    $request->options->aLegOnly = 1;
    $request->options->cancelKey = 2;
    $request->options->connectKey = 1;
    $request->options->playAudio = [
        new PostCallsRequestBodyOptionsPlayAudio(),
        new PostCallsRequestBodyOptionsPlayAudio(),
        new PostCallsRequestBodyOptionsPlayAudio(),
    ];
    $request->to = '442035159995';

    $response = $sdk->calls->postCalls($request);

    if ($response->postCalls202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
