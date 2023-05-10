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
use \OpenAPI\OpenAPI\Models\Shared\AudioMapping;
use \OpenAPI\OpenAPI\Models\Shared\TextStream;
use \OpenAPI\OpenAPI\Models\Shared\TextMapping;
use \OpenAPI\OpenAPI\Models\Shared\VideoStream;
use \OpenAPI\OpenAPI\Models\Shared\H264CodecSettings;
use \OpenAPI\OpenAPI\Models\Shared\H265CodecSettings;
use \OpenAPI\OpenAPI\Models\Shared\Vp9CodecSettings;
use \OpenAPI\OpenAPI\Models\Shared\Input;
use \OpenAPI\OpenAPI\Models\Shared\PreprocessingConfig;
use \OpenAPI\OpenAPI\Models\Shared\Audio;
use \OpenAPI\OpenAPI\Models\Shared\Color;
use \OpenAPI\OpenAPI\Models\Shared\Crop;
use \OpenAPI\OpenAPI\Models\Shared\Deblock;
use \OpenAPI\OpenAPI\Models\Shared\Deinterlace;
use \OpenAPI\OpenAPI\Models\Shared\BwdifConfig;
use \OpenAPI\OpenAPI\Models\Shared\YadifConfig;
use \OpenAPI\OpenAPI\Models\Shared\Denoise;
use \OpenAPI\OpenAPI\Models\Shared\Pad;
use \OpenAPI\OpenAPI\Models\Shared\Manifest;
use \OpenAPI\OpenAPI\Models\Shared\ManifestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MuxStream;
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
        new AdBreak(),
    ];
    $request->jobTemplate->config->editList = [
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
        new Input(),
    ];
    $request->jobTemplate->config->manifests = [
        new Manifest(),
        new Manifest(),
    ];
    $request->jobTemplate->config->muxStreams = [
        new MuxStream(),
        new MuxStream(),
        new MuxStream(),
    ];
    $request->jobTemplate->config->output = new Output();
    $request->jobTemplate->config->output->uri = 'https://rash-butcher.net';
    $request->jobTemplate->config->overlays = [
        new Overlay(),
        new Overlay(),
        new Overlay(),
    ];
    $request->jobTemplate->config->pubsubDestination = new PubsubDestination();
    $request->jobTemplate->config->pubsubDestination->topic = 'occaecati';
    $request->jobTemplate->config->spriteSheets = [
        new SpriteSheet(),
    ];
    $request->jobTemplate->labels = [
        'hic' => 'optio',
        'totam' => 'beatae',
        'commodi' => 'molestiae',
    ];
    $request->jobTemplate->name = 'Norma Ryan';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->jobTemplateId = 'ad';
    $request->key = 'natus';
    $request->oauthToken = 'sed';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'saepe';
    $request->allowMissing = false;
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'enim';
    $request->key = 'omnis';
    $request->name = 'Ms. Cathy Marks';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';

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
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellat';
    $request->fields = 'mollitia';
    $request->filter = 'occaecati';
    $request->key = 'numquam';
    $request->oauthToken = 'commodi';
    $request->orderBy = 'quam';
    $request->pageSize = 474697;
    $request->pageToken = 'velit';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'quia';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'vitae';

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
use \OpenAPI\OpenAPI\Models\Shared\AudioMapping;
use \OpenAPI\OpenAPI\Models\Shared\TextStream;
use \OpenAPI\OpenAPI\Models\Shared\TextMapping;
use \OpenAPI\OpenAPI\Models\Shared\VideoStream;
use \OpenAPI\OpenAPI\Models\Shared\H264CodecSettings;
use \OpenAPI\OpenAPI\Models\Shared\H265CodecSettings;
use \OpenAPI\OpenAPI\Models\Shared\Vp9CodecSettings;
use \OpenAPI\OpenAPI\Models\Shared\Input;
use \OpenAPI\OpenAPI\Models\Shared\PreprocessingConfig;
use \OpenAPI\OpenAPI\Models\Shared\Audio;
use \OpenAPI\OpenAPI\Models\Shared\Color;
use \OpenAPI\OpenAPI\Models\Shared\Crop;
use \OpenAPI\OpenAPI\Models\Shared\Deblock;
use \OpenAPI\OpenAPI\Models\Shared\Deinterlace;
use \OpenAPI\OpenAPI\Models\Shared\BwdifConfig;
use \OpenAPI\OpenAPI\Models\Shared\YadifConfig;
use \OpenAPI\OpenAPI\Models\Shared\Denoise;
use \OpenAPI\OpenAPI\Models\Shared\Pad;
use \OpenAPI\OpenAPI\Models\Shared\Manifest;
use \OpenAPI\OpenAPI\Models\Shared\ManifestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MuxStream;
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
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\JobModeEnum;
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
        new AdBreak(),
        new AdBreak(),
    ];
    $request->jobInput->config->editList = [
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
    $request->jobInput->config->output->uri = 'http://pushy-snuggle.com';
    $request->jobInput->config->overlays = [
        new Overlay(),
    ];
    $request->jobInput->config->pubsubDestination = new PubsubDestination();
    $request->jobInput->config->pubsubDestination->topic = 'error';
    $request->jobInput->config->spriteSheets = [
        new SpriteSheet(),
        new SpriteSheet(),
        new SpriteSheet(),
        new SpriteSheet(),
    ];
    $request->jobInput->error = new Status();
    $request->jobInput->error->code = 673660;
    $request->jobInput->error->details = [
        [
            'voluptatibus' => 'vero',
            'nihil' => 'praesentium',
            'voluptatibus' => 'ipsa',
            'omnis' => 'voluptate',
        ],
    ];
    $request->jobInput->error->message = 'cum';
    $request->jobInput->inputUri = 'perferendis';
    $request->jobInput->labels = [
        'reprehenderit' => 'ut',
    ];
    $request->jobInput->mode = JobModeEnum::PROCESSING_MODE_BATCH;
    $request->jobInput->name = 'Stacy Gulgowski MD';
    $request->jobInput->outputUri = 'enim';
    $request->jobInput->templateId = 'accusamus';
    $request->jobInput->ttlAfterCompletionDays = 414263;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'quidem';
    $request->key = 'molestias';
    $request->oauthToken = 'excepturi';
    $request->parent = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'veritatis';
    $request->filter = 'itaque';
    $request->key = 'incidunt';
    $request->oauthToken = 'enim';
    $request->orderBy = 'consequatur';
    $request->pageSize = 667411;
    $request->pageToken = 'quibusdam';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';

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
