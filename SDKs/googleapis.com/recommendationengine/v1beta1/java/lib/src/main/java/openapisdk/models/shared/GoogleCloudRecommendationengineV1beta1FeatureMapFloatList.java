package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudRecommendationengineV1beta1FeatureMapFloatList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Float[] value;
    public GoogleCloudRecommendationengineV1beta1FeatureMapFloatList withValue(Float[] value) {
        this.value = value;
        return this;
    }
}