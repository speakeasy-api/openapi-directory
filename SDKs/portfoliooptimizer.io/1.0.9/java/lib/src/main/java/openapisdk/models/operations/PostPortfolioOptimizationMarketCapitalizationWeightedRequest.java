package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioOptimizationMarketCapitalizationWeightedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody request;
    public PostPortfolioOptimizationMarketCapitalizationWeightedRequest withRequest(PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody request) {
        this.request = request;
        return this;
    }
}