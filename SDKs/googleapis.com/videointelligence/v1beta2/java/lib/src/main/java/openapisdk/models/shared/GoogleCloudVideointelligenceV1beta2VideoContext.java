package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1beta2VideoContext
 * Video context and/or feature-specific parameters.
**/
public class GoogleCloudVideointelligenceV1beta2VideoContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicitContentDetectionConfig")
    public GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig explicitContentDetectionConfig;
    public GoogleCloudVideointelligenceV1beta2VideoContext withExplicitContentDetectionConfig(GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig explicitContentDetectionConfig) {
        this.explicitContentDetectionConfig = explicitContentDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("faceDetectionConfig")
    public GoogleCloudVideointelligenceV1beta2FaceDetectionConfig faceDetectionConfig;
    public GoogleCloudVideointelligenceV1beta2VideoContext withFaceDetectionConfig(GoogleCloudVideointelligenceV1beta2FaceDetectionConfig faceDetectionConfig) {
        this.faceDetectionConfig = faceDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelDetectionConfig")
    public GoogleCloudVideointelligenceV1beta2LabelDetectionConfig labelDetectionConfig;
    public GoogleCloudVideointelligenceV1beta2VideoContext withLabelDetectionConfig(GoogleCloudVideointelligenceV1beta2LabelDetectionConfig labelDetectionConfig) {
        this.labelDetectionConfig = labelDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectTrackingConfig")
    public GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig objectTrackingConfig;
    public GoogleCloudVideointelligenceV1beta2VideoContext withObjectTrackingConfig(GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig objectTrackingConfig) {
        this.objectTrackingConfig = objectTrackingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personDetectionConfig")
    public GoogleCloudVideointelligenceV1beta2PersonDetectionConfig personDetectionConfig;
    public GoogleCloudVideointelligenceV1beta2VideoContext withPersonDetectionConfig(GoogleCloudVideointelligenceV1beta2PersonDetectionConfig personDetectionConfig) {
        this.personDetectionConfig = personDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segments")
    public GoogleCloudVideointelligenceV1beta2VideoSegment[] segments;
    public GoogleCloudVideointelligenceV1beta2VideoContext withSegments(GoogleCloudVideointelligenceV1beta2VideoSegment[] segments) {
        this.segments = segments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shotChangeDetectionConfig")
    public GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig shotChangeDetectionConfig;
    public GoogleCloudVideointelligenceV1beta2VideoContext withShotChangeDetectionConfig(GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig shotChangeDetectionConfig) {
        this.shotChangeDetectionConfig = shotChangeDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speechTranscriptionConfig")
    public GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig speechTranscriptionConfig;
    public GoogleCloudVideointelligenceV1beta2VideoContext withSpeechTranscriptionConfig(GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig speechTranscriptionConfig) {
        this.speechTranscriptionConfig = speechTranscriptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textDetectionConfig")
    public GoogleCloudVideointelligenceV1beta2TextDetectionConfig textDetectionConfig;
    public GoogleCloudVideointelligenceV1beta2VideoContext withTextDetectionConfig(GoogleCloudVideointelligenceV1beta2TextDetectionConfig textDetectionConfig) {
        this.textDetectionConfig = textDetectionConfig;
        return this;
    }
}