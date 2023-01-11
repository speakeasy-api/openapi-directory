package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoInventorySourceGroupsCreateRequest {
    public DisplayvideoInventorySourceGroupsCreateQueryParams queryParams;
    public DisplayvideoInventorySourceGroupsCreateRequest withQueryParams(DisplayvideoInventorySourceGroupsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InventorySourceGroupInput request;
    public DisplayvideoInventorySourceGroupsCreateRequest withRequest(openapisdk.models.shared.InventorySourceGroupInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoInventorySourceGroupsCreateSecurity security;
    public DisplayvideoInventorySourceGroupsCreateRequest withSecurity(DisplayvideoInventorySourceGroupsCreateSecurity security) {
        this.security = security;
        return this;
    }
}