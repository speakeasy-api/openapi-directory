package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioAnalysisFactorExposuresRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioAnalysisFactorExposuresRequestBody request;
    public PostPortfolioAnalysisFactorExposuresRequest withRequest(PostPortfolioAnalysisFactorExposuresRequestBody request) {
        this.request = request;
        return this;
    }
}