package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioOptimizationMaximumReturnRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioOptimizationMaximumReturnRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsCovarianceMatrix")
    public Double[][] assetsCovarianceMatrix;
    public PostPortfolioOptimizationMaximumReturnRequestBody withAssetsCovarianceMatrix(Double[][] assetsCovarianceMatrix) {
        this.assetsCovarianceMatrix = assetsCovarianceMatrix;
        return this;
    }
    @JsonProperty("assetsReturns")
    public Double[] assetsReturns;
    public PostPortfolioOptimizationMaximumReturnRequestBody withAssetsReturns(Double[] assetsReturns) {
        this.assetsReturns = assetsReturns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public PostPortfolioOptimizationMaximumReturnRequestBodyConstraints constraints;
    public PostPortfolioOptimizationMaximumReturnRequestBody withConstraints(PostPortfolioOptimizationMaximumReturnRequestBodyConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
}