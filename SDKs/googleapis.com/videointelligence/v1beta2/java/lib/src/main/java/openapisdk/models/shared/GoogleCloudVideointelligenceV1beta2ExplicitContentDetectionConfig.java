package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig
 * Config for EXPLICIT_CONTENT_DETECTION.
**/
public class GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig withModel(String model) {
        this.model = model;
        return this;
    }
}