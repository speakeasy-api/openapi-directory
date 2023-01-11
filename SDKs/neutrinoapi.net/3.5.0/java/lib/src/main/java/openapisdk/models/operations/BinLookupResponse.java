package openapisdk.models.operations;



public class BinLookupResponse {
    public openapisdk.models.shared.ApiError apiError;
    public BinLookupResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.BinLookupResponse binLookupResponse;
    public BinLookupResponse withBinLookupResponse(openapisdk.models.shared.BinLookupResponse binLookupResponse) {
        this.binLookupResponse = binLookupResponse;
        return this;
    }
    public String contentType;
    public BinLookupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BinLookupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}