package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig
 * Config for SHOT_CHANGE_DETECTION.
**/
public class GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig withModel(String model) {
        this.model = model;
        return this;
    }
}