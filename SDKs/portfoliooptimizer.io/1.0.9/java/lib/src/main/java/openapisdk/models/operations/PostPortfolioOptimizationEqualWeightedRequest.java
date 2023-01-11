package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioOptimizationEqualWeightedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioOptimizationEqualWeightedRequestBody request;
    public PostPortfolioOptimizationEqualWeightedRequest withRequest(PostPortfolioOptimizationEqualWeightedRequestBody request) {
        this.request = request;
        return this;
    }
}