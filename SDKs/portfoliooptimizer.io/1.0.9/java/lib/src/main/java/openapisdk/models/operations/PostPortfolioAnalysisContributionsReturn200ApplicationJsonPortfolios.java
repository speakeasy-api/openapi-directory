package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroupsReturnContributions")
    public Double[] assetsGroupsReturnContributions;
    public PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios withAssetsGroupsReturnContributions(Double[] assetsGroupsReturnContributions) {
        this.assetsGroupsReturnContributions = assetsGroupsReturnContributions;
        return this;
    }
    @JsonProperty("assetsReturnContributions")
    public Double[] assetsReturnContributions;
    public PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios withAssetsReturnContributions(Double[] assetsReturnContributions) {
        this.assetsReturnContributions = assetsReturnContributions;
        return this;
    }
}