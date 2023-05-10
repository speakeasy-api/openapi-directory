# SDK

## Overview

Vonage provides an Application API to allow management of your Vonage Applications.

This API is backwards compatible with version 1. Applications created using version 1 of the API can also be managed using version 2 (this version) of the API.


### Available Operations

* [createApplication](#createapplication) - Create an application
* [deleteApplication](#deleteapplication) - Delete an application
* [getApplication](#getapplication) - Get an application
* [listApplication](#listapplication) - List available applications
* [updateApplication](#updateapplication) - Update an application

## createApplication

Create an application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Capabilities;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapability;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooks;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooksRecordingChanged;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooksRoomChanged;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooksSessionChanged;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessagesCapability;
use \OpenAPI\OpenAPI\Models\Shared\MessagesCapabilityWebhooks;
use \OpenAPI\OpenAPI\Models\Shared\MessagesCapabilityWebhooksInboundUrl;
use \OpenAPI\OpenAPI\Models\Shared\MessagesCapabilityWebhooksInboundUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessagesCapabilityWebhooksStatusUrl;
use \OpenAPI\OpenAPI\Models\Shared\MessagesCapabilityWebhooksStatusUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\RtcCapability;
use \OpenAPI\OpenAPI\Models\Shared\RtcCapabilityWebhooks;
use \OpenAPI\OpenAPI\Models\Shared\RtcCapabilityWebhooksEventUrl;
use \OpenAPI\OpenAPI\Models\Shared\RtcCapabilityWebhooksEventUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyCapability;
use \OpenAPI\OpenAPI\Models\Shared\VerifyCapabilityVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyCapabilityWebhooks;
use \OpenAPI\OpenAPI\Models\Shared\VerifyCapabilityWebhooksStatusUrl;
use \OpenAPI\OpenAPI\Models\Shared\VerifyCapabilityWebhooksStatusUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapability;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityPayments;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityPaymentsGateways;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityPaymentsGatewaysModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooks;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooksAnswerUrl;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooksEventUrl;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooksEventUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooksFallbackAnswerUrl;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBodyKeys;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBodyPrivacy;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequestBody();
    $request->capabilities = new Capabilities();
    $request->capabilities->meetings = new MeetingsCapability();
    $request->capabilities->meetings->webhooks = new MeetingsCapabilityWebhooks();
    $request->capabilities->meetings->webhooks->recordingChanged = new MeetingsCapabilityWebhooksRecordingChanged();
    $request->capabilities->meetings->webhooks->recordingChanged->address = 'https://example.com/webhooks/event';
    $request->capabilities->meetings->webhooks->recordingChanged->httpMethod = MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum::POST;
    $request->capabilities->meetings->webhooks->roomChanged = new MeetingsCapabilityWebhooksRoomChanged();
    $request->capabilities->meetings->webhooks->roomChanged->address = 'https://example.com/webhooks/event';
    $request->capabilities->meetings->webhooks->roomChanged->httpMethod = MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum::POST;
    $request->capabilities->meetings->webhooks->sessionChanged = new MeetingsCapabilityWebhooksSessionChanged();
    $request->capabilities->meetings->webhooks->sessionChanged->address = 'https://example.com/webhooks/event';
    $request->capabilities->meetings->webhooks->sessionChanged->httpMethod = MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum::POST;
    $request->capabilities->messages = new MessagesCapability();
    $request->capabilities->messages->version = 'error';
    $request->capabilities->messages->webhooks = new MessagesCapabilityWebhooks();
    $request->capabilities->messages->webhooks->inboundUrl = new MessagesCapabilityWebhooksInboundUrl();
    $request->capabilities->messages->webhooks->inboundUrl->address = 'https://example.com/webhooks/inbound';
    $request->capabilities->messages->webhooks->inboundUrl->httpMethod = MessagesCapabilityWebhooksInboundUrlHttpMethodEnum::POST;
    $request->capabilities->messages->webhooks->statusUrl = new MessagesCapabilityWebhooksStatusUrl();
    $request->capabilities->messages->webhooks->statusUrl->address = 'https://example.com/webhooks/status';
    $request->capabilities->messages->webhooks->statusUrl->httpMethod = MessagesCapabilityWebhooksStatusUrlHttpMethodEnum::POST;
    $request->capabilities->rtc = new RtcCapability();
    $request->capabilities->rtc->legPersistenceTime = 5;
    $request->capabilities->rtc->signedCallbacks = true;
    $request->capabilities->rtc->webhooks = new RtcCapabilityWebhooks();
    $request->capabilities->rtc->webhooks->eventUrl = new RtcCapabilityWebhooksEventUrl();
    $request->capabilities->rtc->webhooks->eventUrl->address = 'https://example.com/webhooks/event';
    $request->capabilities->rtc->webhooks->eventUrl->httpMethod = RtcCapabilityWebhooksEventUrlHttpMethodEnum::POST;
    $request->capabilities->vbc = [
        'suscipit' => 'iure',
        'magnam' => 'debitis',
        'ipsa' => 'delectus',
    ];
    $request->capabilities->verify = new VerifyCapability();
    $request->capabilities->verify->version = VerifyCapabilityVersionEnum::V2;
    $request->capabilities->verify->webhooks = new VerifyCapabilityWebhooks();
    $request->capabilities->verify->webhooks->statusUrl = new VerifyCapabilityWebhooksStatusUrl();
    $request->capabilities->verify->webhooks->statusUrl->address = 'https://example.com/webhooks/event';
    $request->capabilities->verify->webhooks->statusUrl->httpMethod = VerifyCapabilityWebhooksStatusUrlHttpMethodEnum::POST;
    $request->capabilities->voice = new VoiceCapability();
    $request->capabilities->voice->conversationTtl = 30;
    $request->capabilities->voice->payments = new VoiceCapabilityPayments();
    $request->capabilities->voice->payments->gateways = [
        new VoiceCapabilityPaymentsGateways(),
        new VoiceCapabilityPaymentsGateways(),
    ];
    $request->capabilities->voice->signedCallbacks = true;
    $request->capabilities->voice->webhooks = new VoiceCapabilityWebhooks();
    $request->capabilities->voice->webhooks->answerUrl = new VoiceCapabilityWebhooksAnswerUrl();
    $request->capabilities->voice->webhooks->answerUrl->address = 'https://example.com/webhooks/answer';
    $request->capabilities->voice->webhooks->answerUrl->connectionTimeout = 500;
    $request->capabilities->voice->webhooks->answerUrl->httpMethod = VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum::POST;
    $request->capabilities->voice->webhooks->answerUrl->socketTimeout = 3000;
    $request->capabilities->voice->webhooks->eventUrl = new VoiceCapabilityWebhooksEventUrl();
    $request->capabilities->voice->webhooks->eventUrl->address = 'https://example.com/webhooks/event';
    $request->capabilities->voice->webhooks->eventUrl->connectionTimeout = 500;
    $request->capabilities->voice->webhooks->eventUrl->httpMethod = VoiceCapabilityWebhooksEventUrlHttpMethodEnum::POST;
    $request->capabilities->voice->webhooks->eventUrl->socketTimeout = 3000;
    $request->capabilities->voice->webhooks->fallbackAnswerUrl = new VoiceCapabilityWebhooksFallbackAnswerUrl();
    $request->capabilities->voice->webhooks->fallbackAnswerUrl->address = 'https://fallback.example.com/webhooks/answer';
    $request->capabilities->voice->webhooks->fallbackAnswerUrl->connectionTimeout = 500;
    $request->capabilities->voice->webhooks->fallbackAnswerUrl->httpMethod = VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum::POST;
    $request->capabilities->voice->webhooks->fallbackAnswerUrl->socketTimeout = 3000;
    $request->keys = new CreateApplicationRequestBodyKeys();
    $request->keys->publicKey = '-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCA
    KOxjsU4pf/sMFi9N0jqcSLcjxu33G
    d/vynKnlw9SENi+UZR44GdjGdmfm1
    tL1eA7IBh2HNnkYXnAwYzKJoa4eO3
    0kYWekeIZawIwe/g9faFgkev+1xsO
    OUNhPx2LhuLmgwWSRS4L5W851Xe3f
    UQIDAQAB
    -----END PUBLIC KEY-----
    ';
    $request->name = 'Demo Application';
    $request->privacy = new CreateApplicationRequestBodyPrivacy();
    $request->privacy->improveAi = true;

    $response = $sdk->sdk->createApplication($request);

    if ($response->createApplication201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplication

Deleting an application **cannot be undone**.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationRequest();
    $request->id = '67cc8796-ed15-41a0-9dfc-2ddf7cc78ca1';

    $response = $sdk->sdk->deleteApplication($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplication

Get an application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationRequest();
    $request->id = 'ba928fc8-1674-42cb-b392-05929396fea7';

    $response = $sdk->sdk->getApplication($request);

    if ($response->applicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplication

List available applications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationRequest();
    $request->page = 359508;
    $request->pageSize = 613064;

    $response = $sdk->sdk->listApplication($request);

    if ($response->applicationResponseCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplication

Update an application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Capabilities;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapability;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooks;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooksRecordingChanged;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooksRoomChanged;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooksSessionChanged;
use \OpenAPI\OpenAPI\Models\Shared\MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessagesCapability;
use \OpenAPI\OpenAPI\Models\Shared\MessagesCapabilityWebhooks;
use \OpenAPI\OpenAPI\Models\Shared\MessagesCapabilityWebhooksInboundUrl;
use \OpenAPI\OpenAPI\Models\Shared\MessagesCapabilityWebhooksInboundUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessagesCapabilityWebhooksStatusUrl;
use \OpenAPI\OpenAPI\Models\Shared\MessagesCapabilityWebhooksStatusUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\RtcCapability;
use \OpenAPI\OpenAPI\Models\Shared\RtcCapabilityWebhooks;
use \OpenAPI\OpenAPI\Models\Shared\RtcCapabilityWebhooksEventUrl;
use \OpenAPI\OpenAPI\Models\Shared\RtcCapabilityWebhooksEventUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyCapability;
use \OpenAPI\OpenAPI\Models\Shared\VerifyCapabilityVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyCapabilityWebhooks;
use \OpenAPI\OpenAPI\Models\Shared\VerifyCapabilityWebhooksStatusUrl;
use \OpenAPI\OpenAPI\Models\Shared\VerifyCapabilityWebhooksStatusUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapability;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityPayments;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityPaymentsGateways;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityPaymentsGatewaysModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooks;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooksAnswerUrl;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooksEventUrl;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooksEventUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooksFallbackAnswerUrl;
use \OpenAPI\OpenAPI\Models\Shared\VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBodyKeys;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequestBodyPrivacy;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationRequest();
    $request->requestBody = new UpdateApplicationRequestBody();
    $request->requestBody->capabilities = new Capabilities();
    $request->requestBody->capabilities->meetings = new MeetingsCapability();
    $request->requestBody->capabilities->meetings->webhooks = new MeetingsCapabilityWebhooks();
    $request->requestBody->capabilities->meetings->webhooks->recordingChanged = new MeetingsCapabilityWebhooksRecordingChanged();
    $request->requestBody->capabilities->meetings->webhooks->recordingChanged->address = 'https://example.com/webhooks/event';
    $request->requestBody->capabilities->meetings->webhooks->recordingChanged->httpMethod = MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum::POST;
    $request->requestBody->capabilities->meetings->webhooks->roomChanged = new MeetingsCapabilityWebhooksRoomChanged();
    $request->requestBody->capabilities->meetings->webhooks->roomChanged->address = 'https://example.com/webhooks/event';
    $request->requestBody->capabilities->meetings->webhooks->roomChanged->httpMethod = MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum::POST;
    $request->requestBody->capabilities->meetings->webhooks->sessionChanged = new MeetingsCapabilityWebhooksSessionChanged();
    $request->requestBody->capabilities->meetings->webhooks->sessionChanged->address = 'https://example.com/webhooks/event';
    $request->requestBody->capabilities->meetings->webhooks->sessionChanged->httpMethod = MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum::POST;
    $request->requestBody->capabilities->messages = new MessagesCapability();
    $request->requestBody->capabilities->messages->version = 'iure';
    $request->requestBody->capabilities->messages->webhooks = new MessagesCapabilityWebhooks();
    $request->requestBody->capabilities->messages->webhooks->inboundUrl = new MessagesCapabilityWebhooksInboundUrl();
    $request->requestBody->capabilities->messages->webhooks->inboundUrl->address = 'https://example.com/webhooks/inbound';
    $request->requestBody->capabilities->messages->webhooks->inboundUrl->httpMethod = MessagesCapabilityWebhooksInboundUrlHttpMethodEnum::POST;
    $request->requestBody->capabilities->messages->webhooks->statusUrl = new MessagesCapabilityWebhooksStatusUrl();
    $request->requestBody->capabilities->messages->webhooks->statusUrl->address = 'https://example.com/webhooks/status';
    $request->requestBody->capabilities->messages->webhooks->statusUrl->httpMethod = MessagesCapabilityWebhooksStatusUrlHttpMethodEnum::POST;
    $request->requestBody->capabilities->rtc = new RtcCapability();
    $request->requestBody->capabilities->rtc->legPersistenceTime = 5;
    $request->requestBody->capabilities->rtc->signedCallbacks = true;
    $request->requestBody->capabilities->rtc->webhooks = new RtcCapabilityWebhooks();
    $request->requestBody->capabilities->rtc->webhooks->eventUrl = new RtcCapabilityWebhooksEventUrl();
    $request->requestBody->capabilities->rtc->webhooks->eventUrl->address = 'https://example.com/webhooks/event';
    $request->requestBody->capabilities->rtc->webhooks->eventUrl->httpMethod = RtcCapabilityWebhooksEventUrlHttpMethodEnum::POST;
    $request->requestBody->capabilities->vbc = [
        'quidem' => 'architecto',
        'ipsa' => 'reiciendis',
        'est' => 'mollitia',
        'laborum' => 'dolores',
    ];
    $request->requestBody->capabilities->verify = new VerifyCapability();
    $request->requestBody->capabilities->verify->version = VerifyCapabilityVersionEnum::V2;
    $request->requestBody->capabilities->verify->webhooks = new VerifyCapabilityWebhooks();
    $request->requestBody->capabilities->verify->webhooks->statusUrl = new VerifyCapabilityWebhooksStatusUrl();
    $request->requestBody->capabilities->verify->webhooks->statusUrl->address = 'https://example.com/webhooks/event';
    $request->requestBody->capabilities->verify->webhooks->statusUrl->httpMethod = VerifyCapabilityWebhooksStatusUrlHttpMethodEnum::POST;
    $request->requestBody->capabilities->voice = new VoiceCapability();
    $request->requestBody->capabilities->voice->conversationTtl = 30;
    $request->requestBody->capabilities->voice->payments = new VoiceCapabilityPayments();
    $request->requestBody->capabilities->voice->payments->gateways = [
        new VoiceCapabilityPaymentsGateways(),
    ];
    $request->requestBody->capabilities->voice->signedCallbacks = true;
    $request->requestBody->capabilities->voice->webhooks = new VoiceCapabilityWebhooks();
    $request->requestBody->capabilities->voice->webhooks->answerUrl = new VoiceCapabilityWebhooksAnswerUrl();
    $request->requestBody->capabilities->voice->webhooks->answerUrl->address = 'https://example.com/webhooks/answer';
    $request->requestBody->capabilities->voice->webhooks->answerUrl->connectionTimeout = 500;
    $request->requestBody->capabilities->voice->webhooks->answerUrl->httpMethod = VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum::POST;
    $request->requestBody->capabilities->voice->webhooks->answerUrl->socketTimeout = 3000;
    $request->requestBody->capabilities->voice->webhooks->eventUrl = new VoiceCapabilityWebhooksEventUrl();
    $request->requestBody->capabilities->voice->webhooks->eventUrl->address = 'https://example.com/webhooks/event';
    $request->requestBody->capabilities->voice->webhooks->eventUrl->connectionTimeout = 500;
    $request->requestBody->capabilities->voice->webhooks->eventUrl->httpMethod = VoiceCapabilityWebhooksEventUrlHttpMethodEnum::POST;
    $request->requestBody->capabilities->voice->webhooks->eventUrl->socketTimeout = 3000;
    $request->requestBody->capabilities->voice->webhooks->fallbackAnswerUrl = new VoiceCapabilityWebhooksFallbackAnswerUrl();
    $request->requestBody->capabilities->voice->webhooks->fallbackAnswerUrl->address = 'https://fallback.example.com/webhooks/answer';
    $request->requestBody->capabilities->voice->webhooks->fallbackAnswerUrl->connectionTimeout = 500;
    $request->requestBody->capabilities->voice->webhooks->fallbackAnswerUrl->httpMethod = VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum::POST;
    $request->requestBody->capabilities->voice->webhooks->fallbackAnswerUrl->socketTimeout = 3000;
    $request->requestBody->keys = new UpdateApplicationRequestBodyKeys();
    $request->requestBody->keys->publicKey = '-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCA
    KOxjsU4pf/sMFi9N0jqcSLcjxu33G
    d/vynKnlw9SENi+UZR44GdjGdmfm1
    tL1eA7IBh2HNnkYXnAwYzKJoa4eO3
    0kYWekeIZawIwe/g9faFgkev+1xsO
    OUNhPx2LhuLmgwWSRS4L5W851Xe3f
    UQIDAQAB
    -----END PUBLIC KEY-----
    ';
    $request->requestBody->name = 'Demo Application';
    $request->requestBody->privacy = new UpdateApplicationRequestBodyPrivacy();
    $request->requestBody->privacy->improveAi = true;
    $request->id = '52c59559-07af-4f1a-ba2f-a9467739251a';

    $response = $sdk->sdk->updateApplication($request);

    if ($response->updateApplication200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
