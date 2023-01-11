package openapisdk.models.operations;



public class IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse {
    public String contentType;
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse googleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse;
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse withGoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse googleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse) {
        this.googleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse = googleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}