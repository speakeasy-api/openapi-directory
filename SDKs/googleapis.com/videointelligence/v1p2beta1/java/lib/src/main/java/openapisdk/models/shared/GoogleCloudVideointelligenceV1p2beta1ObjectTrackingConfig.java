package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig
 * Config for OBJECT_TRACKING.
**/
public class GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig withModel(String model) {
        this.model = model;
        return this;
    }
}