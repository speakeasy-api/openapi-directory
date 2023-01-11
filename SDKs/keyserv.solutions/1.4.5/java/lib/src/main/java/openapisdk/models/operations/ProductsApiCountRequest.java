package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductsApiCountRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ProductsApiCountRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}