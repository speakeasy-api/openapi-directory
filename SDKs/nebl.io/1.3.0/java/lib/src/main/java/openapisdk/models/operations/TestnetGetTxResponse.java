package openapisdk.models.operations;



public class TestnetGetTxResponse {
    public String contentType;
    public TestnetGetTxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestnetGetTxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTxResponse getTxResponse;
    public TestnetGetTxResponse withGetTxResponse(openapisdk.models.shared.GetTxResponse getTxResponse) {
        this.getTxResponse = getTxResponse;
        return this;
    }
}