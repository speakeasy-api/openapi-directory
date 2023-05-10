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
use \OpenAPI\OpenAPI\Models\Operations\TranscoderProjectsLocationsJobTemplatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobTemplate;
use \OpenAPI\OpenAPI\Models\Shared\JobConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdBreak;
use \OpenAPI\OpenAPI\Models\Shared\EditAtom;
use \OpenAPI\OpenAPI\Models\Shared\ElementaryStream;
use \OpenAPI\OpenAPI\Models\Shared\AudioStream;
use \OpenAPI\OpenAPI\Models\Shared\AudioAtom;
use \OpenAPI\OpenAPI\Models\Shared\AudioChannel;
use \OpenAPI\OpenAPI\Models\Shared\AudioChannelInput;
use \OpenAPI\OpenAPI\Models\Shared\TextStream;
use \OpenAPI\OpenAPI\Models\Shared\TextAtom;
use \OpenAPI\OpenAPI\Models\Shared\TextInput;
use \OpenAPI\OpenAPI\Models\Shared\VideoStream;
use \OpenAPI\OpenAPI\Models\Shared\Input;
use \OpenAPI\OpenAPI\Models\Shared\PreprocessingConfig;
use \OpenAPI\OpenAPI\Models\Shared\Audio;
use \OpenAPI\OpenAPI\Models\Shared\Color;
use \OpenAPI\OpenAPI\Models\Shared\Crop;
use \OpenAPI\OpenAPI\Models\Shared\Deblock;
use \OpenAPI\OpenAPI\Models\Shared\Denoise;
use \OpenAPI\OpenAPI\Models\Shared\Pad;
use \OpenAPI\OpenAPI\Models\Shared\Manifest;
use \OpenAPI\OpenAPI\Models\Shared\ManifestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MuxStream;
use \OpenAPI\OpenAPI\Models\Shared\Encryption;
use \OpenAPI\OpenAPI\Models\Shared\Aes128Encryption;
use \OpenAPI\OpenAPI\Models\Shared\MpegCommonEncryption;
use \OpenAPI\OpenAPI\Models\Shared\SampleAesEncryption;
use \OpenAPI\OpenAPI\Models\Shared\SegmentSettings;
use \OpenAPI\OpenAPI\Models\Shared\Output;
use \OpenAPI\OpenAPI\Models\Shared\Overlay;
use \OpenAPI\OpenAPI\Models\Shared\Animation;
use \OpenAPI\OpenAPI\Models\Shared\AnimationEnd;
use \OpenAPI\OpenAPI\Models\Shared\AnimationFade;
use \OpenAPI\OpenAPI\Models\Shared\AnimationFadeFadeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NormalizedCoordinate;
use \OpenAPI\OpenAPI\Models\Shared\AnimationStatic;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\PubsubDestination;
use \OpenAPI\OpenAPI\Models\Shared\SpriteSheet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranscoderProjectsLocationsJobTemplatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranscoderProjectsLocationsJobTemplatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->jobTemplate = new JobTemplate();
    $request->jobTemplate->config = new JobConfig();
    $request->jobTemplate->config->adBreaks = [
        new AdBreak(),
        new AdBreak(),
        new AdBreak(),
    ];
    $request->jobTemplate->config->editList = [
        new EditAtom(),
        new EditAtom(),
        new EditAtom(),
    ];
    $request->jobTemplate->config->elementaryStreams = [
        new ElementaryStream(),
        new ElementaryStream(),
        new ElementaryStream(),
        new ElementaryStream(),
    ];
    $request->jobTemplate->config->inputs = [
        new Input(),
        new Input(),
        new Input(),
    ];
    $request->jobTemplate->config->manifests = [
        new Manifest(),
        new Manifest(),
        new Manifest(),
        new Manifest(),
    ];
    $request->jobTemplate->config->muxStreams = [
        new MuxStream(),
        new MuxStream(),
        new MuxStream(),
    ];
    $request->jobTemplate->config->output = new Output();
    $request->jobTemplate->config->output->uri = 'https://impressive-ox.name';
    $request->jobTemplate->config->overlays = [
        new Overlay(),
        new Overlay(),
    ];
    $request->jobTemplate->config->pubsubDestination = new PubsubDestination();
    $request->jobTemplate->config->pubsubDestination->topic = 'iure';
    $request->jobTemplate->config->spriteSheets = [
        new SpriteSheet(),
        new SpriteSheet(),
    ];
    $request->jobTemplate->name = 'Larry Windler';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->jobTemplateId = 'iusto';
    $request->key = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new TranscoderProjectsLocationsJobTemplatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->transcoderProjectsLocationsJobTemplatesCreate($request, $requestSecurity);

    if ($response->jobTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [transcoderProjectsLocationsJobTemplatesCreate](docs/projects/README.md#transcoderprojectslocationsjobtemplatescreate) - Creates a job template in the specified region.
* [transcoderProjectsLocationsJobTemplatesDelete](docs/projects/README.md#transcoderprojectslocationsjobtemplatesdelete) - Deletes a job template.
* [transcoderProjectsLocationsJobTemplatesGet](docs/projects/README.md#transcoderprojectslocationsjobtemplatesget) - Returns the job template data.
* [transcoderProjectsLocationsJobTemplatesList](docs/projects/README.md#transcoderprojectslocationsjobtemplateslist) - Lists job templates in the specified region.
* [transcoderProjectsLocationsJobsCreate](docs/projects/README.md#transcoderprojectslocationsjobscreate) - Creates a job in the specified region.
* [transcoderProjectsLocationsJobsList](docs/projects/README.md#transcoderprojectslocationsjobslist) - Lists jobs in the specified region.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
