package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest {
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams pathParams;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest withPathParams(IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams queryParams;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest withQueryParams(IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig request;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest withRequest(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity security;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest withSecurity(IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity security) {
        this.security = security;
        return this;
    }
}