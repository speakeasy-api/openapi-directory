package openapisdk.models.operations;



public class TestnetGetBlockResponse {
    public String contentType;
    public TestnetGetBlockResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestnetGetBlockResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetBlockResponse getBlockResponse;
    public TestnetGetBlockResponse withGetBlockResponse(openapisdk.models.shared.GetBlockResponse getBlockResponse) {
        this.getBlockResponse = getBlockResponse;
        return this;
    }
}