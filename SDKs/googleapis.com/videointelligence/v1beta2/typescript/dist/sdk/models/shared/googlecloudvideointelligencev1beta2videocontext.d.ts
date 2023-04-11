import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1beta2explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1beta2FaceDetectionConfig } from "./googlecloudvideointelligencev1beta2facedetectionconfig";
import { GoogleCloudVideointelligenceV1beta2LabelDetectionConfig } from "./googlecloudvideointelligencev1beta2labeldetectionconfig";
import { GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig } from "./googlecloudvideointelligencev1beta2objecttrackingconfig";
import { GoogleCloudVideointelligenceV1beta2PersonDetectionConfig } from "./googlecloudvideointelligencev1beta2persondetectionconfig";
import { GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1beta2shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1beta2speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1beta2TextDetectionConfig } from "./googlecloudvideointelligencev1beta2textdetectionconfig";
import { GoogleCloudVideointelligenceV1beta2VideoSegment } from "./googlecloudvideointelligencev1beta2videosegment";
/**
 * Video context and/or feature-specific parameters.
 */
export declare class GoogleCloudVideointelligenceV1beta2VideoContext extends SpeakeasyBase {
    /**
     * Config for EXPLICIT_CONTENT_DETECTION.
     */
    explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig;
    /**
     * Config for FACE_DETECTION.
     */
    faceDetectionConfig?: GoogleCloudVideointelligenceV1beta2FaceDetectionConfig;
    /**
     * Config for LABEL_DETECTION.
     */
    labelDetectionConfig?: GoogleCloudVideointelligenceV1beta2LabelDetectionConfig;
    /**
     * Config for OBJECT_TRACKING.
     */
    objectTrackingConfig?: GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig;
    /**
     * Config for PERSON_DETECTION.
     */
    personDetectionConfig?: GoogleCloudVideointelligenceV1beta2PersonDetectionConfig;
    /**
     * Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment.
     */
    segments?: GoogleCloudVideointelligenceV1beta2VideoSegment[];
    /**
     * Config for SHOT_CHANGE_DETECTION.
     */
    shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig;
    /**
     * Config for SPEECH_TRANSCRIPTION.
     */
    speechTranscriptionConfig?: GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig;
    /**
     * Config for TEXT_DETECTION.
     */
    textDetectionConfig?: GoogleCloudVideointelligenceV1beta2TextDetectionConfig;
}
