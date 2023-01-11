package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCovarianceMatrix")
    public Double[][] assetsCovarianceMatrix;
    public PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody withAssetsCovarianceMatrix(Double[][] assetsCovarianceMatrix) {
        this.assetsCovarianceMatrix = assetsCovarianceMatrix;
        return this;
    }
    @JsonProperty("assetsReturns")
    public Double[] assetsReturns;
    public PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody withAssetsReturns(Double[] assetsReturns) {
        this.assetsReturns = assetsReturns;
        return this;
    }
    @JsonProperty("riskFreeRate")
    public Double riskFreeRate;
    public PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody withRiskFreeRate(Double riskFreeRate) {
        this.riskFreeRate = riskFreeRate;
        return this;
    }
}