package openapisdk.models.operations;



public class IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse {
    public String contentType;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig googleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse withGoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig googleCloudIdentitytoolkitAdminV2OAuthIdpConfig) {
        this.googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = googleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}