package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest {
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams pathParams;
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest withPathParams(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams queryParams;
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest withQueryParams(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig request;
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity security;
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest withSecurity(IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}