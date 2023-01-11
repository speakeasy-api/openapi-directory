package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioOptimizationMeanVarianceEfficientRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioOptimizationMeanVarianceEfficientRequestBody request;
    public PostPortfolioOptimizationMeanVarianceEfficientRequest withRequest(PostPortfolioOptimizationMeanVarianceEfficientRequestBody request) {
        this.request = request;
        return this;
    }
}