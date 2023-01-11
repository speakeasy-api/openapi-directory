package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersSetlineitemmetadataRequest {
    public ContentOrdersSetlineitemmetadataPathParams pathParams;
    public ContentOrdersSetlineitemmetadataRequest withPathParams(ContentOrdersSetlineitemmetadataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersSetlineitemmetadataQueryParams queryParams;
    public ContentOrdersSetlineitemmetadataRequest withQueryParams(ContentOrdersSetlineitemmetadataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersSetLineItemMetadataRequest request;
    public ContentOrdersSetlineitemmetadataRequest withRequest(openapisdk.models.shared.OrdersSetLineItemMetadataRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersSetlineitemmetadataSecurity security;
    public ContentOrdersSetlineitemmetadataRequest withSecurity(ContentOrdersSetlineitemmetadataSecurity security) {
        this.security = security;
        return this;
    }
}