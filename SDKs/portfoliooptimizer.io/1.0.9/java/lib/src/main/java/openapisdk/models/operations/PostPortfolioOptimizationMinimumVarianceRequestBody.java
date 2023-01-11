package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioOptimizationMinimumVarianceRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioOptimizationMinimumVarianceRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCovarianceMatrix")
    public Double[][] assetsCovarianceMatrix;
    public PostPortfolioOptimizationMinimumVarianceRequestBody withAssetsCovarianceMatrix(Double[][] assetsCovarianceMatrix) {
        this.assetsCovarianceMatrix = assetsCovarianceMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsReturns")
    public Double[] assetsReturns;
    public PostPortfolioOptimizationMinimumVarianceRequestBody withAssetsReturns(Double[] assetsReturns) {
        this.assetsReturns = assetsReturns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints constraints;
    public PostPortfolioOptimizationMinimumVarianceRequestBody withConstraints(PostPortfolioOptimizationMinimumVarianceRequestBodyConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
}