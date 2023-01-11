package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioAnalysisVolatilityRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostPortfolioAnalysisVolatilityRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}