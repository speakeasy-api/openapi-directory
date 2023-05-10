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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1AnnotateVideoRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1VideoContext;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1FaceDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1LabelDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1ObjectTrackingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1PersonDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1VideoSegment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1ShotChangeDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1SpeechTranscriptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1SpeechContext;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVideointelligenceV1TextDetectionConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VideointelligenceVideosAnnotateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VideointelligenceVideosAnnotateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest = new GoogleCloudVideointelligenceV1AnnotateVideoRequest();
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->features = [
        GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum::LABEL_DETECTION,
        GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum::PERSON_DETECTION,
        GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum::EXPLICIT_CONTENT_DETECTION,
        GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum::TEXT_DETECTION,
    ];
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->inputContent = 'possimus';
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->inputUri = 'aut';
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->locationId = 'quasi';
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->outputUri = 'error';
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext = new GoogleCloudVideointelligenceV1VideoContext();
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->explicitContentDetectionConfig = new GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig();
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->explicitContentDetectionConfig->model = 'temporibus';
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->faceDetectionConfig = new GoogleCloudVideointelligenceV1FaceDetectionConfig();
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->faceDetectionConfig->includeAttributes = false;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->faceDetectionConfig->includeBoundingBoxes = false;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->faceDetectionConfig->model = 'laborum';
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->labelDetectionConfig = new GoogleCloudVideointelligenceV1LabelDetectionConfig();
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->labelDetectionConfig->frameConfidenceThreshold = 960.98;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->labelDetectionConfig->labelDetectionMode = GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum::SHOT_AND_FRAME_MODE;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->labelDetectionConfig->model = 'voluptatibus';
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->labelDetectionConfig->stationaryCamera = false;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->labelDetectionConfig->videoConfidenceThreshold = 8781.94;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->objectTrackingConfig = new GoogleCloudVideointelligenceV1ObjectTrackingConfig();
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->objectTrackingConfig->model = 'nihil';
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->personDetectionConfig = new GoogleCloudVideointelligenceV1PersonDetectionConfig();
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->personDetectionConfig->includeAttributes = false;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->personDetectionConfig->includeBoundingBoxes = false;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->personDetectionConfig->includePoseLandmarks = false;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->segments = [
        new GoogleCloudVideointelligenceV1VideoSegment(),
        new GoogleCloudVideointelligenceV1VideoSegment(),
        new GoogleCloudVideointelligenceV1VideoSegment(),
    ];
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->shotChangeDetectionConfig = new GoogleCloudVideointelligenceV1ShotChangeDetectionConfig();
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->shotChangeDetectionConfig->model = 'voluptatibus';
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->speechTranscriptionConfig = new GoogleCloudVideointelligenceV1SpeechTranscriptionConfig();
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->audioTracks = [
        604846,
    ];
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->diarizationSpeakerCount = 451159;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->enableAutomaticPunctuation = false;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->enableSpeakerDiarization = false;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->enableWordConfidence = false;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->filterProfanity = false;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->languageCode = 'cum';
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->maxAlternatives = 19987;
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->speechTranscriptionConfig->speechContexts = [
        new GoogleCloudVideointelligenceV1SpeechContext(),
    ];
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->textDetectionConfig = new GoogleCloudVideointelligenceV1TextDetectionConfig();
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->textDetectionConfig->languageHints = [
        'ut',
        'maiores',
    ];
    $request->googleCloudVideointelligenceV1AnnotateVideoRequest->videoContext->textDetectionConfig->model = 'dicta';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->fields = 'dicta';
    $request->key = 'harum';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'repudiandae';

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
