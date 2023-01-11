package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioOptimizationMinimumCorrelationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioOptimizationMinimumCorrelationRequestBody request;
    public PostPortfolioOptimizationMinimumCorrelationRequest withRequest(PostPortfolioOptimizationMinimumCorrelationRequestBody request) {
        this.request = request;
        return this;
    }
}