package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody request;
    public PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest withRequest(PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequestBody request) {
        this.request = request;
        return this;
    }
}