import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1p3beta1explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig } from "./googlecloudvideointelligencev1p3beta1facedetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig } from "./googlecloudvideointelligencev1p3beta1labeldetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig } from "./googlecloudvideointelligencev1p3beta1objecttrackingconfig";
import { GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig } from "./googlecloudvideointelligencev1p3beta1persondetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1p3beta1shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1p3beta1speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig } from "./googlecloudvideointelligencev1p3beta1textdetectionconfig";
import { GoogleCloudVideointelligenceV1p3beta1VideoSegment } from "./googlecloudvideointelligencev1p3beta1videosegment";
/**
 * Video context and/or feature-specific parameters.
 */
export declare class GoogleCloudVideointelligenceV1p3beta1VideoContext extends SpeakeasyBase {
    /**
     * Config for EXPLICIT_CONTENT_DETECTION.
     */
    explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig;
    /**
     * Config for FACE_DETECTION.
     */
    faceDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig;
    /**
     * Config for LABEL_DETECTION.
     */
    labelDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig;
    /**
     * Config for OBJECT_TRACKING.
     */
    objectTrackingConfig?: GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig;
    /**
     * Config for PERSON_DETECTION.
     */
    personDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig;
    /**
     * Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment.
     */
    segments?: GoogleCloudVideointelligenceV1p3beta1VideoSegment[];
    /**
     * Config for SHOT_CHANGE_DETECTION.
     */
    shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig;
    /**
     * Config for SPEECH_TRANSCRIPTION.
     */
    speechTranscriptionConfig?: GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig;
    /**
     * Config for TEXT_DETECTION.
     */
    textDetectionConfig?: GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig;
}
