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
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceVideosAnnotateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1VideoContext;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1VideoSegment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1SpeechContext;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceVideosAnnotateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VideointelligenceVideosAnnotateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest = new GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest();
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->features = [
        GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum::OBJECT_TRACKING,
        GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum::CELEBRITY_RECOGNITION,
        GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum::TEXT_DETECTION,
    ];
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->inputContent = 'nulla';
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->inputUri = 'corrupti';
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->locationId = 'illum';
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->outputUri = 'vel';
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext = new GoogleCloudVideointelligenceV1p3beta1VideoContext();
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig();
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->explicitContentDetectionConfig->model = 'error';
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->faceDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig();
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->faceDetectionConfig->includeAttributes = false;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->faceDetectionConfig->includeBoundingBoxes = false;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->faceDetectionConfig->model = 'deserunt';
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->labelDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig();
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->labelDetectionConfig->frameConfidenceThreshold = 3843.82;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->labelDetectionConfig->labelDetectionMode = GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfigLabelDetectionModeEnum::SHOT_MODE;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->labelDetectionConfig->model = 'magnam';
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->labelDetectionConfig->stationaryCamera = false;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->labelDetectionConfig->videoConfidenceThreshold = 8917.73;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->objectTrackingConfig = new GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig();
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->objectTrackingConfig->model = 'ipsa';
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->personDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig();
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->personDetectionConfig->includeAttributes = false;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->personDetectionConfig->includeBoundingBoxes = false;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->personDetectionConfig->includePoseLandmarks = false;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->segments = [
        new GoogleCloudVideointelligenceV1p3beta1VideoSegment(),
        new GoogleCloudVideointelligenceV1p3beta1VideoSegment(),
        new GoogleCloudVideointelligenceV1p3beta1VideoSegment(),
        new GoogleCloudVideointelligenceV1p3beta1VideoSegment(),
    ];
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig();
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->shotChangeDetectionConfig->model = 'tempora';
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig = new GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig();
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->audioTracks = [
        477665,
        791725,
    ];
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->diarizationSpeakerCount = 812169;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->enableAutomaticPunctuation = false;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->enableSpeakerDiarization = false;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->enableWordConfidence = false;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->filterProfanity = false;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->languageCode = 'voluptatum';
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->maxAlternatives = 479977;
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->speechContexts = [
        new GoogleCloudVideointelligenceV1p3beta1SpeechContext(),
        new GoogleCloudVideointelligenceV1p3beta1SpeechContext(),
        new GoogleCloudVideointelligenceV1p3beta1SpeechContext(),
    ];
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->textDetectionConfig = new GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig();
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->textDetectionConfig->languageHints = [
        'recusandae',
        'temporibus',
    ];
    $request->googleCloudVideointelligenceV1p3beta1AnnotateVideoRequest->videoContext->textDetectionConfig->model = 'ab';
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'perferendis';
    $request->key = 'ipsam';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new VideointelligenceVideosAnnotateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->videos->videointelligenceVideosAnnotate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [videos](docs/videos/README.md)

* [videointelligenceVideosAnnotate](docs/videos/README.md#videointelligencevideosannotate) - Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
