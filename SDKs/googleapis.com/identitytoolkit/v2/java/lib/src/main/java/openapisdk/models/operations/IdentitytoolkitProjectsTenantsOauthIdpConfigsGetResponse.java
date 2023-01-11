package openapisdk.models.operations;



public class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse {
    public String contentType;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig googleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse withGoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig googleCloudIdentitytoolkitAdminV2OAuthIdpConfig) {
        this.googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = googleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}