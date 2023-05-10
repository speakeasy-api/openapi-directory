<!-- Start SDK Example Usage -->
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
    $request->answerMethod = CreateCallRequestAnswerUrlAnswerMethodEnum::GET;
    $request->answerUrl = [
        'quibusdam',
        'unde',
        'nulla',
    ];
    $request->eventMethod = CreateCallRequestAnswerUrlEventMethodEnum::GET;
    $request->eventUrl = [
        'http://physical-pegboard.info',
        'http://fond-teen.com',
        'https://fatherly-geyser.info',
        'https://studious-lynx.info',
    ];
    $request->from = new EndpointPhoneFrom();
    $request->from->number = '14155550100';
    $request->from->type = 'phone';
    $request->lengthTimer = 568045;
    $request->machineDetection = CreateCallRequestAnswerUrlMachineDetectionEnum::CONTINUE;
    $request->randomFromNumber = false;
    $request->ringingTimer = 392785;
    $request->to = [
        new EndpointVBCExtension(),
        new EndpointPhoneTo(),
        new EndpointSip(),
        new EndpointPhoneTo(),
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
<!-- End SDK Example Usage -->