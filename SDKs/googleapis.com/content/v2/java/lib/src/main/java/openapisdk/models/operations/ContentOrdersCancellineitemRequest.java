package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersCancellineitemRequest {
    public ContentOrdersCancellineitemPathParams pathParams;
    public ContentOrdersCancellineitemRequest withPathParams(ContentOrdersCancellineitemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersCancellineitemQueryParams queryParams;
    public ContentOrdersCancellineitemRequest withQueryParams(ContentOrdersCancellineitemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersCancelLineItemRequest request;
    public ContentOrdersCancellineitemRequest withRequest(openapisdk.models.shared.OrdersCancelLineItemRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersCancellineitemSecurity security;
    public ContentOrdersCancellineitemRequest withSecurity(ContentOrdersCancellineitemSecurity security) {
        this.security = security;
        return this;
    }
}