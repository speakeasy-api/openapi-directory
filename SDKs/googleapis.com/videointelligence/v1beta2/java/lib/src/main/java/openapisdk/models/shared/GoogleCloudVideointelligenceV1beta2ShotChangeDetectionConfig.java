package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig
 * Config for SHOT_CHANGE_DETECTION.
**/
public class GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig withModel(String model) {
        this.model = model;
        return this;
    }
}