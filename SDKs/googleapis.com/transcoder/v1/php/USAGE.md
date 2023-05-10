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
    $request->jobTemplate->labels = [
        'ipsa' => 'delectus',
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->jobTemplate->name = 'Miriam Huel';
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->jobTemplateId = 'perferendis';
    $request->key = 'ipsam';
    $request->oauthToken = 'repellendus';
    $request->parent = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

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