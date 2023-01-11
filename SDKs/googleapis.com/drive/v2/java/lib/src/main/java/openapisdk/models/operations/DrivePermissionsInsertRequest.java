package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsInsertRequest {
    public DrivePermissionsInsertPathParams pathParams;
    public DrivePermissionsInsertRequest withPathParams(DrivePermissionsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivePermissionsInsertQueryParams queryParams;
    public DrivePermissionsInsertRequest withQueryParams(DrivePermissionsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PermissionInput request;
    public DrivePermissionsInsertRequest withRequest(openapisdk.models.shared.PermissionInput request) {
        this.request = request;
        return this;
    }
    public DrivePermissionsInsertSecurity security;
    public DrivePermissionsInsertRequest withSecurity(DrivePermissionsInsertSecurity security) {
        this.security = security;
        return this;
    }
}