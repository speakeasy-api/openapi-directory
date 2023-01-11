package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoInventorySourcesPatchRequest {
    public DisplayvideoInventorySourcesPatchPathParams pathParams;
    public DisplayvideoInventorySourcesPatchRequest withPathParams(DisplayvideoInventorySourcesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoInventorySourcesPatchQueryParams queryParams;
    public DisplayvideoInventorySourcesPatchRequest withQueryParams(DisplayvideoInventorySourcesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InventorySourceInput request;
    public DisplayvideoInventorySourcesPatchRequest withRequest(openapisdk.models.shared.InventorySourceInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoInventorySourcesPatchSecurity security;
    public DisplayvideoInventorySourcesPatchRequest withSecurity(DisplayvideoInventorySourcesPatchSecurity security) {
        this.security = security;
        return this;
    }
}