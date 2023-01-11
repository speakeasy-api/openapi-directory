package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductsApiSaveRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ProductsApiSaveRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}