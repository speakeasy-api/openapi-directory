package openapisdk.models.operations;



public class UrlInfoResponse {
    public openapisdk.models.shared.ApiError apiError;
    public UrlInfoResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public UrlInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UrlInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UrlInfoResponse urlInfoResponse;
    public UrlInfoResponse withUrlInfoResponse(openapisdk.models.shared.UrlInfoResponse urlInfoResponse) {
        this.urlInfoResponse = urlInfoResponse;
        return this;
    }
}