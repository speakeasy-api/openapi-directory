package openapisdk.models.operations;



public class GetTokenHoldersResponse {
    public String contentType;
    public GetTokenHoldersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTokenHoldersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetTokenHoldersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTokenHoldersResponse getTokenHoldersResponse;
    public GetTokenHoldersResponse withGetTokenHoldersResponse(openapisdk.models.shared.GetTokenHoldersResponse getTokenHoldersResponse) {
        this.getTokenHoldersResponse = getTokenHoldersResponse;
        return this;
    }
}