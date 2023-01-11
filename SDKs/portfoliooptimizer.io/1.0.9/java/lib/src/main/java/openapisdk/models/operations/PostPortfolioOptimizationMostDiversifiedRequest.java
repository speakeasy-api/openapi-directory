package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioOptimizationMostDiversifiedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioOptimizationMostDiversifiedRequestBody request;
    public PostPortfolioOptimizationMostDiversifiedRequest withRequest(PostPortfolioOptimizationMostDiversifiedRequestBody request) {
        this.request = request;
        return this;
    }
}