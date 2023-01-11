package openapisdk.models.operations;



public class PhonePlaybackResponse {
    public openapisdk.models.shared.ApiError apiError;
    public PhonePlaybackResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public PhonePlaybackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PhonePlaybackResponse phonePlaybackResponse;
    public PhonePlaybackResponse withPhonePlaybackResponse(openapisdk.models.shared.PhonePlaybackResponse phonePlaybackResponse) {
        this.phonePlaybackResponse = phonePlaybackResponse;
        return this;
    }
    public Long statusCode;
    public PhonePlaybackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}