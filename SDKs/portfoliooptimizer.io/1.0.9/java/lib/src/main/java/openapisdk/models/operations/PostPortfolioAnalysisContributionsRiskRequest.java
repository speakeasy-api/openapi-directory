package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioAnalysisContributionsRiskRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioAnalysisContributionsRiskRequestBody request;
    public PostPortfolioAnalysisContributionsRiskRequest withRequest(PostPortfolioAnalysisContributionsRiskRequestBody request) {
        this.request = request;
        return this;
    }
}