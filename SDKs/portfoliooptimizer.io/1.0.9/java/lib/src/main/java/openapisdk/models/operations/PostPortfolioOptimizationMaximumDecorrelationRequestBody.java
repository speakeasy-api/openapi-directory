package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioOptimizationMaximumDecorrelationRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioOptimizationMaximumDecorrelationRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCorrelationMatrix")
    public Double[][] assetsCorrelationMatrix;
    public PostPortfolioOptimizationMaximumDecorrelationRequestBody withAssetsCorrelationMatrix(Double[][] assetsCorrelationMatrix) {
        this.assetsCorrelationMatrix = assetsCorrelationMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsReturns")
    public Double[] assetsReturns;
    public PostPortfolioOptimizationMaximumDecorrelationRequestBody withAssetsReturns(Double[] assetsReturns) {
        this.assetsReturns = assetsReturns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints constraints;
    public PostPortfolioOptimizationMaximumDecorrelationRequestBody withConstraints(PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
}