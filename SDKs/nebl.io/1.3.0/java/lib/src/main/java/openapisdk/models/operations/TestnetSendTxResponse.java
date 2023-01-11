package openapisdk.models.operations;



public class TestnetSendTxResponse {
    public String contentType;
    public TestnetSendTxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public TestnetSendTxResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public TestnetSendTxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BroadcastTxResponse broadcastTxResponse;
    public TestnetSendTxResponse withBroadcastTxResponse(openapisdk.models.shared.BroadcastTxResponse broadcastTxResponse) {
        this.broadcastTxResponse = broadcastTxResponse;
        return this;
    }
}