package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioAnalysisTrackingErrorRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioAnalysisTrackingErrorRequestBody request;
    public PostPortfolioAnalysisTrackingErrorRequest withRequest(PostPortfolioAnalysisTrackingErrorRequestBody request) {
        this.request = request;
        return this;
    }
}