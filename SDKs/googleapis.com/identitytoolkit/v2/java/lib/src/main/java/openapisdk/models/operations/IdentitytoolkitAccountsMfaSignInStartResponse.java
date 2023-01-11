package openapisdk.models.operations;



public class IdentitytoolkitAccountsMfaSignInStartResponse {
    public String contentType;
    public IdentitytoolkitAccountsMfaSignInStartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitV2StartMfaSignInResponse googleCloudIdentitytoolkitV2StartMfaSignInResponse;
    public IdentitytoolkitAccountsMfaSignInStartResponse withGoogleCloudIdentitytoolkitV2StartMfaSignInResponse(openapisdk.models.shared.GoogleCloudIdentitytoolkitV2StartMfaSignInResponse googleCloudIdentitytoolkitV2StartMfaSignInResponse) {
        this.googleCloudIdentitytoolkitV2StartMfaSignInResponse = googleCloudIdentitytoolkitV2StartMfaSignInResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitAccountsMfaSignInStartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}