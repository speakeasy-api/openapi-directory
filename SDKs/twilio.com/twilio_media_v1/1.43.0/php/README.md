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
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaProcessorCreateMediaProcessorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaProcessorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMediaProcessorCreateMediaProcessorRequest();
    $request->extension = 'corrupti';
    $request->extensionContext = 'provident';
    $request->extensionEnvironment = 'distinctio';
    $request->maxDuration = 844266;
    $request->statusCallback = 'https://tidy-mascara.org';
    $request->statusCallbackMethod = CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum::POST;

    $requestSecurity = new CreateMediaProcessorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createMediaProcessor($request, $requestSecurity);

    if ($response->mediaV1MediaProcessor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createMediaProcessor](docs/sdk/README.md#createmediaprocessor)
* [createPlayerStreamer](docs/sdk/README.md#createplayerstreamer)
* [createPlayerStreamerPlaybackGrant](docs/sdk/README.md#createplayerstreamerplaybackgrant)
* [deleteMediaRecording](docs/sdk/README.md#deletemediarecording) - Deletes a MediaRecording resource identified by a SID.
* [fetchMediaProcessor](docs/sdk/README.md#fetchmediaprocessor) - Returns a single MediaProcessor resource identified by a SID.
* [fetchMediaRecording](docs/sdk/README.md#fetchmediarecording) - Returns a single MediaRecording resource identified by a SID.
* [fetchPlayerStreamer](docs/sdk/README.md#fetchplayerstreamer) - Returns a single PlayerStreamer resource identified by a SID.
* [fetchPlayerStreamerPlaybackGrant](docs/sdk/README.md#fetchplayerstreamerplaybackgrant) - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
* [listMediaProcessor](docs/sdk/README.md#listmediaprocessor) - Returns a list of MediaProcessors.
* [listMediaRecording](docs/sdk/README.md#listmediarecording) - Returns a list of MediaRecordings.
* [listPlayerStreamer](docs/sdk/README.md#listplayerstreamer) - Returns a list of PlayerStreamers.
* [updateMediaProcessor](docs/sdk/README.md#updatemediaprocessor) - Updates a MediaProcessor resource identified by a SID.
* [updatePlayerStreamer](docs/sdk/README.md#updateplayerstreamer) - Updates a PlayerStreamer resource identified by a SID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
