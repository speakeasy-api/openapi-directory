package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig
 * Config for FACE_DETECTION.
**/
public class GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeAttributes")
    public Boolean includeAttributes;
    public GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig withIncludeAttributes(Boolean includeAttributes) {
        this.includeAttributes = includeAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeBoundingBoxes")
    public Boolean includeBoundingBoxes;
    public GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig withIncludeBoundingBoxes(Boolean includeBoundingBoxes) {
        this.includeBoundingBoxes = includeBoundingBoxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig withModel(String model) {
        this.model = model;
        return this;
    }
}