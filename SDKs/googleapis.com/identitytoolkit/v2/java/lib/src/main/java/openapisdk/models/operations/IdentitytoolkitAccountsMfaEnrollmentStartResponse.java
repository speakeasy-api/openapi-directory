package openapisdk.models.operations;



public class IdentitytoolkitAccountsMfaEnrollmentStartResponse {
    public String contentType;
    public IdentitytoolkitAccountsMfaEnrollmentStartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse googleCloudIdentitytoolkitV2StartMfaEnrollmentResponse;
    public IdentitytoolkitAccountsMfaEnrollmentStartResponse withGoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse(openapisdk.models.shared.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse googleCloudIdentitytoolkitV2StartMfaEnrollmentResponse) {
        this.googleCloudIdentitytoolkitV2StartMfaEnrollmentResponse = googleCloudIdentitytoolkitV2StartMfaEnrollmentResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitAccountsMfaEnrollmentStartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}