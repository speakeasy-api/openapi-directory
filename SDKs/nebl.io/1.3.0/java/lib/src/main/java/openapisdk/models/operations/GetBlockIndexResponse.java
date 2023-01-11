package openapisdk.models.operations;



public class GetBlockIndexResponse {
    public String contentType;
    public GetBlockIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBlockIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetBlockIndexResponse getBlockIndexResponse;
    public GetBlockIndexResponse withGetBlockIndexResponse(openapisdk.models.shared.GetBlockIndexResponse getBlockIndexResponse) {
        this.getBlockIndexResponse = getBlockIndexResponse;
        return this;
    }
}