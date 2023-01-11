package openapisdk.models.operations;



public class IdentitytoolkitAccountsMfaSignInFinalizeResponse {
    public String contentType;
    public IdentitytoolkitAccountsMfaSignInFinalizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse googleCloudIdentitytoolkitV2FinalizeMfaSignInResponse;
    public IdentitytoolkitAccountsMfaSignInFinalizeResponse withGoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse(openapisdk.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse googleCloudIdentitytoolkitV2FinalizeMfaSignInResponse) {
        this.googleCloudIdentitytoolkitV2FinalizeMfaSignInResponse = googleCloudIdentitytoolkitV2FinalizeMfaSignInResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitAccountsMfaSignInFinalizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}