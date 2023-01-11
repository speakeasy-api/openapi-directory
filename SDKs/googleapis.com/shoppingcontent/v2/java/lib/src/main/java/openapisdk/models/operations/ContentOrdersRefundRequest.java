package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersRefundRequest {
    public ContentOrdersRefundPathParams pathParams;
    public ContentOrdersRefundRequest withPathParams(ContentOrdersRefundPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersRefundQueryParams queryParams;
    public ContentOrdersRefundRequest withQueryParams(ContentOrdersRefundQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersRefundRequest request;
    public ContentOrdersRefundRequest withRequest(openapisdk.models.shared.OrdersRefundRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersRefundSecurity security;
    public ContentOrdersRefundRequest withSecurity(ContentOrdersRefundSecurity security) {
        this.security = security;
        return this;
    }
}