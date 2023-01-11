package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1RecommenderGenerationConfig
 * A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation.
**/
public class GoogleCloudRecommenderV1RecommenderGenerationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("params")
    public java.util.Map<String, Object> params;
    public GoogleCloudRecommenderV1RecommenderGenerationConfig withParams(java.util.Map<String, Object> params) {
        this.params = params;
        return this;
    }
}