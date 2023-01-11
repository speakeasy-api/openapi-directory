package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioOptimizationInverseVolatilityWeightedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioOptimizationInverseVolatilityWeightedRequestBody request;
    public PostPortfolioOptimizationInverseVolatilityWeightedRequest withRequest(PostPortfolioOptimizationInverseVolatilityWeightedRequestBody request) {
        this.request = request;
        return this;
    }
}