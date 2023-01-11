package openapisdk.models.operations;



public class PhoneVerifyResponse {
    public openapisdk.models.shared.ApiError apiError;
    public PhoneVerifyResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public PhoneVerifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PhoneVerifyResponse phoneVerifyResponse;
    public PhoneVerifyResponse withPhoneVerifyResponse(openapisdk.models.shared.PhoneVerifyResponse phoneVerifyResponse) {
        this.phoneVerifyResponse = phoneVerifyResponse;
        return this;
    }
    public Long statusCode;
    public PhoneVerifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}