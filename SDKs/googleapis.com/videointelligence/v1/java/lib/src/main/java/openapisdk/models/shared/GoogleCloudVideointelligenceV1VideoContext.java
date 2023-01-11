package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1VideoContext
 * Video context and/or feature-specific parameters.
**/
public class GoogleCloudVideointelligenceV1VideoContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicitContentDetectionConfig")
    public GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig explicitContentDetectionConfig;
    public GoogleCloudVideointelligenceV1VideoContext withExplicitContentDetectionConfig(GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig explicitContentDetectionConfig) {
        this.explicitContentDetectionConfig = explicitContentDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("faceDetectionConfig")
    public GoogleCloudVideointelligenceV1FaceDetectionConfig faceDetectionConfig;
    public GoogleCloudVideointelligenceV1VideoContext withFaceDetectionConfig(GoogleCloudVideointelligenceV1FaceDetectionConfig faceDetectionConfig) {
        this.faceDetectionConfig = faceDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelDetectionConfig")
    public GoogleCloudVideointelligenceV1LabelDetectionConfig labelDetectionConfig;
    public GoogleCloudVideointelligenceV1VideoContext withLabelDetectionConfig(GoogleCloudVideointelligenceV1LabelDetectionConfig labelDetectionConfig) {
        this.labelDetectionConfig = labelDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectTrackingConfig")
    public GoogleCloudVideointelligenceV1ObjectTrackingConfig objectTrackingConfig;
    public GoogleCloudVideointelligenceV1VideoContext withObjectTrackingConfig(GoogleCloudVideointelligenceV1ObjectTrackingConfig objectTrackingConfig) {
        this.objectTrackingConfig = objectTrackingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personDetectionConfig")
    public GoogleCloudVideointelligenceV1PersonDetectionConfig personDetectionConfig;
    public GoogleCloudVideointelligenceV1VideoContext withPersonDetectionConfig(GoogleCloudVideointelligenceV1PersonDetectionConfig personDetectionConfig) {
        this.personDetectionConfig = personDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segments")
    public GoogleCloudVideointelligenceV1VideoSegment[] segments;
    public GoogleCloudVideointelligenceV1VideoContext withSegments(GoogleCloudVideointelligenceV1VideoSegment[] segments) {
        this.segments = segments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shotChangeDetectionConfig")
    public GoogleCloudVideointelligenceV1ShotChangeDetectionConfig shotChangeDetectionConfig;
    public GoogleCloudVideointelligenceV1VideoContext withShotChangeDetectionConfig(GoogleCloudVideointelligenceV1ShotChangeDetectionConfig shotChangeDetectionConfig) {
        this.shotChangeDetectionConfig = shotChangeDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speechTranscriptionConfig")
    public GoogleCloudVideointelligenceV1SpeechTranscriptionConfig speechTranscriptionConfig;
    public GoogleCloudVideointelligenceV1VideoContext withSpeechTranscriptionConfig(GoogleCloudVideointelligenceV1SpeechTranscriptionConfig speechTranscriptionConfig) {
        this.speechTranscriptionConfig = speechTranscriptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textDetectionConfig")
    public GoogleCloudVideointelligenceV1TextDetectionConfig textDetectionConfig;
    public GoogleCloudVideointelligenceV1VideoContext withTextDetectionConfig(GoogleCloudVideointelligenceV1TextDetectionConfig textDetectionConfig) {
        this.textDetectionConfig = textDetectionConfig;
        return this;
    }
}