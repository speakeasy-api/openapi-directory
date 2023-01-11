package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioAnalysisDrawdownsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioAnalysisDrawdownsRequestBody request;
    public PostPortfolioAnalysisDrawdownsRequest withRequest(PostPortfolioAnalysisDrawdownsRequestBody request) {
        this.request = request;
        return this;
    }
}