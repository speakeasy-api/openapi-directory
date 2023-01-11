package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioOptimizationInverseVarianceWeightedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioOptimizationInverseVarianceWeightedRequestBody request;
    public PostPortfolioOptimizationInverseVarianceWeightedRequest withRequest(PostPortfolioOptimizationInverseVarianceWeightedRequestBody request) {
        this.request = request;
        return this;
    }
}