package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioOptimizationEqualRiskContributionsRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioOptimizationEqualRiskContributionsRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCovarianceMatrix")
    public Double[][] assetsCovarianceMatrix;
    public PostPortfolioOptimizationEqualRiskContributionsRequestBody withAssetsCovarianceMatrix(Double[][] assetsCovarianceMatrix) {
        this.assetsCovarianceMatrix = assetsCovarianceMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints constraints;
    public PostPortfolioOptimizationEqualRiskContributionsRequestBody withConstraints(PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
}