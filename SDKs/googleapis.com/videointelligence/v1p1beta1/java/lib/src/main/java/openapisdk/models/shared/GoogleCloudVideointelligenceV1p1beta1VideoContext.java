package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1p1beta1VideoContext
 * Video context and/or feature-specific parameters.
**/
public class GoogleCloudVideointelligenceV1p1beta1VideoContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicitContentDetectionConfig")
    public GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig explicitContentDetectionConfig;
    public GoogleCloudVideointelligenceV1p1beta1VideoContext withExplicitContentDetectionConfig(GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig explicitContentDetectionConfig) {
        this.explicitContentDetectionConfig = explicitContentDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("faceDetectionConfig")
    public GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig faceDetectionConfig;
    public GoogleCloudVideointelligenceV1p1beta1VideoContext withFaceDetectionConfig(GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig faceDetectionConfig) {
        this.faceDetectionConfig = faceDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelDetectionConfig")
    public GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig labelDetectionConfig;
    public GoogleCloudVideointelligenceV1p1beta1VideoContext withLabelDetectionConfig(GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig labelDetectionConfig) {
        this.labelDetectionConfig = labelDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectTrackingConfig")
    public GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig objectTrackingConfig;
    public GoogleCloudVideointelligenceV1p1beta1VideoContext withObjectTrackingConfig(GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig objectTrackingConfig) {
        this.objectTrackingConfig = objectTrackingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personDetectionConfig")
    public GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig personDetectionConfig;
    public GoogleCloudVideointelligenceV1p1beta1VideoContext withPersonDetectionConfig(GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig personDetectionConfig) {
        this.personDetectionConfig = personDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segments")
    public GoogleCloudVideointelligenceV1p1beta1VideoSegment[] segments;
    public GoogleCloudVideointelligenceV1p1beta1VideoContext withSegments(GoogleCloudVideointelligenceV1p1beta1VideoSegment[] segments) {
        this.segments = segments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shotChangeDetectionConfig")
    public GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig shotChangeDetectionConfig;
    public GoogleCloudVideointelligenceV1p1beta1VideoContext withShotChangeDetectionConfig(GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig shotChangeDetectionConfig) {
        this.shotChangeDetectionConfig = shotChangeDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speechTranscriptionConfig")
    public GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig speechTranscriptionConfig;
    public GoogleCloudVideointelligenceV1p1beta1VideoContext withSpeechTranscriptionConfig(GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig speechTranscriptionConfig) {
        this.speechTranscriptionConfig = speechTranscriptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textDetectionConfig")
    public GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig textDetectionConfig;
    public GoogleCloudVideointelligenceV1p1beta1VideoContext withTextDetectionConfig(GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig textDetectionConfig) {
        this.textDetectionConfig = textDetectionConfig;
        return this;
    }
}