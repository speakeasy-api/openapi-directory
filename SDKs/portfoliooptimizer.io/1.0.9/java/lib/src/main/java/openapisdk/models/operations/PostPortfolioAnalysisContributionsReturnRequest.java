package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioAnalysisContributionsReturnRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioAnalysisContributionsReturnRequestBody request;
    public PostPortfolioAnalysisContributionsReturnRequest withRequest(PostPortfolioAnalysisContributionsReturnRequestBody request) {
        this.request = request;
        return this;
    }
}