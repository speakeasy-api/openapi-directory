package openapisdk.models.operations;



public class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse {
    public String contentType;
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse;
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse withGoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse) {
        this.googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse = googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}