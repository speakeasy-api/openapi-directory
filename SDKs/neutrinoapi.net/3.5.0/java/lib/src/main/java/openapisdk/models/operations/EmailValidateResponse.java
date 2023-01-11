package openapisdk.models.operations;



public class EmailValidateResponse {
    public openapisdk.models.shared.ApiError apiError;
    public EmailValidateResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public EmailValidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmailValidateResponse emailValidateResponse;
    public EmailValidateResponse withEmailValidateResponse(openapisdk.models.shared.EmailValidateResponse emailValidateResponse) {
        this.emailValidateResponse = emailValidateResponse;
        return this;
    }
    public Long statusCode;
    public EmailValidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}