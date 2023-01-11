package openapisdk.models.operations;



public class PhoneValidateResponse {
    public openapisdk.models.shared.ApiError apiError;
    public PhoneValidateResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public PhoneValidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PhoneValidateResponse phoneValidateResponse;
    public PhoneValidateResponse withPhoneValidateResponse(openapisdk.models.shared.PhoneValidateResponse phoneValidateResponse) {
        this.phoneValidateResponse = phoneValidateResponse;
        return this;
    }
    public Long statusCode;
    public PhoneValidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}