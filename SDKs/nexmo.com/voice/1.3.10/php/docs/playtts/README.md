# playTTS

## Overview

Start or stop playing Text to Speech in to an active call

### Available Operations

* [startTalk](#starttalk) - Play text to speech into a call
* [stopTalk](#stoptalk) - Stop text to speech in a call

## startTalk

Play text to speech into a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StartTalkRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartTalkRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartTalkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartTalkRequest();
    $request->startTalkRequest = new StartTalkRequest();
    $request->startTalkRequest->language = LanguageEnum::VI_VN;
    $request->startTalkRequest->level = '0.4';
    $request->startTalkRequest->loop = 55714;
    $request->startTalkRequest->premium = false;
    $request->startTalkRequest->style = 604846;
    $request->startTalkRequest->text = 'Hello. How are you today?';
    $request->startTalkRequest->voiceName = VoiceNameEnum::KANYA;
    $request->uuid = 'b0074f15-471b-45e6-a13b-99d488e1e91e';

    $requestSecurity = new StartTalkSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->playTTS->startTalk($request, $requestSecurity);

    if ($response->startTalkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopTalk

Stop text to speech in a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopTalkRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopTalkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopTalkRequest();
    $request->uuid = '450ad2ab-d442-4698-82d5-02a94bb4f63c';

    $requestSecurity = new StopTalkSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->playTTS->stopTalk($request, $requestSecurity);

    if ($response->stopTalkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
