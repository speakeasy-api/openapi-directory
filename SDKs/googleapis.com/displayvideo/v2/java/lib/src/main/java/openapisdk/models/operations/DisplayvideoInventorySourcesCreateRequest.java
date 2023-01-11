package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoInventorySourcesCreateRequest {
    public DisplayvideoInventorySourcesCreateQueryParams queryParams;
    public DisplayvideoInventorySourcesCreateRequest withQueryParams(DisplayvideoInventorySourcesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InventorySourceInput request;
    public DisplayvideoInventorySourcesCreateRequest withRequest(openapisdk.models.shared.InventorySourceInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoInventorySourcesCreateSecurity security;
    public DisplayvideoInventorySourcesCreateRequest withSecurity(DisplayvideoInventorySourcesCreateSecurity security) {
        this.security = security;
        return this;
    }
}