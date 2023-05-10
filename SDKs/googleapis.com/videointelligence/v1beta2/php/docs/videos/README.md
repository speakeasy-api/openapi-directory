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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2VideoContext;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2FaceDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2LabelDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2PersonDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2VideoSegment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2SpeechContext;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1beta2TextDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceVideosAnnotateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VideointelligenceVideosAnnotateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest = new GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest();
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->features = [
        GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum::PERSON_DETECTION,
        GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum::FACE_DETECTION,
        GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum::OBJECT_TRACKING,
        GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum::LOGO_RECOGNITION,
    ];
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->inputContent = 'esse';
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->inputUri = 'totam';
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->locationId = 'porro';
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->outputUri = 'dolorum';
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext = new GoogleCloudVideointelligenceV1beta2VideoContext();
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig();
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->explicitContentDetectionConfig->model = 'dicta';
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->faceDetectionConfig = new GoogleCloudVideointelligenceV1beta2FaceDetectionConfig();
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->faceDetectionConfig->includeAttributes = false;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->faceDetectionConfig->includeBoundingBoxes = false;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->faceDetectionConfig->model = 'nam';
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->labelDetectionConfig = new GoogleCloudVideointelligenceV1beta2LabelDetectionConfig();
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->labelDetectionConfig->frameConfidenceThreshold = 6399.21;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->labelDetectionConfig->labelDetectionMode = GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum::FRAME_MODE;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->labelDetectionConfig->model = 'fugit';
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->labelDetectionConfig->stationaryCamera = false;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->labelDetectionConfig->videoConfidenceThreshold = 5373.73;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->objectTrackingConfig = new GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig();
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->objectTrackingConfig->model = 'hic';
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->personDetectionConfig = new GoogleCloudVideointelligenceV1beta2PersonDetectionConfig();
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->personDetectionConfig->includeAttributes = false;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->personDetectionConfig->includeBoundingBoxes = false;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->personDetectionConfig->includePoseLandmarks = false;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->segments = [
        new GoogleCloudVideointelligenceV1beta2VideoSegment(),
        new GoogleCloudVideointelligenceV1beta2VideoSegment(),
        new GoogleCloudVideointelligenceV1beta2VideoSegment(),
        new GoogleCloudVideointelligenceV1beta2VideoSegment(),
    ];
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig();
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->shotChangeDetectionConfig->model = 'totam';
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->speechTranscriptionConfig = new GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig();
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->speechTranscriptionConfig->audioTracks = [
        414662,
    ];
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->speechTranscriptionConfig->diarizationSpeakerCount = 473600;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->speechTranscriptionConfig->enableAutomaticPunctuation = false;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->speechTranscriptionConfig->enableSpeakerDiarization = false;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->speechTranscriptionConfig->enableWordConfidence = false;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->speechTranscriptionConfig->filterProfanity = false;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->speechTranscriptionConfig->languageCode = 'modi';
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->speechTranscriptionConfig->maxAlternatives = 186332;
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->speechTranscriptionConfig->speechContexts = [
        new GoogleCloudVideointelligenceV1beta2SpeechContext(),
        new GoogleCloudVideointelligenceV1beta2SpeechContext(),
        new GoogleCloudVideointelligenceV1beta2SpeechContext(),
        new GoogleCloudVideointelligenceV1beta2SpeechContext(),
    ];
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->textDetectionConfig = new GoogleCloudVideointelligenceV1beta2TextDetectionConfig();
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->textDetectionConfig->languageHints = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->googleCloudVideointelligenceV1beta2AnnotateVideoRequest->videoContext->textDetectionConfig->model = 'aspernatur';
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
