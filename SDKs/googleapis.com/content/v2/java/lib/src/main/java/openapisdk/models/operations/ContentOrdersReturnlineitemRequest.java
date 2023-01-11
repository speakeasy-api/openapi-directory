package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersReturnlineitemRequest {
    public ContentOrdersReturnlineitemPathParams pathParams;
    public ContentOrdersReturnlineitemRequest withPathParams(ContentOrdersReturnlineitemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersReturnlineitemQueryParams queryParams;
    public ContentOrdersReturnlineitemRequest withQueryParams(ContentOrdersReturnlineitemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersReturnLineItemRequest request;
    public ContentOrdersReturnlineitemRequest withRequest(openapisdk.models.shared.OrdersReturnLineItemRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersReturnlineitemSecurity security;
    public ContentOrdersReturnlineitemRequest withSecurity(ContentOrdersReturnlineitemSecurity security) {
        this.security = security;
        return this;
    }
}