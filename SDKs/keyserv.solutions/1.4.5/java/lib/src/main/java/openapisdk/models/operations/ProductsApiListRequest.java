package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductsApiListRequest {
    public ProductsApiListQueryParams queryParams;
    public ProductsApiListRequest withQueryParams(ProductsApiListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ProductsApiListRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}