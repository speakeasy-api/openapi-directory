package openapisdk.models.operations;



public class MybusinessAccountsLocationsVerificationsCompleteResponse {
    public openapisdk.models.shared.CompleteVerificationResponse completeVerificationResponse;
    public MybusinessAccountsLocationsVerificationsCompleteResponse withCompleteVerificationResponse(openapisdk.models.shared.CompleteVerificationResponse completeVerificationResponse) {
        this.completeVerificationResponse = completeVerificationResponse;
        return this;
    }
    public String contentType;
    public MybusinessAccountsLocationsVerificationsCompleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsVerificationsCompleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}