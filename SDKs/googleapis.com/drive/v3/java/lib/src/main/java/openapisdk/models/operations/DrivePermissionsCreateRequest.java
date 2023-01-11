package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsCreateRequest {
    public DrivePermissionsCreatePathParams pathParams;
    public DrivePermissionsCreateRequest withPathParams(DrivePermissionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivePermissionsCreateQueryParams queryParams;
    public DrivePermissionsCreateRequest withQueryParams(DrivePermissionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PermissionInput request;
    public DrivePermissionsCreateRequest withRequest(openapisdk.models.shared.PermissionInput request) {
        this.request = request;
        return this;
    }
    public DrivePermissionsCreateSecurity security;
    public DrivePermissionsCreateRequest withSecurity(DrivePermissionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}