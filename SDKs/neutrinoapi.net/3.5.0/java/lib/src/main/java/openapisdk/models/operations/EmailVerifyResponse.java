package openapisdk.models.operations;



public class EmailVerifyResponse {
    public openapisdk.models.shared.ApiError apiError;
    public EmailVerifyResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public EmailVerifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmailVerifyResponse emailVerifyResponse;
    public EmailVerifyResponse withEmailVerifyResponse(openapisdk.models.shared.EmailVerifyResponse emailVerifyResponse) {
        this.emailVerifyResponse = emailVerifyResponse;
        return this;
    }
    public Long statusCode;
    public EmailVerifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}