package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersCancelRequest {
    public ContentOrdersCancelPathParams pathParams;
    public ContentOrdersCancelRequest withPathParams(ContentOrdersCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersCancelQueryParams queryParams;
    public ContentOrdersCancelRequest withQueryParams(ContentOrdersCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersCancelRequest request;
    public ContentOrdersCancelRequest withRequest(openapisdk.models.shared.OrdersCancelRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersCancelSecurity security;
    public ContentOrdersCancelRequest withSecurity(ContentOrdersCancelSecurity security) {
        this.security = security;
        return this;
    }
}