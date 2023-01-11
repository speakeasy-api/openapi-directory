package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1beta2FaceDetectionConfig
 * Config for FACE_DETECTION.
**/
public class GoogleCloudVideointelligenceV1beta2FaceDetectionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeAttributes")
    public Boolean includeAttributes;
    public GoogleCloudVideointelligenceV1beta2FaceDetectionConfig withIncludeAttributes(Boolean includeAttributes) {
        this.includeAttributes = includeAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeBoundingBoxes")
    public Boolean includeBoundingBoxes;
    public GoogleCloudVideointelligenceV1beta2FaceDetectionConfig withIncludeBoundingBoxes(Boolean includeBoundingBoxes) {
        this.includeBoundingBoxes = includeBoundingBoxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleCloudVideointelligenceV1beta2FaceDetectionConfig withModel(String model) {
        this.model = model;
        return this;
    }
}