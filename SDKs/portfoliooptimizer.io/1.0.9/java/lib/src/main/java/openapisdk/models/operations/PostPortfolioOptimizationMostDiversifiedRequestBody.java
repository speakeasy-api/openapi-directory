package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioOptimizationMostDiversifiedRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioOptimizationMostDiversifiedRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCovarianceMatrix")
    public Double[][] assetsCovarianceMatrix;
    public PostPortfolioOptimizationMostDiversifiedRequestBody withAssetsCovarianceMatrix(Double[][] assetsCovarianceMatrix) {
        this.assetsCovarianceMatrix = assetsCovarianceMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints constraints;
    public PostPortfolioOptimizationMostDiversifiedRequestBody withConstraints(PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
}