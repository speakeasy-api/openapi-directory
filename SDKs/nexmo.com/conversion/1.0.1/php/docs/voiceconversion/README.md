# voiceConversion

## Overview

Voice Conversion Request

### Available Operations

* [voiceConversion](#voiceconversion) - Tell Nexmo if your voice call was successful

## voiceConversion

Send a Conversion API request with information about the Call or Text-To-Speech identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\VoiceConversionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeliveredEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VoiceConversionRequest();
    $request->delivered = DeliveredEnum::ZERO;
    $request->messageId = 'illum';
    $request->timestamp = 'vel';

    $response = $sdk->voiceConversion->voiceConversion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
