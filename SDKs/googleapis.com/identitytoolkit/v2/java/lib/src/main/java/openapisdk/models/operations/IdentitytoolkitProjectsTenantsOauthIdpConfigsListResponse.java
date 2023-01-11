package openapisdk.models.operations;



public class IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse {
    public String contentType;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse googleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse withGoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse googleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse) {
        this.googleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse = googleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}