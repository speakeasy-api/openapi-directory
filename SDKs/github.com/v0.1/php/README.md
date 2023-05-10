# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [call](docs/call/README.md)

* [postV01BulkCall](docs/call/README.md#postv01bulkcall) - /v0.1/BulkCall/
* [postV01Call](docs/call/README.md#postv01call) - /v0.1/Call/
* [postV01CancelScheduledHangup](docs/call/README.md#postv01cancelscheduledhangup) - /v0.1/CancelScheduledHangup/
* [postV01CancelScheduledPlay](docs/call/README.md#postv01cancelscheduledplay) - /v0.1/CancelScheduledPlay/
* [postV01GroupCall](docs/call/README.md#postv01groupcall) - /v0.1/GroupCall/
* [postV01HangupAllCalls](docs/call/README.md#postv01hangupallcalls) - /v0.1/HangupAllCalls/
* [postV01HangupCall](docs/call/README.md#postv01hangupcall) - /v0.1/HangupCall/
* [postV01Play](docs/call/README.md#postv01play) - /v0.1/Play/
* [postV01PlayStop](docs/call/README.md#postv01playstop) - /v0.1/PlayStop/
* [postV01RecordStart](docs/call/README.md#postv01recordstart) - /v0.1/RecordStart/
* [postV01RecordStop](docs/call/README.md#postv01recordstop) - /v0.1/RecordStop/
* [postV01ScheduleHangup](docs/call/README.md#postv01schedulehangup) - /v0.1/ScheduleHangup/
* [postV01SchedulePlay](docs/call/README.md#postv01scheduleplay) - /v0.1/SchedulePlay/
* [postV01SendDigits](docs/call/README.md#postv01senddigits) - /v0.1/SendDigits/
* [postV01SoundTouch](docs/call/README.md#postv01soundtouch) - /v0.1/SoundTouch/
* [postV01SoundTouchStop](docs/call/README.md#postv01soundtouchstop) - /v0.1/SoundTouchStop/
* [postV01TransferCall](docs/call/README.md#postv01transfercall) - /v0.1/TransferCall/

### [conference](docs/conference/README.md)

* [postV01ConferenceDeaf](docs/conference/README.md#postv01conferencedeaf) - /v0.1/ConferenceDeaf/
* [postV01ConferenceHangup](docs/conference/README.md#postv01conferencehangup) - /v0.1/ConferenceHangup/
* [postV01ConferenceKick](docs/conference/README.md#postv01conferencekick) - /v0.1/ConferenceKick/
* [postV01ConferenceList](docs/conference/README.md#postv01conferencelist) - /v0.1/ConferenceList/
* [postV01ConferenceListMembers](docs/conference/README.md#postv01conferencelistmembers) - /v0.1/ConferenceListMembers/
* [postV01ConferenceMute](docs/conference/README.md#postv01conferencemute) - /v0.1/ConferenceMute/
* [postV01ConferencePlay](docs/conference/README.md#postv01conferenceplay) - /v0.1/ConferencePlay/
* [postV01ConferenceRecordStart](docs/conference/README.md#postv01conferencerecordstart) - /v0.1/ConferenceRecordStart/
* [postV01ConferenceRecordStop](docs/conference/README.md#postv01conferencerecordstop) - /v0.1/ConferenceRecordStop/
* [postV01ConferenceSpeak](docs/conference/README.md#postv01conferencespeak) - /v0.1/ConferenceSpeak/
* [postV01ConferenceUndeaf](docs/conference/README.md#postv01conferenceundeaf) - /v0.1/ConferenceUndeaf/
* [postV01ConferenceUnmute](docs/conference/README.md#postv01conferenceunmute) - /v0.1/ConferenceUnmute/
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
