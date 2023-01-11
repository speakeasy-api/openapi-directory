package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios {
    @JsonProperty("assetsWeights")
    public Double[] assetsWeights;
    public PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios withAssetsWeights(Double[] assetsWeights) {
        this.assetsWeights = assetsWeights;
        return this;
    }
}