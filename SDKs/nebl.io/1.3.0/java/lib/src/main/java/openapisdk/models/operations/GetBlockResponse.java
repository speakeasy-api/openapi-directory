package openapisdk.models.operations;



public class GetBlockResponse {
    public String contentType;
    public GetBlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetBlockResponse getBlockResponse;
    public GetBlockResponse withGetBlockResponse(openapisdk.models.shared.GetBlockResponse getBlockResponse) {
        this.getBlockResponse = getBlockResponse;
        return this;
    }
}