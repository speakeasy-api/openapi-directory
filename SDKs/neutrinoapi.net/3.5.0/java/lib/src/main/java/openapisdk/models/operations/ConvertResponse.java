package openapisdk.models.operations;



public class ConvertResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ConvertResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ConvertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ConvertResponse convertResponse;
    public ConvertResponse withConvertResponse(openapisdk.models.shared.ConvertResponse convertResponse) {
        this.convertResponse = convertResponse;
        return this;
    }
    public Long statusCode;
    public ConvertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}