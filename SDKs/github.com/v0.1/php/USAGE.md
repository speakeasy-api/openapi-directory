<!-- Start SDK Example Usage -->
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
<!-- End SDK Example Usage -->