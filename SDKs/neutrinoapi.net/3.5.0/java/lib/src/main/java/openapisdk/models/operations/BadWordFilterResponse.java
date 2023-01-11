package openapisdk.models.operations;



public class BadWordFilterResponse {
    public openapisdk.models.shared.ApiError apiError;
    public BadWordFilterResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.BadWordFilterResponse badWordFilterResponse;
    public BadWordFilterResponse withBadWordFilterResponse(openapisdk.models.shared.BadWordFilterResponse badWordFilterResponse) {
        this.badWordFilterResponse = badWordFilterResponse;
        return this;
    }
    public String contentType;
    public BadWordFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BadWordFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}