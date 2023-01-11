package openapisdk.models.operations;



public class IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse {
    public String contentType;
    public IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitV2WithdrawMfaResponse googleCloudIdentitytoolkitV2WithdrawMfaResponse;
    public IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse withGoogleCloudIdentitytoolkitV2WithdrawMfaResponse(openapisdk.models.shared.GoogleCloudIdentitytoolkitV2WithdrawMfaResponse googleCloudIdentitytoolkitV2WithdrawMfaResponse) {
        this.googleCloudIdentitytoolkitV2WithdrawMfaResponse = googleCloudIdentitytoolkitV2WithdrawMfaResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}