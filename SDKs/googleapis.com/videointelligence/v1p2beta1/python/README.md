# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.VideointelligenceVideosAnnotateRequest(
    security=operations.VideointelligenceVideosAnnotateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.VideointelligenceVideosAnnotateQueryParams(
        dollar_xgafv="1",
        access_token="necessitatibus",
        alt="proto",
        callback="numquam",
        fields="omnis",
        key="cumque",
        oauth_token="eum",
        pretty_print=True,
        quota_user="fugiat",
        upload_type="iure",
        upload_protocol="dignissimos",
    ),
    request=shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest(
        features=[
            "OBJECT_TRACKING",
            "FACE_DETECTION",
            "TEXT_DETECTION",
        ],
        input_content="unde",
        input_uri="sit",
        location_id="voluptates",
        output_uri="et",
        video_context=shared.GoogleCloudVideointelligenceV1p2beta1VideoContext(
            explicit_content_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig(
                model="ut",
            ),
            face_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig(
                include_attributes=False,
                include_bounding_boxes=True,
                model="eveniet",
            ),
            label_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig(
                frame_confidence_threshold=17.100000,
                label_detection_mode="LABEL_DETECTION_MODE_UNSPECIFIED",
                model="earum",
                stationary_camera=True,
                video_confidence_threshold=46.099998,
            ),
            object_tracking_config=shared.GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig(
                model="quaerat",
            ),
            person_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig(
                include_attributes=True,
                include_bounding_boxes=False,
                include_pose_landmarks=False,
            ),
            segments=[
                shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment(
                    end_time_offset="eaque",
                    start_time_offset="voluptatem",
                ),
                shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment(
                    end_time_offset="cum",
                    start_time_offset="nobis",
                ),
            ],
            shot_change_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig(
                model="voluptates",
            ),
            speech_transcription_config=shared.GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig(
                audio_tracks=[
                    6498262192660066603,
                    1770289546034260289,
                ],
                diarization_speaker_count=2891950092806909580,
                enable_automatic_punctuation=True,
                enable_speaker_diarization=True,
                enable_word_confidence=True,
                filter_profanity=True,
                language_code="non",
                max_alternatives=1280594349293678002,
                speech_contexts=[
                    shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext(
                        phrases=[
                            "neque",
                            "rerum",
                            "qui",
                        ],
                    ),
                    shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext(
                        phrases=[
                            "error",
                            "et",
                            "aspernatur",
                        ],
                    ),
                ],
            ),
            text_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig(
                language_hints=[
                    "ab",
                ],
                model="eos",
            ),
        ),
    ),
)
    
res = s.videos.videointelligence_videos_annotate(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### videos

* `videointelligence_videos_annotate` - Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
