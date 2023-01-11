package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersAcknowledgeRequest {
    public ContentOrdersAcknowledgePathParams pathParams;
    public ContentOrdersAcknowledgeRequest withPathParams(ContentOrdersAcknowledgePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersAcknowledgeQueryParams queryParams;
    public ContentOrdersAcknowledgeRequest withQueryParams(ContentOrdersAcknowledgeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersAcknowledgeRequest request;
    public ContentOrdersAcknowledgeRequest withRequest(openapisdk.models.shared.OrdersAcknowledgeRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersAcknowledgeSecurity security;
    public ContentOrdersAcknowledgeRequest withSecurity(ContentOrdersAcknowledgeSecurity security) {
        this.security = security;
        return this;
    }
}