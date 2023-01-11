package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioOptimizationMaximumSharpeRatioRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioOptimizationMaximumSharpeRatioRequestBody request;
    public PostPortfolioOptimizationMaximumSharpeRatioRequest withRequest(PostPortfolioOptimizationMaximumSharpeRatioRequestBody request) {
        this.request = request;
        return this;
    }
}