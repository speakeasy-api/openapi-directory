package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest {
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams pathParams;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest withPathParams(IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams queryParams;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest withQueryParams(IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig request;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity security;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest withSecurity(IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}