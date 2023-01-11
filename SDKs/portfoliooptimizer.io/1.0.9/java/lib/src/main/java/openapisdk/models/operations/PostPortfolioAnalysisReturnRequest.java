package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioAnalysisReturnRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostPortfolioAnalysisReturnRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}