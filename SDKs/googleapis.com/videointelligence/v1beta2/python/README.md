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
        access_token="aut",
        alt="media",
        callback="eum",
        fields="quis",
        key="deleniti",
        oauth_token="quibusdam",
        pretty_print=True,
        quota_user="doloremque",
        upload_type="eius",
        upload_protocol="quasi",
    ),
    request=shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest(
        features=[
            "FACE_DETECTION",
            "LOGO_RECOGNITION",
        ],
        input_content="voluptatem",
        input_uri="cum",
        location_id="explicabo",
        output_uri="accusamus",
        video_context=shared.GoogleCloudVideointelligenceV1beta2VideoContext(
            explicit_content_detection_config=shared.GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig(
                model="repellat",
            ),
            face_detection_config=shared.GoogleCloudVideointelligenceV1beta2FaceDetectionConfig(
                include_attributes=False,
                include_bounding_boxes=False,
                model="nulla",
            ),
            label_detection_config=shared.GoogleCloudVideointelligenceV1beta2LabelDetectionConfig(
                frame_confidence_threshold=13.100000,
                label_detection_mode="FRAME_MODE",
                model="suscipit",
                stationary_camera=True,
                video_confidence_threshold=82.099998,
            ),
            object_tracking_config=shared.GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig(
                model="beatae",
            ),
            person_detection_config=shared.GoogleCloudVideointelligenceV1beta2PersonDetectionConfig(
                include_attributes=True,
                include_bounding_boxes=True,
                include_pose_landmarks=True,
            ),
            segments=[
                shared.GoogleCloudVideointelligenceV1beta2VideoSegment(
                    end_time_offset="vel",
                    start_time_offset="laudantium",
                ),
                shared.GoogleCloudVideointelligenceV1beta2VideoSegment(
                    end_time_offset="officiis",
                    start_time_offset="ratione",
                ),
                shared.GoogleCloudVideointelligenceV1beta2VideoSegment(
                    end_time_offset="debitis",
                    start_time_offset="ipsam",
                ),
            ],
            shot_change_detection_config=shared.GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig(
                model="voluptatem",
            ),
            speech_transcription_config=shared.GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig(
                audio_tracks=[
                    7978414240435591701,
                    5274862137229999836,
                ],
                diarization_speaker_count=1766583513219013839,
                enable_automatic_punctuation=True,
                enable_speaker_diarization=False,
                enable_word_confidence=True,
                filter_profanity=False,
                language_code="recusandae",
                max_alternatives=432962744048564394,
                speech_contexts=[
                    shared.GoogleCloudVideointelligenceV1beta2SpeechContext(
                        phrases=[
                            "placeat",
                        ],
                    ),
                    shared.GoogleCloudVideointelligenceV1beta2SpeechContext(
                        phrases=[
                            "voluptatem",
                            "qui",
                        ],
                    ),
                ],
            ),
            text_detection_config=shared.GoogleCloudVideointelligenceV1beta2TextDetectionConfig(
                language_hints=[
                    "consequatur",
                    "debitis",
                    "dolor",
                ],
                model="unde",
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
