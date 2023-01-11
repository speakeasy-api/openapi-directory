package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsCreateRequest {
    public IdentitytoolkitProjectsTenantsCreatePathParams pathParams;
    public IdentitytoolkitProjectsTenantsCreateRequest withPathParams(IdentitytoolkitProjectsTenantsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdentitytoolkitProjectsTenantsCreateQueryParams queryParams;
    public IdentitytoolkitProjectsTenantsCreateRequest withQueryParams(IdentitytoolkitProjectsTenantsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2TenantInput request;
    public IdentitytoolkitProjectsTenantsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2TenantInput request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitProjectsTenantsCreateSecurity security;
    public IdentitytoolkitProjectsTenantsCreateRequest withSecurity(IdentitytoolkitProjectsTenantsCreateSecurity security) {
        this.security = security;
        return this;
    }
}