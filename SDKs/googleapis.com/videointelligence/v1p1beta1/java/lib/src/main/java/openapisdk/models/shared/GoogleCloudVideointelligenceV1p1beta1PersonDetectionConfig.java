package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig
 * Config for PERSON_DETECTION.
**/
public class GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeAttributes")
    public Boolean includeAttributes;
    public GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig withIncludeAttributes(Boolean includeAttributes) {
        this.includeAttributes = includeAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeBoundingBoxes")
    public Boolean includeBoundingBoxes;
    public GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig withIncludeBoundingBoxes(Boolean includeBoundingBoxes) {
        this.includeBoundingBoxes = includeBoundingBoxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includePoseLandmarks")
    public Boolean includePoseLandmarks;
    public GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig withIncludePoseLandmarks(Boolean includePoseLandmarks) {
        this.includePoseLandmarks = includePoseLandmarks;
        return this;
    }
}