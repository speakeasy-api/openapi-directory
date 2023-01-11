package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioOptimizationMinimumCorrelationRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioOptimizationMinimumCorrelationRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCorrelationMatrix")
    public Double[][] assetsCorrelationMatrix;
    public PostPortfolioOptimizationMinimumCorrelationRequestBody withAssetsCorrelationMatrix(Double[][] assetsCorrelationMatrix) {
        this.assetsCorrelationMatrix = assetsCorrelationMatrix;
        return this;
    }
    @JsonProperty("assetsVolatilities")
    public Double[] assetsVolatilities;
    public PostPortfolioOptimizationMinimumCorrelationRequestBody withAssetsVolatilities(Double[] assetsVolatilities) {
        this.assetsVolatilities = assetsVolatilities;
        return this;
    }
}