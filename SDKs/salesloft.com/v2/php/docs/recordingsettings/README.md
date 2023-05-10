# recordingSettings

## Overview

Recording Settings Information

### Available Operations

* [getV2PhoneNumbersRecordingSettingsIdJson](#getv2phonenumbersrecordingsettingsidjson) - Fetch recording setting

## getV2PhoneNumbersRecordingSettingsIdJson

Fetches the recording status for a given phone number, based on Do Not Record and Recording Governance for your team.
Phone number should be in E.164 format.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2PhoneNumbersRecordingSettingsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2PhoneNumbersRecordingSettingsIdJsonRequest();
    $request->id = '506a8aa9-4c02-4644-8f5e-9d9a4578adc1';

    $response = $sdk->recordingSettings->getV2PhoneNumbersRecordingSettingsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
