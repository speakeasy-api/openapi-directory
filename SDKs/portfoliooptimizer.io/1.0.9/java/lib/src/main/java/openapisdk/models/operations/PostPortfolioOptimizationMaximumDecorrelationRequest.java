package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioOptimizationMaximumDecorrelationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioOptimizationMaximumDecorrelationRequestBody request;
    public PostPortfolioOptimizationMaximumDecorrelationRequest withRequest(PostPortfolioOptimizationMaximumDecorrelationRequestBody request) {
        this.request = request;
        return this;
    }
}