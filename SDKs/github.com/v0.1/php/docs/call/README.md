# call

## Overview

API methods responsible for spawning and manipulating individual calls

### Available Operations

* [postV01BulkCall](#postv01bulkcall) - /v0.1/BulkCall/
* [postV01Call](#postv01call) - /v0.1/Call/
* [postV01CancelScheduledHangup](#postv01cancelscheduledhangup) - /v0.1/CancelScheduledHangup/
* [postV01CancelScheduledPlay](#postv01cancelscheduledplay) - /v0.1/CancelScheduledPlay/
* [postV01GroupCall](#postv01groupcall) - /v0.1/GroupCall/
* [postV01HangupAllCalls](#postv01hangupallcalls) - /v0.1/HangupAllCalls/
* [postV01HangupCall](#postv01hangupcall) - /v0.1/HangupCall/
* [postV01Play](#postv01play) - /v0.1/Play/
* [postV01PlayStop](#postv01playstop) - /v0.1/PlayStop/
* [postV01RecordStart](#postv01recordstart) - /v0.1/RecordStart/
* [postV01RecordStop](#postv01recordstop) - /v0.1/RecordStop/
* [postV01ScheduleHangup](#postv01schedulehangup) - /v0.1/ScheduleHangup/
* [postV01SchedulePlay](#postv01scheduleplay) - /v0.1/SchedulePlay/
* [postV01SendDigits](#postv01senddigits) - /v0.1/SendDigits/
* [postV01SoundTouch](#postv01soundtouch) - /v0.1/SoundTouch/
* [postV01SoundTouchStop](#postv01soundtouchstop) - /v0.1/SoundTouchStop/
* [postV01TransferCall](#postv01transfercall) - /v0.1/TransferCall/

## postV01BulkCall

Initiates multiple concurrent outbound calls

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BulkCallParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01BulkCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkCallParameters();
    $request->answerUrl = 'https://example.com/answer/';
    $request->callerName = 'Bulk Test';
    $request->confirmKey = '1';
    $request->confirmSound = 'https://example.com/confirm_sound/';
    $request->coreUUID = '2e8e6275-7cfe-4e3c-a8d6-25316b4519c7';
    $request->delimiter = '<';
    $request->extraDialString = 'bridge_early_media=true,hangup_after_bridge=true';
    $request->from = '15551234567';
    $request->gatewayCodecs = ''PCMA,PCMU','G729,PCMU','PCMA,G729'';
    $request->gatewayRetries = '3,1,2';
    $request->gatewayTimeouts = '10,30,20';
    $request->gateways = 'user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/';
    $request->hangupOnRing = 90;
    $request->hangupUrl = 'https://example.com/hangup/';
    $request->rejectCauses = 'USER_BUSY,NO_ANSWER';
    $request->ringUrl = 'https://example.com/ring/';
    $request->sendDigits = '1w2w3W#*@1500';
    $request->sendOnPreanswer = false;
    $request->timeLimit = 90;
    $request->to = '15557654321';

    $requestSecurity = new PostV01BulkCallSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01BulkCall($request, $requestSecurity);

    if ($response->bulkCallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01Call

Initiates an outbound call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CallParameters;
use \OpenAPI\OpenAPI\Models\Shared\CallParametersAsyncAmdStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\CallParametersMachineDetectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostV01CallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CallParameters();
    $request->answerUrl = 'https://example.com/answer/';
    $request->asyncAMD = true;
    $request->asyncAmdStatusCallback = 'corrupti';
    $request->asyncAmdStatusCallbackMethod = CallParametersAsyncAmdStatusCallbackMethodEnum::GET;
    $request->callerName = 'Test';
    $request->coreUUID = '45521fc6-a4b3-42b6-96ad-9136256be216';
    $request->extraDialString = 'bridge_early_media=true,hangup_after_bridge=true';
    $request->from = '15551234567';
    $request->gatewayCodecs = ''PCMA,PCMU','G729,PCMU','PCMA,G729'';
    $request->gatewayRetries = '3,1,2';
    $request->gatewayTimeouts = '10,30,20';
    $request->gateways = 'user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/';
    $request->hangupOnRing = 90;
    $request->hangupUrl = 'https://example.com/hangup/';
    $request->machineDetection = CallParametersMachineDetectionEnum::ENABLE;
    $request->machineDetectionSilenceTimeout = 3000;
    $request->machineDetectionSpeechEndThreshold = 1000;
    $request->machineDetectionSpeechThreshold = 2000;
    $request->machineDetectionTimeout = 5;
    $request->ringUrl = 'https://example.com/ring/';
    $request->sendDigits = '1w2w3W#*@1500';
    $request->sendOnPreanswer = false;
    $request->timeLimit = 90;
    $request->to = '15557654321';

    $requestSecurity = new PostV01CallSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01Call($request, $requestSecurity);

    if ($response->callResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01CancelScheduledHangup

Cancels a scheduled hangup for a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CancelScheduledHangupParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01CancelScheduledHangupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelScheduledHangupParameters();
    $request->schedHangupId = 'ea428fbd-ac9b-498c-8bb2-a36ac49f10fd';

    $requestSecurity = new PostV01CancelScheduledHangupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01CancelScheduledHangup($request, $requestSecurity);

    if ($response->cancelScheduledHangupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01CancelScheduledPlay

Cancels a scheduled playback request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CancelScheduledPlayParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01CancelScheduledPlaySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelScheduledPlayParameters();
    $request->schedPlayId = 'ea428fbd-ac9b-498c-8bb2-a36ac49f10fd';

    $requestSecurity = new PostV01CancelScheduledPlaySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01CancelScheduledPlay($request, $requestSecurity);

    if ($response->cancelScheduledPlayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01GroupCall

Initiate multiple racing outbound calls

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GroupCallParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01GroupCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupCallParameters();
    $request->answerUrl = 'https://example.com/answer/';
    $request->callerName = 'Group Test';
    $request->confirmKey = '1';
    $request->confirmSound = 'https://example.com/confirm_sound/';
    $request->coreUUID = '46ae8cd9-c28e-447d-ba40-a09cba49d474';
    $request->delimiter = '<';
    $request->extraDialString = 'bridge_early_media=true,hangup_after_bridge=true';
    $request->from = '15551234567';
    $request->gatewayCodecs = ''PCMA,PCMU','G729,PCMU','PCMA,G729'';
    $request->gatewayRetries = '3,1,2';
    $request->gatewayTimeouts = '10,30,20';
    $request->gateways = 'user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/';
    $request->hangupOnRing = 90;
    $request->hangupUrl = 'https://example.com/hangup/';
    $request->rejectCauses = 'USER_BUSY,NO_ANSWER';
    $request->ringUrl = 'https://example.com/ring/';
    $request->sendDigits = '1w2w3W#*@1500';
    $request->sendOnPreanswer = false;
    $request->timeLimit = 90;
    $request->to = '15557654321';

    $requestSecurity = new PostV01GroupCallSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01GroupCall($request, $requestSecurity);

    if ($response->groupCallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01HangupAllCalls

Hangs up all established calls

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV01HangupAllCallsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PostV01HangupAllCallsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01HangupAllCalls($requestSecurity);

    if ($response->hangupAllCallsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01HangupCall

Hangs up a specific call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\HangupCallParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01HangupCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HangupCallParameters();
    $request->callUUID = 'b0519011-6987-47c8-9270-a820e0978acd';
    $request->requestUUID = 'c059b96b-04d8-414b-920c-7b373bff916e';

    $requestSecurity = new PostV01HangupCallSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01HangupCall($request, $requestSecurity);

    if ($response->hangupCallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01Play

Plays media into a live call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PlayParameters;
use \OpenAPI\OpenAPI\Models\Shared\PlayParametersLegsEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostV01PlaySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayParameters();
    $request->callUUID = 'e69b32da-3243-4ba6-a965-5d2f64a57d48';
    $request->legs = PlayParametersLegsEnum::BOTH;
    $request->length = 90;
    $request->loop = true;
    $request->mix = false;
    $request->sounds = '/tmp/prompt.wav';

    $requestSecurity = new PostV01PlaySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01Play($request, $requestSecurity);

    if ($response->playResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01PlayStop

Interrupts media playback on a given call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PlayStopParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01PlayStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayStopParameters();
    $request->callUUID = '441afb63-85bc-49d4-9ac8-8459f9bf5e6b';

    $requestSecurity = new PostV01PlayStopSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01PlayStop($request, $requestSecurity);

    if ($response->playStopResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01RecordStart

Initiates recording of a given call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RecordStartParameters;
use \OpenAPI\OpenAPI\Models\Shared\RecordStartParametersFileFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostV01RecordStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecordStartParameters();
    $request->callUUID = '052d04e4-019a-45ff-a562-f74d4ae99ea2';
    $request->fileFormat = RecordStartParametersFileFormatEnum::WAV;
    $request->fileName = 'sample_recording';
    $request->filePath = '/tmp/recordings';
    $request->timeLimit = 89;

    $requestSecurity = new PostV01RecordStartSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01RecordStart($request, $requestSecurity);

    if ($response->recordStartResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01RecordStop

Stops the recording of a given call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RecordStopParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01RecordStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecordStopParameters();
    $request->callUUID = 'eacfa857-4001-4379-b79a-c7ef6d963bcb';
    $request->recordFile = '/tmp/recording/sample.wav';

    $requestSecurity = new PostV01RecordStopSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01RecordStop($request, $requestSecurity);

    if ($response->recordStopResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01ScheduleHangup

Schedules a hangup for a specific call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleHangupParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01ScheduleHangupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScheduleHangupParameters();
    $request->callUUID = 'f84fbadc-5df0-4c02-934b-aac0c1efb8ae';
    $request->time = 59;

    $requestSecurity = new PostV01ScheduleHangupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01ScheduleHangup($request, $requestSecurity);

    if ($response->scheduleHangupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01SchedulePlay

Schedules media playback for a specific call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SchedulePlayParameters;
use \OpenAPI\OpenAPI\Models\Shared\SchedulePlayParametersLegsEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostV01SchedulePlaySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SchedulePlayParameters();
    $request->callUUID = 'e69b32da-3243-4ba6-a965-5d2f64a57d48';
    $request->legs = SchedulePlayParametersLegsEnum::BOTH;
    $request->length = 90;
    $request->loop = true;
    $request->mix = false;
    $request->sounds = '/tmp/prompt.wav';
    $request->time = 29;

    $requestSecurity = new PostV01SchedulePlaySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01SchedulePlay($request, $requestSecurity);

    if ($response->schedulePlayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01SendDigits

Emits DMTF tones to a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SendDigitsParameters;
use \OpenAPI\OpenAPI\Models\Shared\SendDigitsParametersLegEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostV01SendDigitsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendDigitsParameters();
    $request->callUUID = 'd4cd08fe-4245-490a-ae39-5b58c6addbe8';
    $request->digits = '1w2w3W#*@1500';
    $request->leg = SendDigitsParametersLegEnum::BOTH;

    $requestSecurity = new PostV01SendDigitsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01SendDigits($request, $requestSecurity);

    if ($response->sendDigitsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01SoundTouch

Applies SoundTouch effects to a live call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SoundTouchParameters;
use \OpenAPI\OpenAPI\Models\Shared\SoundTouchParametersAudioDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostV01SoundTouchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SoundTouchParameters();
    $request->audioDirection = SoundTouchParametersAudioDirectionEnum::IN;
    $request->callUUID = 'b7054b68-0620-455a-8ac7-f8f126853b9d';
    $request->pitch = 4;
    $request->pitchOctaves = 0.5;
    $request->pitchSemiTones = 2;
    $request->rate = 3;
    $request->tempo = 2;

    $requestSecurity = new PostV01SoundTouchSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01SoundTouch($request, $requestSecurity);

    if ($response->soundTouchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01SoundTouchStop

Removes SoundTouch effects from a given call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SoundTouchStopParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01SoundTouchStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SoundTouchStopParameters();
    $request->callUUID = 'fe372011-face-4bc2-bbcc-893d045bf67d';

    $requestSecurity = new PostV01SoundTouchStopSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01SoundTouchStop($request, $requestSecurity);

    if ($response->soundTouchStopResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV01TransferCall

Replaces the RestXML flow of a live call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TransferCallParameters;
use \OpenAPI\OpenAPI\Models\Operations\PostV01TransferCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferCallParameters();
    $request->callUUID = '03694cf6-62b3-4f00-b0fc-6831ddcc2693';
    $request->url = 'https://example.org/restxml/endpoint/';

    $requestSecurity = new PostV01TransferCallSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->call->postV01TransferCall($request, $requestSecurity);

    if ($response->transferCallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
