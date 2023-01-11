package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersAddPermissionsRequest {
    public VaultMattersAddPermissionsPathParams pathParams;
    public VaultMattersAddPermissionsRequest withPathParams(VaultMattersAddPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultMattersAddPermissionsQueryParams queryParams;
    public VaultMattersAddPermissionsRequest withQueryParams(VaultMattersAddPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddMatterPermissionsRequest request;
    public VaultMattersAddPermissionsRequest withRequest(openapisdk.models.shared.AddMatterPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public VaultMattersAddPermissionsSecurity security;
    public VaultMattersAddPermissionsRequest withSecurity(VaultMattersAddPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}