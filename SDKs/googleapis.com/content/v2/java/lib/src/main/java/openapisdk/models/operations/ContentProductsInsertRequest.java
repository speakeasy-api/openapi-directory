package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentProductsInsertRequest {
    public ContentProductsInsertPathParams pathParams;
    public ContentProductsInsertRequest withPathParams(ContentProductsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentProductsInsertQueryParams queryParams;
    public ContentProductsInsertRequest withQueryParams(ContentProductsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Product request;
    public ContentProductsInsertRequest withRequest(openapisdk.models.shared.Product request) {
        this.request = request;
        return this;
    }
    public ContentProductsInsertSecurity security;
    public ContentProductsInsertRequest withSecurity(ContentProductsInsertSecurity security) {
        this.security = security;
        return this;
    }
}