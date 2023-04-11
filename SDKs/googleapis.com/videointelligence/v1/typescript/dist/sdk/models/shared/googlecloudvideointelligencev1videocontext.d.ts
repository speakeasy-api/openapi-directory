import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1FaceDetectionConfig } from "./googlecloudvideointelligencev1facedetectionconfig";
import { GoogleCloudVideointelligenceV1LabelDetectionConfig } from "./googlecloudvideointelligencev1labeldetectionconfig";
import { GoogleCloudVideointelligenceV1ObjectTrackingConfig } from "./googlecloudvideointelligencev1objecttrackingconfig";
import { GoogleCloudVideointelligenceV1PersonDetectionConfig } from "./googlecloudvideointelligencev1persondetectionconfig";
import { GoogleCloudVideointelligenceV1ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1TextDetectionConfig } from "./googlecloudvideointelligencev1textdetectionconfig";
import { GoogleCloudVideointelligenceV1VideoSegment } from "./googlecloudvideointelligencev1videosegment";
/**
 * Video context and/or feature-specific parameters.
 */
export declare class GoogleCloudVideointelligenceV1VideoContext extends SpeakeasyBase {
    /**
     * Config for EXPLICIT_CONTENT_DETECTION.
     */
    explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig;
    /**
     * Config for FACE_DETECTION.
     */
    faceDetectionConfig?: GoogleCloudVideointelligenceV1FaceDetectionConfig;
    /**
     * Config for LABEL_DETECTION.
     */
    labelDetectionConfig?: GoogleCloudVideointelligenceV1LabelDetectionConfig;
    /**
     * Config for OBJECT_TRACKING.
     */
    objectTrackingConfig?: GoogleCloudVideointelligenceV1ObjectTrackingConfig;
    /**
     * Config for PERSON_DETECTION.
     */
    personDetectionConfig?: GoogleCloudVideointelligenceV1PersonDetectionConfig;
    /**
     * Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment.
     */
    segments?: GoogleCloudVideointelligenceV1VideoSegment[];
    /**
     * Config for SHOT_CHANGE_DETECTION.
     */
    shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1ShotChangeDetectionConfig;
    /**
     * Config for SPEECH_TRANSCRIPTION.
     */
    speechTranscriptionConfig?: GoogleCloudVideointelligenceV1SpeechTranscriptionConfig;
    /**
     * Config for TEXT_DETECTION.
     */
    textDetectionConfig?: GoogleCloudVideointelligenceV1TextDetectionConfig;
}
