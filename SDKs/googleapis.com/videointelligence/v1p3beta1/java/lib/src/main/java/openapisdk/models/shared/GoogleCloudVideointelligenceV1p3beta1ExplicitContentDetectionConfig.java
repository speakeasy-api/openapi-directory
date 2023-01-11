package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig
 * Config for EXPLICIT_CONTENT_DETECTION.
**/
public class GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig withModel(String model) {
        this.model = model;
        return this;
    }
}