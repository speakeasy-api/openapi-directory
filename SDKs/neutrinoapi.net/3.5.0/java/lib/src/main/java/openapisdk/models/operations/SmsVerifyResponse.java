package openapisdk.models.operations;



public class SmsVerifyResponse {
    public openapisdk.models.shared.ApiError apiError;
    public SmsVerifyResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public SmsVerifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SmsVerifyResponse smsVerifyResponse;
    public SmsVerifyResponse withSmsVerifyResponse(openapisdk.models.shared.SmsVerifyResponse smsVerifyResponse) {
        this.smsVerifyResponse = smsVerifyResponse;
        return this;
    }
    public Long statusCode;
    public SmsVerifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}