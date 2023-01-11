package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioOptimizationInverseVolatilityWeightedRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioOptimizationInverseVolatilityWeightedRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsVolatilities")
    public Double[] assetsVolatilities;
    public PostPortfolioOptimizationInverseVolatilityWeightedRequestBody withAssetsVolatilities(Double[] assetsVolatilities) {
        this.assetsVolatilities = assetsVolatilities;
        return this;
    }
}