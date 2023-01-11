package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AvailableProductsRequest {
    public AvailableProductsHeaders headers;
    public AvailableProductsRequest withHeaders(AvailableProductsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AvailableProductsRequestBody request;
    public AvailableProductsRequest withRequest(AvailableProductsRequestBody request) {
        this.request = request;
        return this;
    }
}