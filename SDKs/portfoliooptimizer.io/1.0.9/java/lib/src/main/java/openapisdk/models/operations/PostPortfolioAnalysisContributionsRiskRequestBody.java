package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioAnalysisContributionsRiskRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioAnalysisContributionsRiskRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsCovarianceMatrix")
    public Double[][] assetsCovarianceMatrix;
    public PostPortfolioAnalysisContributionsRiskRequestBody withAssetsCovarianceMatrix(Double[][] assetsCovarianceMatrix) {
        this.assetsCovarianceMatrix = assetsCovarianceMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroups")
    public Long[][] assetsGroups;
    public PostPortfolioAnalysisContributionsRiskRequestBody withAssetsGroups(Long[][] assetsGroups) {
        this.assetsGroups = assetsGroups;
        return this;
    }
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios[] portfolios;
    public PostPortfolioAnalysisContributionsRiskRequestBody withPortfolios(PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}