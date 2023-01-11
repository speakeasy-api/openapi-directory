package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsUpdateRequest {
    public DrivePermissionsUpdatePathParams pathParams;
    public DrivePermissionsUpdateRequest withPathParams(DrivePermissionsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivePermissionsUpdateQueryParams queryParams;
    public DrivePermissionsUpdateRequest withQueryParams(DrivePermissionsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PermissionInput request;
    public DrivePermissionsUpdateRequest withRequest(openapisdk.models.shared.PermissionInput request) {
        this.request = request;
        return this;
    }
    public DrivePermissionsUpdateSecurity security;
    public DrivePermissionsUpdateRequest withSecurity(DrivePermissionsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}