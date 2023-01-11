package openapisdk.models.operations;



public class IdentitytoolkitDefaultSupportedIdpsListResponse {
    public String contentType;
    public IdentitytoolkitDefaultSupportedIdpsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse;
    public IdentitytoolkitDefaultSupportedIdpsListResponse withGoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse) {
        this.googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse = googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitDefaultSupportedIdpsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}