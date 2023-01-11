package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersReturnrefundlineitemRequest {
    public ContentOrdersReturnrefundlineitemPathParams pathParams;
    public ContentOrdersReturnrefundlineitemRequest withPathParams(ContentOrdersReturnrefundlineitemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersReturnrefundlineitemQueryParams queryParams;
    public ContentOrdersReturnrefundlineitemRequest withQueryParams(ContentOrdersReturnrefundlineitemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersReturnRefundLineItemRequest request;
    public ContentOrdersReturnrefundlineitemRequest withRequest(openapisdk.models.shared.OrdersReturnRefundLineItemRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersReturnrefundlineitemSecurity security;
    public ContentOrdersReturnrefundlineitemRequest withSecurity(ContentOrdersReturnrefundlineitemSecurity security) {
        this.security = security;
        return this;
    }
}