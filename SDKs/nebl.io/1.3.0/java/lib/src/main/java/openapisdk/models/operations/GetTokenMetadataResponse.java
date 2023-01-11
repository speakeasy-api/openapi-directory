package openapisdk.models.operations;



public class GetTokenMetadataResponse {
    public String contentType;
    public GetTokenMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTokenMetadataResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetTokenMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTokenMetadataResponse getTokenMetadataResponse;
    public GetTokenMetadataResponse withGetTokenMetadataResponse(openapisdk.models.shared.GetTokenMetadataResponse getTokenMetadataResponse) {
        this.getTokenMetadataResponse = getTokenMetadataResponse;
        return this;
    }
}