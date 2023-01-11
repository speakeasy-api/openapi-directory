package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioOptimizationMinimumVarianceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioOptimizationMinimumVarianceRequestBody request;
    public PostPortfolioOptimizationMinimumVarianceRequest withRequest(PostPortfolioOptimizationMinimumVarianceRequestBody request) {
        this.request = request;
        return this;
    }
}