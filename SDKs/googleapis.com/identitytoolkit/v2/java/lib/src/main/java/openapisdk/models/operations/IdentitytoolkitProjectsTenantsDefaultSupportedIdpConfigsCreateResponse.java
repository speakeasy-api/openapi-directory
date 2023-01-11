package openapisdk.models.operations;



public class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse {
    public String contentType;
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse withGoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig) {
        this.googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig = googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}