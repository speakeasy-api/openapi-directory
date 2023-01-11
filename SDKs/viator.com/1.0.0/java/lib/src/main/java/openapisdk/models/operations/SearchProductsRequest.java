package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchProductsRequest {
    public SearchProductsHeaders headers;
    public SearchProductsRequest withHeaders(SearchProductsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SearchProductsRequestBody request;
    public SearchProductsRequest withRequest(SearchProductsRequestBody request) {
        this.request = request;
        return this;
    }
}