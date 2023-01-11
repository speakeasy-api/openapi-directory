package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersInstorerefundlineitemRequest {
    public ContentOrdersInstorerefundlineitemPathParams pathParams;
    public ContentOrdersInstorerefundlineitemRequest withPathParams(ContentOrdersInstorerefundlineitemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersInstorerefundlineitemQueryParams queryParams;
    public ContentOrdersInstorerefundlineitemRequest withQueryParams(ContentOrdersInstorerefundlineitemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersInStoreRefundLineItemRequest request;
    public ContentOrdersInstorerefundlineitemRequest withRequest(openapisdk.models.shared.OrdersInStoreRefundLineItemRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersInstorerefundlineitemSecurity security;
    public ContentOrdersInstorerefundlineitemRequest withSecurity(ContentOrdersInstorerefundlineitemSecurity security) {
        this.security = security;
        return this;
    }
}