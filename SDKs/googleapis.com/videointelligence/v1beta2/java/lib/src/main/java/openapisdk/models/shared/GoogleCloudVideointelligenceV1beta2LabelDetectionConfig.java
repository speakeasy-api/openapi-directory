package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1beta2LabelDetectionConfig
 * Config for LABEL_DETECTION.
**/
public class GoogleCloudVideointelligenceV1beta2LabelDetectionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameConfidenceThreshold")
    public Float frameConfidenceThreshold;
    public GoogleCloudVideointelligenceV1beta2LabelDetectionConfig withFrameConfidenceThreshold(Float frameConfidenceThreshold) {
        this.frameConfidenceThreshold = frameConfidenceThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelDetectionMode")
    public GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum labelDetectionMode;
    public GoogleCloudVideointelligenceV1beta2LabelDetectionConfig withLabelDetectionMode(GoogleCloudVideointelligenceV1beta2LabelDetectionConfigLabelDetectionModeEnum labelDetectionMode) {
        this.labelDetectionMode = labelDetectionMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleCloudVideointelligenceV1beta2LabelDetectionConfig withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stationaryCamera")
    public Boolean stationaryCamera;
    public GoogleCloudVideointelligenceV1beta2LabelDetectionConfig withStationaryCamera(Boolean stationaryCamera) {
        this.stationaryCamera = stationaryCamera;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoConfidenceThreshold")
    public Float videoConfidenceThreshold;
    public GoogleCloudVideointelligenceV1beta2LabelDetectionConfig withVideoConfidenceThreshold(Float videoConfidenceThreshold) {
        this.videoConfidenceThreshold = videoConfidenceThreshold;
        return this;
    }
}