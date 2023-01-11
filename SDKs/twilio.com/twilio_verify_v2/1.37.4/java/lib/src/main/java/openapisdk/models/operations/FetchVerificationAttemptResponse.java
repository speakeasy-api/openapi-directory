package openapisdk.models.operations;



public class FetchVerificationAttemptResponse {
    public String contentType;
    public FetchVerificationAttemptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchVerificationAttemptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2VerificationAttempt verifyV2VerificationAttempt;
    public FetchVerificationAttemptResponse withVerifyV2VerificationAttempt(openapisdk.models.shared.VerifyV2VerificationAttempt verifyV2VerificationAttempt) {
        this.verifyV2VerificationAttempt = verifyV2VerificationAttempt;
        return this;
    }
}