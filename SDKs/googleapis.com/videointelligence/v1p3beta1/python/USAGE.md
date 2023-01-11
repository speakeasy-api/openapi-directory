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
        alt="json",
        callback="suscipit",
        fields="exercitationem",
        key="omnis",
        oauth_token="reprehenderit",
        pretty_print=True,
        quota_user="minima",
        upload_type="sit",
        upload_protocol="quas",
    ),
    request=shared.GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest(
        features=[
            "SHOT_CHANGE_DETECTION",
        ],
        input_content="et",
        input_uri="perferendis",
        location_id="sunt",
        output_uri="ipsum",
        video_context=shared.GoogleCloudVideointelligenceV1p3beta1VideoContext(
            explicit_content_detection_config=shared.GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig(
                model="eum",
            ),
            face_detection_config=shared.GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig(
                include_attributes=False,
                include_bounding_boxes=False,
                model="est",
            ),
            label_detection_config=shared.GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig(
                frame_confidence_threshold=94.099998,
                label_detection_mode="SHOT_MODE",
                model="ipsa",
                stationary_camera=False,
                video_confidence_threshold=79.199997,
            ),
            object_tracking_config=shared.GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig(
                model="eos",
            ),
            person_detection_config=shared.GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig(
                include_attributes=False,
                include_bounding_boxes=False,
                include_pose_landmarks=True,
            ),
            segments=[
                shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment(
                    end_time_offset="et",
                    start_time_offset="aut",
                ),
                shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment(
                    end_time_offset="saepe",
                    start_time_offset="fugit",
                ),
                shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment(
                    end_time_offset="quae",
                    start_time_offset="repellat",
                ),
            ],
            shot_change_detection_config=shared.GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig(
                model="laboriosam",
            ),
            speech_transcription_config=shared.GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig(
                audio_tracks=[
                    8944738037156554366,
                    2062583762746098340,
                    3421029898312825929,
                ],
                diarization_speaker_count=7614446021282930123,
                enable_automatic_punctuation=True,
                enable_speaker_diarization=False,
                enable_word_confidence=False,
                filter_profanity=False,
                language_code="quia",
                max_alternatives=2397772980755581892,
                speech_contexts=[
                    shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext(
                        phrases=[
                            "ut",
                            "quasi",
                        ],
                    ),
                    shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext(
                        phrases=[
                            "ea",
                            "sit",
                        ],
                    ),
                ],
            ),
            text_detection_config=shared.GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig(
                language_hints=[
                    "dicta",
                    "eum",
                    "molestiae",
                ],
                model="eum",
            ),
        ),
    ),
)
    
res = s.videos.videointelligence_videos_annotate(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->