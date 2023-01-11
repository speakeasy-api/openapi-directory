package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioOptimizationMaximumReturnRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioOptimizationMaximumReturnRequestBody request;
    public PostPortfolioOptimizationMaximumReturnRequest withRequest(PostPortfolioOptimizationMaximumReturnRequestBody request) {
        this.request = request;
        return this;
    }
}