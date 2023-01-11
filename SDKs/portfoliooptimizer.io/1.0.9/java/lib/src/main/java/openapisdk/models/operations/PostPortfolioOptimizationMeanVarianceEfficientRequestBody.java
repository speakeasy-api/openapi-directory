package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioOptimizationMeanVarianceEfficientRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCovarianceMatrix")
    public Double[][] assetsCovarianceMatrix;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBody withAssetsCovarianceMatrix(Double[][] assetsCovarianceMatrix) {
        this.assetsCovarianceMatrix = assetsCovarianceMatrix;
        return this;
    }
    @JsonProperty("assetsReturns")
    public Double[] assetsReturns;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBody withAssetsReturns(Double[] assetsReturns) {
        this.assetsReturns = assetsReturns;
        return this;
    }
    @JsonProperty("constraints")
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints constraints;
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBody withConstraints(PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
}