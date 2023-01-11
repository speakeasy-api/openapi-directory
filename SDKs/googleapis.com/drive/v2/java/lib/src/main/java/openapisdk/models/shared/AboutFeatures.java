package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AboutFeatures {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featureName")
    public String featureName;
    public AboutFeatures withFeatureName(String featureName) {
        this.featureName = featureName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featureRate")
    public Double featureRate;
    public AboutFeatures withFeatureRate(Double featureRate) {
        this.featureRate = featureRate;
        return this;
    }
}