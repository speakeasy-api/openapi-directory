package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioOptimizationMaximumSharpeRatioRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioOptimizationMaximumSharpeRatioRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCovarianceMatrix")
    public Double[][] assetsCovarianceMatrix;
    public PostPortfolioOptimizationMaximumSharpeRatioRequestBody withAssetsCovarianceMatrix(Double[][] assetsCovarianceMatrix) {
        this.assetsCovarianceMatrix = assetsCovarianceMatrix;
        return this;
    }
    @JsonProperty("assetsReturns")
    public Double[] assetsReturns;
    public PostPortfolioOptimizationMaximumSharpeRatioRequestBody withAssetsReturns(Double[] assetsReturns) {
        this.assetsReturns = assetsReturns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints constraints;
    public PostPortfolioOptimizationMaximumSharpeRatioRequestBody withConstraints(PostPortfolioOptimizationMaximumSharpeRatioRequestBodyConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
    @JsonProperty("riskFreeRate")
    public Double riskFreeRate;
    public PostPortfolioOptimizationMaximumSharpeRatioRequestBody withRiskFreeRate(Double riskFreeRate) {
        this.riskFreeRate = riskFreeRate;
        return this;
    }
}