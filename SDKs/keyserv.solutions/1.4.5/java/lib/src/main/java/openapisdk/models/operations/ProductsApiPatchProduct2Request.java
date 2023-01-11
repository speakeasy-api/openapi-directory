package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductsApiPatchProduct2Request {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ProductsApiPatchProduct2Request withRequest(Object request) {
        this.request = request;
        return this;
    }
}