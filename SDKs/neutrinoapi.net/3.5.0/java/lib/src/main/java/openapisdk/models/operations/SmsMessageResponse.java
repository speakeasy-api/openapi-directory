package openapisdk.models.operations;



public class SmsMessageResponse {
    public openapisdk.models.shared.ApiError apiError;
    public SmsMessageResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public SmsMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SmsMessageResponse smsMessageResponse;
    public SmsMessageResponse withSmsMessageResponse(openapisdk.models.shared.SmsMessageResponse smsMessageResponse) {
        this.smsMessageResponse = smsMessageResponse;
        return this;
    }
    public Long statusCode;
    public SmsMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}