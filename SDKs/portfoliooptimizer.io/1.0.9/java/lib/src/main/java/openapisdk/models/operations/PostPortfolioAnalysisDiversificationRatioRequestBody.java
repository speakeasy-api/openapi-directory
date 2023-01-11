package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisDiversificationRatioRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioAnalysisDiversificationRatioRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCovarianceMatrix")
    public Double[][] assetsCovarianceMatrix;
    public PostPortfolioAnalysisDiversificationRatioRequestBody withAssetsCovarianceMatrix(Double[][] assetsCovarianceMatrix) {
        this.assetsCovarianceMatrix = assetsCovarianceMatrix;
        return this;
    }
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios[] portfolios;
    public PostPortfolioAnalysisDiversificationRatioRequestBody withPortfolios(PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}