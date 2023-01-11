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
        access_token="atque",
        alt="media",
        callback="laboriosam",
        fields="magni",
        key="et",
        oauth_token="ex",
        pretty_print=False,
        quota_user="repudiandae",
        upload_type="dolore",
        upload_protocol="voluptas",
    ),
    request=shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest(
        features=[
            "FEATURE_UNSPECIFIED",
            "TEXT_DETECTION",
            "OBJECT_TRACKING",
        ],
        input_content="consequatur",
        input_uri="natus",
        location_id="vel",
        output_uri="eius",
        video_context=shared.GoogleCloudVideointelligenceV1p1beta1VideoContext(
            explicit_content_detection_config=shared.GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig(
                model="assumenda",
            ),
            face_detection_config=shared.GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig(
                include_attributes=False,
                include_bounding_boxes=False,
                model="dolores",
            ),
            label_detection_config=shared.GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig(
                frame_confidence_threshold=49.099998,
                label_detection_mode="SHOT_MODE",
                model="neque",
                stationary_camera=False,
                video_confidence_threshold=18.100000,
            ),
            object_tracking_config=shared.GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig(
                model="quisquam",
            ),
            person_detection_config=shared.GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig(
                include_attributes=False,
                include_bounding_boxes=False,
                include_pose_landmarks=False,
            ),
            segments=[
                shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment(
                    end_time_offset="voluptatem",
                    start_time_offset="corrupti",
                ),
                shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment(
                    end_time_offset="animi",
                    start_time_offset="maiores",
                ),
                shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment(
                    end_time_offset="ratione",
                    start_time_offset="et",
                ),
            ],
            shot_change_detection_config=shared.GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig(
                model="asperiores",
            ),
            speech_transcription_config=shared.GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig(
                audio_tracks=[
                    5104133920401201742,
                    6325545306229036395,
                ],
                diarization_speaker_count=1284911164573249502,
                enable_automatic_punctuation=False,
                enable_speaker_diarization=True,
                enable_word_confidence=True,
                filter_profanity=False,
                language_code="saepe",
                max_alternatives=6813293623873318633,
                speech_contexts=[
                    shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext(
                        phrases=[
                            "eum",
                        ],
                    ),
                    shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext(
                        phrases=[
                            "ut",
                            "dicta",
                            "dolores",
                        ],
                    ),
                    shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext(
                        phrases=[
                            "aspernatur",
                        ],
                    ),
                ],
            ),
            text_detection_config=shared.GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig(
                language_hints=[
                    "nesciunt",
                    "minus",
                    "rerum",
                ],
                model="nostrum",
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
