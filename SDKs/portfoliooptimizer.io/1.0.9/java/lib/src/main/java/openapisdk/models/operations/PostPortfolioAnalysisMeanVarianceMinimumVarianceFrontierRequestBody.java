package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCovarianceMatrix")
    public Double[][] assetsCovarianceMatrix;
    public PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody withAssetsCovarianceMatrix(Double[][] assetsCovarianceMatrix) {
        this.assetsCovarianceMatrix = assetsCovarianceMatrix;
        return this;
    }
    @JsonProperty("assetsReturns")
    public Double[] assetsReturns;
    public PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody withAssetsReturns(Double[] assetsReturns) {
        this.assetsReturns = assetsReturns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints constraints;
    public PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody withConstraints(PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBodyConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portfolios")
    public Long portfolios;
    public PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody withPortfolios(Long portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}