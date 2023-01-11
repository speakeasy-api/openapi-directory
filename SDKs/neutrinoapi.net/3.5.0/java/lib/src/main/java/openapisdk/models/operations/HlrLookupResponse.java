package openapisdk.models.operations;



public class HlrLookupResponse {
    public openapisdk.models.shared.ApiError apiError;
    public HlrLookupResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public HlrLookupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HlrLookupResponse hlrLookupResponse;
    public HlrLookupResponse withHlrLookupResponse(openapisdk.models.shared.HlrLookupResponse hlrLookupResponse) {
        this.hlrLookupResponse = hlrLookupResponse;
        return this;
    }
    public Long statusCode;
    public HlrLookupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}