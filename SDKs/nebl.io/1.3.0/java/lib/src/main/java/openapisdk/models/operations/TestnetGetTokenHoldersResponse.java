package openapisdk.models.operations;



public class TestnetGetTokenHoldersResponse {
    public String contentType;
    public TestnetGetTokenHoldersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public TestnetGetTokenHoldersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public TestnetGetTokenHoldersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTokenHoldersResponse getTokenHoldersResponse;
    public TestnetGetTokenHoldersResponse withGetTokenHoldersResponse(openapisdk.models.shared.GetTokenHoldersResponse getTokenHoldersResponse) {
        this.getTokenHoldersResponse = getTokenHoldersResponse;
        return this;
    }
}