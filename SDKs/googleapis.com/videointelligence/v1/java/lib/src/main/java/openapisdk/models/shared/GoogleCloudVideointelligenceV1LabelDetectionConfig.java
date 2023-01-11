package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1LabelDetectionConfig
 * Config for LABEL_DETECTION.
**/
public class GoogleCloudVideointelligenceV1LabelDetectionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameConfidenceThreshold")
    public Float frameConfidenceThreshold;
    public GoogleCloudVideointelligenceV1LabelDetectionConfig withFrameConfidenceThreshold(Float frameConfidenceThreshold) {
        this.frameConfidenceThreshold = frameConfidenceThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelDetectionMode")
    public GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum labelDetectionMode;
    public GoogleCloudVideointelligenceV1LabelDetectionConfig withLabelDetectionMode(GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum labelDetectionMode) {
        this.labelDetectionMode = labelDetectionMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleCloudVideointelligenceV1LabelDetectionConfig withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stationaryCamera")
    public Boolean stationaryCamera;
    public GoogleCloudVideointelligenceV1LabelDetectionConfig withStationaryCamera(Boolean stationaryCamera) {
        this.stationaryCamera = stationaryCamera;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoConfidenceThreshold")
    public Float videoConfidenceThreshold;
    public GoogleCloudVideointelligenceV1LabelDetectionConfig withVideoConfidenceThreshold(Float videoConfidenceThreshold) {
        this.videoConfidenceThreshold = videoConfidenceThreshold;
        return this;
    }
}