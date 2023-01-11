package openapisdk.models.operations;



public class IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse {
    public String contentType;
    public IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse;
    public IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse withGoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse(openapisdk.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse) {
        this.googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse = googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}