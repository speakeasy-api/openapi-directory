package openapisdk.models.operations;



public class TestnetGetTokenMetadataOfUtxoResponse {
    public String contentType;
    public TestnetGetTokenMetadataOfUtxoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public TestnetGetTokenMetadataOfUtxoResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public TestnetGetTokenMetadataOfUtxoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTokenMetadataResponse getTokenMetadataResponse;
    public TestnetGetTokenMetadataOfUtxoResponse withGetTokenMetadataResponse(openapisdk.models.shared.GetTokenMetadataResponse getTokenMetadataResponse) {
        this.getTokenMetadataResponse = getTokenMetadataResponse;
        return this;
    }
}