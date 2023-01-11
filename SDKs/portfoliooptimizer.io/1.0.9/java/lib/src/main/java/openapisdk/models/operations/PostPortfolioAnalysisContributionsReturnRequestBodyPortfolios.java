package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios {
    @JsonProperty("assetsWeights")
    public Double[] assetsWeights;
    public PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios withAssetsWeights(Double[] assetsWeights) {
        this.assetsWeights = assetsWeights;
        return this;
    }
}