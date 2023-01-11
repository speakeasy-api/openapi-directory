package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudRecommendationengineV1beta1FeatureMapStringList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String[] value;
    public GoogleCloudRecommendationengineV1beta1FeatureMapStringList withValue(String[] value) {
        this.value = value;
        return this;
    }
}