package openapisdk.models.operations;



public class ListVerificationAttemptResponse {
    public String contentType;
    public ListVerificationAttemptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListVerificationAttemptListVerificationAttemptResponse listVerificationAttemptResponse;
    public ListVerificationAttemptResponse withListVerificationAttemptResponse(ListVerificationAttemptListVerificationAttemptResponse listVerificationAttemptResponse) {
        this.listVerificationAttemptResponse = listVerificationAttemptResponse;
        return this;
    }
    public Long statusCode;
    public ListVerificationAttemptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}