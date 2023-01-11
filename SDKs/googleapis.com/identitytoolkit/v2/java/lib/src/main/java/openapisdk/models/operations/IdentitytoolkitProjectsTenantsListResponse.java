package openapisdk.models.operations;



public class IdentitytoolkitProjectsTenantsListResponse {
    public String contentType;
    public IdentitytoolkitProjectsTenantsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse googleCloudIdentitytoolkitAdminV2ListTenantsResponse;
    public IdentitytoolkitProjectsTenantsListResponse withGoogleCloudIdentitytoolkitAdminV2ListTenantsResponse(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse googleCloudIdentitytoolkitAdminV2ListTenantsResponse) {
        this.googleCloudIdentitytoolkitAdminV2ListTenantsResponse = googleCloudIdentitytoolkitAdminV2ListTenantsResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitProjectsTenantsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}