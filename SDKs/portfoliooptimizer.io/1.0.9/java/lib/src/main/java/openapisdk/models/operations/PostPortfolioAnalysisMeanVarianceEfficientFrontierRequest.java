package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody request;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest withRequest(PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody request) {
        this.request = request;
        return this;
    }
}