package openapisdk.models.operations;



public class TestnetGetTokenMetadataResponse {
    public String contentType;
    public TestnetGetTokenMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public TestnetGetTokenMetadataResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public TestnetGetTokenMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTokenMetadataResponse getTokenMetadataResponse;
    public TestnetGetTokenMetadataResponse withGetTokenMetadataResponse(openapisdk.models.shared.GetTokenMetadataResponse getTokenMetadataResponse) {
        this.getTokenMetadataResponse = getTokenMetadataResponse;
        return this;
    }
}