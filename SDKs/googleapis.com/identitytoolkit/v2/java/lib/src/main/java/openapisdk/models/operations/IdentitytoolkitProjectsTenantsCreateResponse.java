package openapisdk.models.operations;



public class IdentitytoolkitProjectsTenantsCreateResponse {
    public String contentType;
    public IdentitytoolkitProjectsTenantsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2Tenant googleCloudIdentitytoolkitAdminV2Tenant;
    public IdentitytoolkitProjectsTenantsCreateResponse withGoogleCloudIdentitytoolkitAdminV2Tenant(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2Tenant googleCloudIdentitytoolkitAdminV2Tenant) {
        this.googleCloudIdentitytoolkitAdminV2Tenant = googleCloudIdentitytoolkitAdminV2Tenant;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitProjectsTenantsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}