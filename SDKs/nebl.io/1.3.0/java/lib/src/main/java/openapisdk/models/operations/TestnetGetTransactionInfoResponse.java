package openapisdk.models.operations;



public class TestnetGetTransactionInfoResponse {
    public String contentType;
    public TestnetGetTransactionInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public TestnetGetTransactionInfoResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public TestnetGetTransactionInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTransactionInfoResponse getTransactionInfoResponse;
    public TestnetGetTransactionInfoResponse withGetTransactionInfoResponse(openapisdk.models.shared.GetTransactionInfoResponse getTransactionInfoResponse) {
        this.getTransactionInfoResponse = getTransactionInfoResponse;
        return this;
    }
}