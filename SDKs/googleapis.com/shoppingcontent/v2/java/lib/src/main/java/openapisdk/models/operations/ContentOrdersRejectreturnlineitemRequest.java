package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersRejectreturnlineitemRequest {
    public ContentOrdersRejectreturnlineitemPathParams pathParams;
    public ContentOrdersRejectreturnlineitemRequest withPathParams(ContentOrdersRejectreturnlineitemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersRejectreturnlineitemQueryParams queryParams;
    public ContentOrdersRejectreturnlineitemRequest withQueryParams(ContentOrdersRejectreturnlineitemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersRejectReturnLineItemRequest request;
    public ContentOrdersRejectreturnlineitemRequest withRequest(openapisdk.models.shared.OrdersRejectReturnLineItemRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersRejectreturnlineitemSecurity security;
    public ContentOrdersRejectreturnlineitemRequest withSecurity(ContentOrdersRejectreturnlineitemSecurity security) {
        this.security = security;
        return this;
    }
}