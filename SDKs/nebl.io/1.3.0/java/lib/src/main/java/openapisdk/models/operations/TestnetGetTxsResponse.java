package openapisdk.models.operations;



public class TestnetGetTxsResponse {
    public String contentType;
    public TestnetGetTxsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestnetGetTxsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTxsResponse getTxsResponse;
    public TestnetGetTxsResponse withGetTxsResponse(openapisdk.models.shared.GetTxsResponse getTxsResponse) {
        this.getTxsResponse = getTxsResponse;
        return this;
    }
}