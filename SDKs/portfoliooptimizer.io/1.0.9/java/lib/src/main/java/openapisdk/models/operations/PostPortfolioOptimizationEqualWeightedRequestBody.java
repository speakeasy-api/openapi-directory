package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioOptimizationEqualWeightedRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioOptimizationEqualWeightedRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
}