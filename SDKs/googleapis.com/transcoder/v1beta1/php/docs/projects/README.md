# projects

### Available Operations

* [transcoderProjectsLocationsJobTemplatesCreate](#transcoderprojectslocationsjobtemplatescreate) - Creates a job template in the specified region.
* [transcoderProjectsLocationsJobTemplatesDelete](#transcoderprojectslocationsjobtemplatesdelete) - Deletes a job template.
* [transcoderProjectsLocationsJobTemplatesGet](#transcoderprojectslocationsjobtemplatesget) - Returns the job template data.
* [transcoderProjectsLocationsJobTemplatesList](#transcoderprojectslocationsjobtemplateslist) - Lists job templates in the specified region.
* [transcoderProjectsLocationsJobsCreate](#transcoderprojectslocationsjobscreate) - Creates a job in the specified region.
* [transcoderProjectsLocationsJobsList](#transcoderprojectslocationsjobslist) - Lists jobs in the specified region.

## transcoderProjectsLocationsJobTemplatesCreate

Creates a job template in the specified region.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->jobTemplate = new JobTemplate();
    $request->jobTemplate->config = new JobConfig();
    $request->jobTemplate->config->adBreaks = [
        new AdBreak(),
        new AdBreak(),
        new AdBreak(),
    ];
    $request->jobTemplate->config->editList = [
        new EditAtom(),
    ];
    $request->jobTemplate->config->elementaryStreams = [
        new ElementaryStream(),
        new ElementaryStream(),
    ];
    $request->jobTemplate->config->inputs = [
        new Input(),
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
        new MuxStream(),
    ];
    $request->jobTemplate->config->output = new Output();
    $request->jobTemplate->config->output->uri = 'http://trifling-sunday.org';
    $request->jobTemplate->config->overlays = [
        new Overlay(),
        new Overlay(),
    ];
    $request->jobTemplate->config->pubsubDestination = new PubsubDestination();
    $request->jobTemplate->config->pubsubDestination->topic = 'quod';
    $request->jobTemplate->config->spriteSheets = [
        new SpriteSheet(),
        new SpriteSheet(),
        new SpriteSheet(),
        new SpriteSheet(),
    ];
    $request->jobTemplate->name = 'Deanna Sauer MD';
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'deleniti';
    $request->jobTemplateId = 'hic';
    $request->key = 'optio';
    $request->oauthToken = 'totam';
    $request->parent = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'modi';

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

## transcoderProjectsLocationsJobTemplatesDelete

Deletes a job template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranscoderProjectsLocationsJobTemplatesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranscoderProjectsLocationsJobTemplatesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranscoderProjectsLocationsJobTemplatesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'ipsum';
    $request->key = 'excepturi';
    $request->name = 'Dorothy Hane';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';

    $requestSecurity = new TranscoderProjectsLocationsJobTemplatesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->transcoderProjectsLocationsJobTemplatesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transcoderProjectsLocationsJobTemplatesGet

Returns the job template data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranscoderProjectsLocationsJobTemplatesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranscoderProjectsLocationsJobTemplatesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranscoderProjectsLocationsJobTemplatesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'corporis';
    $request->key = 'iste';
    $request->name = 'Mr. Kerry Predovic';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new TranscoderProjectsLocationsJobTemplatesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->transcoderProjectsLocationsJobTemplatesGet($request, $requestSecurity);

    if ($response->jobTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transcoderProjectsLocationsJobTemplatesList

Lists job templates in the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranscoderProjectsLocationsJobTemplatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranscoderProjectsLocationsJobTemplatesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranscoderProjectsLocationsJobTemplatesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'enim';
    $request->key = 'omnis';
    $request->oauthToken = 'nemo';
    $request->pageSize = 325047;
    $request->pageToken = 'excepturi';
    $request->parent = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new TranscoderProjectsLocationsJobTemplatesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->transcoderProjectsLocationsJobTemplatesList($request, $requestSecurity);

    if ($response->listJobTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transcoderProjectsLocationsJobsCreate

Creates a job in the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranscoderProjectsLocationsJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobInput;
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
use \OpenAPI\OpenAPI\Models\Shared\OriginUri;
use \OpenAPI\OpenAPI\Models\Shared\Progress;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranscoderProjectsLocationsJobsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranscoderProjectsLocationsJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->jobInput = new JobInput();
    $request->jobInput->config = new JobConfig();
    $request->jobInput->config->adBreaks = [
        new AdBreak(),
    ];
    $request->jobInput->config->editList = [
        new EditAtom(),
        new EditAtom(),
        new EditAtom(),
    ];
    $request->jobInput->config->elementaryStreams = [
        new ElementaryStream(),
    ];
    $request->jobInput->config->inputs = [
        new Input(),
        new Input(),
        new Input(),
    ];
    $request->jobInput->config->manifests = [
        new Manifest(),
    ];
    $request->jobInput->config->muxStreams = [
        new MuxStream(),
        new MuxStream(),
        new MuxStream(),
        new MuxStream(),
    ];
    $request->jobInput->config->output = new Output();
    $request->jobInput->config->output->uri = 'https://oily-desk.info';
    $request->jobInput->config->overlays = [
        new Overlay(),
        new Overlay(),
    ];
    $request->jobInput->config->pubsubDestination = new PubsubDestination();
    $request->jobInput->config->pubsubDestination->topic = 'molestiae';
    $request->jobInput->config->spriteSheets = [
        new SpriteSheet(),
    ];
    $request->jobInput->inputUri = 'error';
    $request->jobInput->name = 'Beatrice Brown';
    $request->jobInput->originUri = new OriginUri();
    $request->jobInput->originUri->dash = 'enim';
    $request->jobInput->originUri->hls = 'odit';
    $request->jobInput->outputUri = 'quo';
    $request->jobInput->priority = 196582;
    $request->jobInput->progress = new Progress();
    $request->jobInput->progress->analyzed = 9495.72;
    $request->jobInput->progress->encoded = 3687.25;
    $request->jobInput->progress->notified = 6625.27;
    $request->jobInput->progress->uploaded = 8209.94;
    $request->jobInput->templateId = 'aut';
    $request->jobInput->ttlAfterCompletionDays = 97101;
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'quasi';
    $request->key = 'reiciendis';
    $request->oauthToken = 'voluptatibus';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new TranscoderProjectsLocationsJobsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->transcoderProjectsLocationsJobsCreate($request, $requestSecurity);

    if ($response->job !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transcoderProjectsLocationsJobsList

Lists jobs in the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TranscoderProjectsLocationsJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TranscoderProjectsLocationsJobsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranscoderProjectsLocationsJobsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'perferendis';
    $request->key = 'doloremque';
    $request->oauthToken = 'reprehenderit';
    $request->pageSize = 282807;
    $request->pageToken = 'maiores';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new TranscoderProjectsLocationsJobsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->transcoderProjectsLocationsJobsList($request, $requestSecurity);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
