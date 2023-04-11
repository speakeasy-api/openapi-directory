import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig } from "./googlecloudvideointelligencev1p1beta1explicitcontentdetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig } from "./googlecloudvideointelligencev1p1beta1facedetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig } from "./googlecloudvideointelligencev1p1beta1labeldetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig } from "./googlecloudvideointelligencev1p1beta1objecttrackingconfig";
import { GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig } from "./googlecloudvideointelligencev1p1beta1persondetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig } from "./googlecloudvideointelligencev1p1beta1shotchangedetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig } from "./googlecloudvideointelligencev1p1beta1speechtranscriptionconfig";
import { GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig } from "./googlecloudvideointelligencev1p1beta1textdetectionconfig";
import { GoogleCloudVideointelligenceV1p1beta1VideoSegment } from "./googlecloudvideointelligencev1p1beta1videosegment";
/**
 * Video context and/or feature-specific parameters.
 */
export declare class GoogleCloudVideointelligenceV1p1beta1VideoContext extends SpeakeasyBase {
    /**
     * Config for EXPLICIT_CONTENT_DETECTION.
     */
    explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig;
    /**
     * Config for FACE_DETECTION.
     */
    faceDetectionConfig?: GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig;
    /**
     * Config for LABEL_DETECTION.
     */
    labelDetectionConfig?: GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig;
    /**
     * Config for OBJECT_TRACKING.
     */
    objectTrackingConfig?: GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig;
    /**
     * Config for PERSON_DETECTION.
     */
    personDetectionConfig?: GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig;
    /**
     * Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment.
     */
    segments?: GoogleCloudVideointelligenceV1p1beta1VideoSegment[];
    /**
     * Config for SHOT_CHANGE_DETECTION.
     */
    shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig;
    /**
     * Config for SPEECH_TRANSCRIPTION.
     */
    speechTranscriptionConfig?: GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig;
    /**
     * Config for TEXT_DETECTION.
     */
    textDetectionConfig?: GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig;
}
