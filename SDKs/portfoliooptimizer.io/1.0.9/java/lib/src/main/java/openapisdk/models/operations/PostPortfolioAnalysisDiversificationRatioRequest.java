package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioAnalysisDiversificationRatioRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioAnalysisDiversificationRatioRequestBody request;
    public PostPortfolioAnalysisDiversificationRatioRequest withRequest(PostPortfolioAnalysisDiversificationRatioRequestBody request) {
        this.request = request;
        return this;
    }
}