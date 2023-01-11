package openapisdk.models.operations;



public class TestnetGetBlockIndexResponse {
    public String contentType;
    public TestnetGetBlockIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestnetGetBlockIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetBlockIndexResponse getBlockIndexResponse;
    public TestnetGetBlockIndexResponse withGetBlockIndexResponse(openapisdk.models.shared.GetBlockIndexResponse getBlockIndexResponse) {
        this.getBlockIndexResponse = getBlockIndexResponse;
        return this;
    }
}