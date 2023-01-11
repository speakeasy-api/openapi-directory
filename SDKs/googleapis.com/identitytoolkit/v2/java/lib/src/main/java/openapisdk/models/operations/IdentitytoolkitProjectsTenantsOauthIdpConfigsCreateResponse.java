package openapisdk.models.operations;



public class IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse {
    public String contentType;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig googleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse withGoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig googleCloudIdentitytoolkitAdminV2OAuthIdpConfig) {
        this.googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = googleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}