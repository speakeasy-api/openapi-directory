package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductsApiFindRequest {
    public ProductsApiFindQueryParams queryParams;
    public ProductsApiFindRequest withQueryParams(ProductsApiFindQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ProductsApiFindRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}