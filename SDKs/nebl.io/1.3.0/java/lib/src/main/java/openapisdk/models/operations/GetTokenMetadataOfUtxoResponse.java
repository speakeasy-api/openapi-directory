package openapisdk.models.operations;



public class GetTokenMetadataOfUtxoResponse {
    public String contentType;
    public GetTokenMetadataOfUtxoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTokenMetadataOfUtxoResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetTokenMetadataOfUtxoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTokenMetadataResponse getTokenMetadataResponse;
    public GetTokenMetadataOfUtxoResponse withGetTokenMetadataResponse(openapisdk.models.shared.GetTokenMetadataResponse getTokenMetadataResponse) {
        this.getTokenMetadataResponse = getTokenMetadataResponse;
        return this;
    }
}