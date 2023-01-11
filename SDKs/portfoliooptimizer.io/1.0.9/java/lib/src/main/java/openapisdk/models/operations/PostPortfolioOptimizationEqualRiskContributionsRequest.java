package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioOptimizationEqualRiskContributionsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioOptimizationEqualRiskContributionsRequestBody request;
    public PostPortfolioOptimizationEqualRiskContributionsRequest withRequest(PostPortfolioOptimizationEqualRiskContributionsRequestBody request) {
        this.request = request;
        return this;
    }
}