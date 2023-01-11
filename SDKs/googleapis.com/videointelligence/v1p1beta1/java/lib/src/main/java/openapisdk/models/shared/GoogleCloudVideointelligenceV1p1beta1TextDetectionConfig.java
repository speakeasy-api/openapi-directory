package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig
 * Config for TEXT_DETECTION.
**/
public class GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageHints")
    public String[] languageHints;
    public GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig withLanguageHints(String[] languageHints) {
        this.languageHints = languageHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig withModel(String model) {
        this.model = model;
        return this;
    }
}