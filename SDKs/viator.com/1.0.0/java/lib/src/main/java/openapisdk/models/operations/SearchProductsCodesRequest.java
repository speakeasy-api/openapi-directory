package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchProductsCodesRequest {
    public SearchProductsCodesHeaders headers;
    public SearchProductsCodesRequest withHeaders(SearchProductsCodesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SearchProductsCodesRequestBody request;
    public SearchProductsCodesRequest withRequest(SearchProductsCodesRequestBody request) {
        this.request = request;
        return this;
    }
}