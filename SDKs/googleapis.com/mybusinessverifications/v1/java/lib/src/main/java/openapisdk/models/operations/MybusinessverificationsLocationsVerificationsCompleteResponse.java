package openapisdk.models.operations;



public class MybusinessverificationsLocationsVerificationsCompleteResponse {
    public openapisdk.models.shared.CompleteVerificationResponse completeVerificationResponse;
    public MybusinessverificationsLocationsVerificationsCompleteResponse withCompleteVerificationResponse(openapisdk.models.shared.CompleteVerificationResponse completeVerificationResponse) {
        this.completeVerificationResponse = completeVerificationResponse;
        return this;
    }
    public String contentType;
    public MybusinessverificationsLocationsVerificationsCompleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessverificationsLocationsVerificationsCompleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}