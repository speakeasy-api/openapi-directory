# edit

### Available Operations

* [getRender](#getrender) - Get Render Status
* [postRender](#postrender) - Render Asset

## getRender

Get the rendering status, temporary asset url and details of a render by ID.

**base URL:** https://api.shotstack.io/{version}

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRenderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRenderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRenderRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $requestSecurity = new GetRenderSecurity();
    $requestSecurity->developerKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->edit->getRender($request, $requestSecurity);

    if ($response->renderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRender

Queue and render the contents of a timeline as a video, image or audio file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Edit;
use \OpenAPI\OpenAPI\Models\Shared\EditDiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\Output;
use \OpenAPI\OpenAPI\Models\Shared\OutputAspectRatioEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputFpsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Poster;
use \OpenAPI\OpenAPI\Models\Shared\OutputQualityEnum;
use \OpenAPI\OpenAPI\Models\Shared\Range;
use \OpenAPI\OpenAPI\Models\Shared\OutputResolutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputScaleToEnum;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\Thumbnail;
use \OpenAPI\OpenAPI\Models\Shared\Timeline;
use \OpenAPI\OpenAPI\Models\Shared\Font;
use \OpenAPI\OpenAPI\Models\Shared\Soundtrack;
use \OpenAPI\OpenAPI\Models\Shared\SoundtrackEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\Track;
use \OpenAPI\OpenAPI\Models\Shared\Clip;
use \OpenAPI\OpenAPI\Models\Shared\ClipEffectEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClipFilterEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClipFitEnum;
use \OpenAPI\OpenAPI\Models\Shared\Offset;
use \OpenAPI\OpenAPI\Models\Shared\ClipPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Transition;
use \OpenAPI\OpenAPI\Models\Shared\TransitionInEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransitionOutEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostRenderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Edit();
    $request->callback = 'https://my-server.com/callback.php';
    $request->disk = EditDiskEnum::MOUNT;
    $request->output = new Output();
    $request->output->aspectRatio = OutputAspectRatioEnum::SIXTEEN9;
    $request->output->destinations = [
        new ShotstackDestination(),
        new ShotstackDestination(),
        new ShotstackDestination(),
    ];
    $request->output->format = OutputFormatEnum::MP4;
    $request->output->fps = OutputFpsEnum::TWENTY_FOUR;
    $request->output->poster = new Poster();
    $request->output->poster->capture = 1;
    $request->output->quality = OutputQualityEnum::MEDIUM;
    $request->output->range = new Range();
    $request->output->range->length = 6;
    $request->output->range->start = 3;
    $request->output->resolution = OutputResolutionEnum::SD;
    $request->output->scaleTo = OutputScaleToEnum::MOBILE;
    $request->output->size = new Size();
    $request->output->size->height = 800;
    $request->output->size->width = 1200;
    $request->output->thumbnail = new Thumbnail();
    $request->output->thumbnail->capture = 1;
    $request->output->thumbnail->scale = 0.3;
    $request->timeline = new Timeline();
    $request->timeline->background = 'excepturi';
    $request->timeline->cache = false;
    $request->timeline->fonts = [
        new Font(),
    ];
    $request->timeline->soundtrack = new Soundtrack();
    $request->timeline->soundtrack->effect = SoundtrackEffectEnum::FADE_IN;
    $request->timeline->soundtrack->src = 'https://s3-ap-northeast-1.amazonaws.com/my-bucket/music.mp3';
    $request->timeline->soundtrack->volume = 3241.41;
    $request->timeline->tracks = [
        new Track(),
        new Track(),
        new Track(),
    ];

    $requestSecurity = new PostRenderSecurity();
    $requestSecurity->developerKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->edit->postRender($request, $requestSecurity);

    if ($response->queuedResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
