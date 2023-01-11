package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsMarketCapitalizations")
    public Double[] assetsMarketCapitalizations;
    public PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody withAssetsMarketCapitalizations(Double[] assetsMarketCapitalizations) {
        this.assetsMarketCapitalizations = assetsMarketCapitalizations;
        return this;
    }
}