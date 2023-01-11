package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest {
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditPathParams pathParams;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest withPathParams(DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams queryParams;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest withQueryParams(DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkEditAssignedInventorySourcesRequestInput request;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest withRequest(openapisdk.models.shared.BulkEditAssignedInventorySourcesRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity security;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest withSecurity(DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity security) {
        this.security = security;
        return this;
    }
}