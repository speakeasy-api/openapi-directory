# videos

### Available Operations

* [videointelligenceVideosAnnotate](#videointelligencevideosannotate) - Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

## videointelligenceVideosAnnotate

Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceVideosAnnotateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1VideoContext;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1VideoSegment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1SpeechContext;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceVideosAnnotateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VideointelligenceVideosAnnotateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest = new GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest();
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->features = [
        GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum::PERSON_DETECTION,
        GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum::FACE_DETECTION,
        GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum::OBJECT_TRACKING,
        GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum::LOGO_RECOGNITION,
    ];
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->inputContent = 'esse';
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->inputUri = 'totam';
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->locationId = 'porro';
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->outputUri = 'dolorum';
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext = new GoogleCloudVideointelligenceV1p2beta1VideoContext();
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig();
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->explicitContentDetectionConfig->model = 'dicta';
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->faceDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig();
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->faceDetectionConfig->includeAttributes = false;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->faceDetectionConfig->includeBoundingBoxes = false;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->faceDetectionConfig->model = 'nam';
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->labelDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig();
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->labelDetectionConfig->frameConfidenceThreshold = 6399.21;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->labelDetectionConfig->labelDetectionMode = GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfigLabelDetectionModeEnum::FRAME_MODE;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->labelDetectionConfig->model = 'fugit';
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->labelDetectionConfig->stationaryCamera = false;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->labelDetectionConfig->videoConfidenceThreshold = 5373.73;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->objectTrackingConfig = new GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig();
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->objectTrackingConfig->model = 'hic';
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->personDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig();
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->personDetectionConfig->includeAttributes = false;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->personDetectionConfig->includeBoundingBoxes = false;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->personDetectionConfig->includePoseLandmarks = false;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->segments = [
        new GoogleCloudVideointelligenceV1p2beta1VideoSegment(),
        new GoogleCloudVideointelligenceV1p2beta1VideoSegment(),
        new GoogleCloudVideointelligenceV1p2beta1VideoSegment(),
        new GoogleCloudVideointelligenceV1p2beta1VideoSegment(),
    ];
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig();
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->shotChangeDetectionConfig->model = 'totam';
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig = new GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig();
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->audioTracks = [
        414662,
    ];
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->diarizationSpeakerCount = 473600;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->enableAutomaticPunctuation = false;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->enableSpeakerDiarization = false;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->enableWordConfidence = false;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->filterProfanity = false;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->languageCode = 'modi';
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->maxAlternatives = 186332;
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->speechContexts = [
        new GoogleCloudVideointelligenceV1p2beta1SpeechContext(),
        new GoogleCloudVideointelligenceV1p2beta1SpeechContext(),
        new GoogleCloudVideointelligenceV1p2beta1SpeechContext(),
        new GoogleCloudVideointelligenceV1p2beta1SpeechContext(),
    ];
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->textDetectionConfig = new GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig();
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->textDetectionConfig->languageHints = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->googleCloudVideointelligenceV1p2beta1AnnotateVideoRequest->videoContext->textDetectionConfig->model = 'aspernatur';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'sed';
    $request->key = 'iste';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

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
