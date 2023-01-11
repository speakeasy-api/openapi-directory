package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePermissionsPatchRequest {
    public DrivePermissionsPatchPathParams pathParams;
    public DrivePermissionsPatchRequest withPathParams(DrivePermissionsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivePermissionsPatchQueryParams queryParams;
    public DrivePermissionsPatchRequest withQueryParams(DrivePermissionsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PermissionInput request;
    public DrivePermissionsPatchRequest withRequest(openapisdk.models.shared.PermissionInput request) {
        this.request = request;
        return this;
    }
    public DrivePermissionsPatchSecurity security;
    public DrivePermissionsPatchRequest withSecurity(DrivePermissionsPatchSecurity security) {
        this.security = security;
        return this;
    }
}