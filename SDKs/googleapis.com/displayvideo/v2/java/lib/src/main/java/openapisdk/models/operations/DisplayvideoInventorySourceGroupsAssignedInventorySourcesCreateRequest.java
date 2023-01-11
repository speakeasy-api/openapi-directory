package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest {
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreatePathParams pathParams;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest withPathParams(DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams queryParams;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest withQueryParams(DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssignedInventorySourceInput request;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest withRequest(openapisdk.models.shared.AssignedInventorySourceInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity security;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest withSecurity(DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity security) {
        this.security = security;
        return this;
    }
}