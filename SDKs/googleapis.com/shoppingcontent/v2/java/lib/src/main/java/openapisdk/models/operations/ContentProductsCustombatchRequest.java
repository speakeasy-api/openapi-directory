package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentProductsCustombatchRequest {
    public ContentProductsCustombatchQueryParams queryParams;
    public ContentProductsCustombatchRequest withQueryParams(ContentProductsCustombatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProductsCustomBatchRequest request;
    public ContentProductsCustombatchRequest withRequest(openapisdk.models.shared.ProductsCustomBatchRequest request) {
        this.request = request;
        return this;
    }
    public ContentProductsCustombatchSecurity security;
    public ContentProductsCustombatchRequest withSecurity(ContentProductsCustombatchSecurity security) {
        this.security = security;
        return this;
    }
}