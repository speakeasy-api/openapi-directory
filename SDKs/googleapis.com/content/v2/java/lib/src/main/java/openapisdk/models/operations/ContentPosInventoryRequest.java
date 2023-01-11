package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentPosInventoryRequest {
    public ContentPosInventoryPathParams pathParams;
    public ContentPosInventoryRequest withPathParams(ContentPosInventoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentPosInventoryQueryParams queryParams;
    public ContentPosInventoryRequest withQueryParams(ContentPosInventoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PosInventoryRequest request;
    public ContentPosInventoryRequest withRequest(openapisdk.models.shared.PosInventoryRequest request) {
        this.request = request;
        return this;
    }
    public ContentPosInventorySecurity security;
    public ContentPosInventoryRequest withSecurity(ContentPosInventorySecurity security) {
        this.security = security;
        return this;
    }
}