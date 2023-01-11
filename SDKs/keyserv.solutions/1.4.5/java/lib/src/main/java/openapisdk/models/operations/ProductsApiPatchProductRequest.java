package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductsApiPatchProductRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ProductsApiPatchProductRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}