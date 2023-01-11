package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioOptimizationEqualSharpeRatioContributionsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody request;
    public PostPortfolioOptimizationEqualSharpeRatioContributionsRequest withRequest(PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody request) {
        this.request = request;
        return this;
    }
}