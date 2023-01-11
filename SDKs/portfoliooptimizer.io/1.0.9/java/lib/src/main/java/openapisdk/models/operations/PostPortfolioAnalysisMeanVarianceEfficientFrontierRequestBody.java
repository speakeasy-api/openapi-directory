package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCovarianceMatrix")
    public Double[][] assetsCovarianceMatrix;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody withAssetsCovarianceMatrix(Double[][] assetsCovarianceMatrix) {
        this.assetsCovarianceMatrix = assetsCovarianceMatrix;
        return this;
    }
    @JsonProperty("assetsReturns")
    public Double[] assetsReturns;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody withAssetsReturns(Double[] assetsReturns) {
        this.assetsReturns = assetsReturns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints constraints;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody withConstraints(PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portfolios")
    public Long portfolios;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody withPortfolios(Long portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}