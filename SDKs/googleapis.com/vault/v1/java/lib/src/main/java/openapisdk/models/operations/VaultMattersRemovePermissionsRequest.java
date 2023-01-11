package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersRemovePermissionsRequest {
    public VaultMattersRemovePermissionsPathParams pathParams;
    public VaultMattersRemovePermissionsRequest withPathParams(VaultMattersRemovePermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersRemovePermissionsQueryParams queryParams;
    public VaultMattersRemovePermissionsRequest withQueryParams(VaultMattersRemovePermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveMatterPermissionsRequest request;
    public VaultMattersRemovePermissionsRequest withRequest(openapisdk.models.shared.RemoveMatterPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public VaultMattersRemovePermissionsSecurity security;
    public VaultMattersRemovePermissionsRequest withSecurity(VaultMattersRemovePermissionsSecurity security) {
        this.security = security;
        return this;
    }
}