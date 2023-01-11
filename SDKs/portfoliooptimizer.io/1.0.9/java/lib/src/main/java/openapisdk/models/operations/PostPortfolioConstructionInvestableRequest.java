package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPortfolioConstructionInvestableRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPortfolioConstructionInvestableRequestBody request;
    public PostPortfolioConstructionInvestableRequest withRequest(PostPortfolioConstructionInvestableRequestBody request) {
        this.request = request;
        return this;
    }
}