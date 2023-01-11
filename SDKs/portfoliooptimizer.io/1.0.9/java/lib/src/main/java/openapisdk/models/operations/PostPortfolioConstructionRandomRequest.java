package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioConstructionRandomRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioConstructionRandomRequestBody request;
    public PostPortfolioConstructionRandomRequest withRequest(PostPortfolioConstructionRandomRequestBody request) {
        this.request = request;
        return this;
    }
}