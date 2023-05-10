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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [calls](docs/calls/README.md)

* [createCall](docs/calls/README.md#createcall) - Create an outbound call
* [getCall](docs/calls/README.md#getcall) - Get detail of a specific call
* [getCalls](docs/calls/README.md#getcalls) - Get details of your calls
* [updateCall](docs/calls/README.md#updatecall) - Modify an in progress call

### [playDTMF](docs/playdtmf/README.md)

* [startDTMF](docs/playdtmf/README.md#startdtmf) - Play DTMF tones into a call

### [playTTS](docs/playtts/README.md)

* [startTalk](docs/playtts/README.md#starttalk) - Play text to speech into a call
* [stopTalk](docs/playtts/README.md#stoptalk) - Stop text to speech in a call

### [streamAudio](docs/streamaudio/README.md)

* [startStream](docs/streamaudio/README.md#startstream) - Play an audio file into a call
* [stopStream](docs/streamaudio/README.md#stopstream) - Stop playing an audio file into a call
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
