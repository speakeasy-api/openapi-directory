package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioAnalysisReturnsAverageRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioAnalysisReturnsAverageRequestBody request;
    public PostPortfolioAnalysisReturnsAverageRequest withRequest(PostPortfolioAnalysisReturnsAverageRequestBody request) {
        this.request = request;
        return this;
    }
}