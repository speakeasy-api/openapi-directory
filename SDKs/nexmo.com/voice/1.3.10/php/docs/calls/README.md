# calls

## Overview

Fetch, Create and Modify voice calls

### Available Operations

* [createCall](#createcall) - Create an outbound call
* [getCall](#getcall) - Get detail of a specific call
* [getCalls](#getcalls) - Get details of your calls
* [updateCall](#updatecall) - Modify an in progress call

## createCall

Create an outbound Call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCallRequestAnswerUrl();
    $request->answerMethod = CreateCallRequestAnswerUrlAnswerMethodEnum::POST;
    $request->answerUrl = [
        'repellendus',
        'sapiente',
    ];
    $request->eventMethod = CreateCallRequestAnswerUrlEventMethodEnum::GET;
    $request->eventUrl = [
        'https://trim-wheat.info',
    ];
    $request->from = new EndpointPhoneFrom();
    $request->from->number = '14155550100';
    $request->from->type = 'phone';
    $request->lengthTimer = 799159;
    $request->machineDetection = CreateCallRequestAnswerUrlMachineDetectionEnum::CONTINUE;
    $request->randomFromNumber = false;
    $request->ringingTimer = 800911;
    $request->to = [
        new EndpointWebsocket(),
        new EndpointVBCExtension(),
    ];

    $requestSecurity = new CreateCallSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->calls->createCall($request, $requestSecurity);

    if ($response->createCallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCall

Get detail of a specific call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallRequest();
    $request->uuid = 'a1ba928f-c816-4742-8b73-9205929396fe';

    $requestSecurity = new GetCallSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->calls->getCall($request, $requestSecurity);

    if ($response->getCallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCalls

Get details of your calls

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCallsStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCallsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallsRequest();
    $request->conversationUuid = 'CON-f972836a-550f-45fa-956c-12a2ab5b7d22';
    $request->dateEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2016-11-14T07:45:14Z');
    $request->dateStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2016-11-14T07:45:14Z');
    $request->order = GetCallsOrderEnum::DESC;
    $request->pageSize = 449950;
    $request->recordIndex = 359508;
    $request->status = GetCallsStatusEnum::STARTED;

    $requestSecurity = new GetCallsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->calls->getCalls($request, $requestSecurity);

    if ($response->getCallsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCall

Modify an in progress call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCallRequest();
    $request->requestBody = new UpdateCallRequestUnmute();
    $request->requestBody->action = UpdateCallRequestUnmuteActionEnum::MUTE;
    $request->uuid = '6eb10faa-a235-42c5-9559-07aff1a3a2fa';

    $requestSecurity = new UpdateCallSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->calls->updateCall($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
