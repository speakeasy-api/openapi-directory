# track

## Overview

Endpoints for tracking events.

### Available Operations

* [trackEvent](#trackevent) - Track event

## trackEvent

Endpoint used to track an event for a user or an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TrackEventRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TrackEventRequestBodyIdentification;
use \OpenAPI\OpenAPI\Models\Operations\TrackEventRequestBodyIdentificationAccount;
use \OpenAPI\OpenAPI\Models\Operations\TrackEventRequestBodyIdentificationUser;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrackEventRequestBody();
    $request->identification = new TrackEventRequestBodyIdentification();
    $request->identification->account = new TrackEventRequestBodyIdentificationAccount();
    $request->identification->account->accountId = 'odit';
    $request->identification->account->domain = 'at';
    $request->identification->user = new TrackEventRequestBodyIdentificationUser();
    $request->identification->user->email = 'Wilford_Krajcik46@hotmail.com';
    $request->identification->user->userId = 'totam';
    $request->metadata = [
        'dolorum' => 'dicta',
        'nam' => 'officia',
        'occaecati' => 'fugit',
        'deleniti' => 'hic',
    ];
    $request->name = 'optio';
    $request->triggeredAt = 'totam';

    $response = $sdk->track->trackEvent($request);

    if ($response->trackEvent201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
