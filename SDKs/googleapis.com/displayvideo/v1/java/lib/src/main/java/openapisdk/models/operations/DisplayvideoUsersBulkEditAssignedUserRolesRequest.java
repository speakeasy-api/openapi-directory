package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoUsersBulkEditAssignedUserRolesRequest {
    public DisplayvideoUsersBulkEditAssignedUserRolesPathParams pathParams;
    public DisplayvideoUsersBulkEditAssignedUserRolesRequest withPathParams(DisplayvideoUsersBulkEditAssignedUserRolesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoUsersBulkEditAssignedUserRolesQueryParams queryParams;
    public DisplayvideoUsersBulkEditAssignedUserRolesRequest withQueryParams(DisplayvideoUsersBulkEditAssignedUserRolesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkEditAssignedUserRolesRequestInput request;
    public DisplayvideoUsersBulkEditAssignedUserRolesRequest withRequest(openapisdk.models.shared.BulkEditAssignedUserRolesRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoUsersBulkEditAssignedUserRolesSecurity security;
    public DisplayvideoUsersBulkEditAssignedUserRolesRequest withSecurity(DisplayvideoUsersBulkEditAssignedUserRolesSecurity security) {
        this.security = security;
        return this;
    }
}