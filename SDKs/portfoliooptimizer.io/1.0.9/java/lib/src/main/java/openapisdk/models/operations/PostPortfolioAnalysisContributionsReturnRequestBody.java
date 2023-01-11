package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioAnalysisContributionsReturnRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioAnalysisContributionsReturnRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroups")
    public Long[][] assetsGroups;
    public PostPortfolioAnalysisContributionsReturnRequestBody withAssetsGroups(Long[][] assetsGroups) {
        this.assetsGroups = assetsGroups;
        return this;
    }
    @JsonProperty("assetsReturns")
    public Double[] assetsReturns;
    public PostPortfolioAnalysisContributionsReturnRequestBody withAssetsReturns(Double[] assetsReturns) {
        this.assetsReturns = assetsReturns;
        return this;
    }
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios[] portfolios;
    public PostPortfolioAnalysisContributionsReturnRequestBody withPortfolios(PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}