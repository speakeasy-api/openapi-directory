package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetsGroupsRiskContributions")
    public Double[] assetsGroupsRiskContributions;
    public PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios withAssetsGroupsRiskContributions(Double[] assetsGroupsRiskContributions) {
        this.assetsGroupsRiskContributions = assetsGroupsRiskContributions;
        return this;
    }
    @JsonProperty("assetsRiskContributions")
    public Double[] assetsRiskContributions;
    public PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios withAssetsRiskContributions(Double[] assetsRiskContributions) {
        this.assetsRiskContributions = assetsRiskContributions;
        return this;
    }
}