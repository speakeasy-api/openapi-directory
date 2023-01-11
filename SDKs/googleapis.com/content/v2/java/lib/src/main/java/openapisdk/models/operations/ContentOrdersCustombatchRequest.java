package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersCustombatchRequest {
    public ContentOrdersCustombatchQueryParams queryParams;
    public ContentOrdersCustombatchRequest withQueryParams(ContentOrdersCustombatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersCustomBatchRequest request;
    public ContentOrdersCustombatchRequest withRequest(openapisdk.models.shared.OrdersCustomBatchRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersCustombatchSecurity security;
    public ContentOrdersCustombatchRequest withSecurity(ContentOrdersCustombatchSecurity security) {
        this.security = security;
        return this;
    }
}