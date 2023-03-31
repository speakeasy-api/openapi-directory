<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.VideointelligenceVideosAnnotateRequest(
    dollar_xgafv="2",
    google_cloud_videointelligence_v1p2beta1_annotate_video_request=shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest(
        features=[
            "OBJECT_TRACKING",
            "LOGO_RECOGNITION",
            "TEXT_DETECTION",
        ],
        input_content="nulla",
        input_uri="corrupti",
        location_id="illum",
        output_uri="vel",
        video_context=shared.GoogleCloudVideointelligenceV1p2beta1VideoContext(
            explicit_content_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig(
                model="error",
            ),
            face_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig(
                include_attributes=False,
                include_bounding_boxes=False,
                model="deserunt",
            ),
            label_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig(
                frame_confidence_threshold=3843.82,
                label_detection_mode="SHOT_MODE",
                model="magnam",
                stationary_camera=False,
                video_confidence_threshold=8917.73,
            ),
            object_tracking_config=shared.GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig(
                model="ipsa",
            ),
            person_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig(
                include_attributes=False,
                include_bounding_boxes=False,
                include_pose_landmarks=False,
            ),
            segments=[
                shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment(
                    end_time_offset="tempora",
                    start_time_offset="suscipit",
                ),
                shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment(
                    end_time_offset="molestiae",
                    start_time_offset="minus",
                ),
                shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment(
                    end_time_offset="placeat",
                    start_time_offset="voluptatum",
                ),
                shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment(
                    end_time_offset="iusto",
                    start_time_offset="excepturi",
                ),
            ],
            shot_change_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig(
                model="nisi",
            ),
            speech_transcription_config=shared.GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig(
                audio_tracks=[
                    836079,
                    71036,
                    337396,
                    87129,
                ],
                diarization_speaker_count=648172,
                enable_automatic_punctuation=False,
                enable_speaker_diarization=False,
                enable_word_confidence=False,
                filter_profanity=False,
                language_code="perferendis",
                max_alternatives=368241,
                speech_contexts=[
                    shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext(
                        phrases=[
                            "quo",
                            "odit",
                            "at",
                            "at",
                        ],
                    ),
                    shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext(
                        phrases=[
                            "molestiae",
                            "quod",
                            "quod",
                            "esse",
                        ],
                    ),
                    shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext(
                        phrases=[
                            "porro",
                            "dolorum",
                            "dicta",
                        ],
                    ),
                    shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext(
                        phrases=[
                            "officia",
                            "occaecati",
                            "fugit",
                        ],
                    ),
                ],
            ),
            text_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig(
                language_hints=[
                    "hic",
                    "optio",
                    "totam",
                ],
                model="beatae",
            ),
        ),
    ),
    access_token="commodi",
    alt="media",
    callback="modi",
    fields_="qui",
    key="impedit",
    oauth_token="cum",
    pretty_print=False,
    quota_user="esse",
    upload_type="ipsum",
    upload_protocol="excepturi",
)
    
res = s.videos.videointelligence_videos_annotate(req, operations.VideointelligenceVideosAnnotateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->