package openapisdk.models.operations;



public class FetchVerificationAttemptsSummaryResponse {
    public String contentType;
    public FetchVerificationAttemptsSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchVerificationAttemptsSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2VerificationAttemptsSummary verifyV2VerificationAttemptsSummary;
    public FetchVerificationAttemptsSummaryResponse withVerifyV2VerificationAttemptsSummary(openapisdk.models.shared.VerifyV2VerificationAttemptsSummary verifyV2VerificationAttemptsSummary) {
        this.verifyV2VerificationAttemptsSummary = verifyV2VerificationAttemptsSummary;
        return this;
    }
}