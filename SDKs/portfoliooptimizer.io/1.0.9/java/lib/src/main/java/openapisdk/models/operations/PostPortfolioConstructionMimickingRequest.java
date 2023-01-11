package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioConstructionMimickingRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioConstructionMimickingRequestBody request;
    public PostPortfolioConstructionMimickingRequest withRequest(PostPortfolioConstructionMimickingRequestBody request) {
        this.request = request;
        return this;
    }
}