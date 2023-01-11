package openapisdk.models.operations;



public class BroadcastTxResponse {
    public String contentType;
    public BroadcastTxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public BroadcastTxResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public BroadcastTxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BroadcastTxResponse broadcastTxResponse;
    public BroadcastTxResponse withBroadcastTxResponse(openapisdk.models.shared.BroadcastTxResponse broadcastTxResponse) {
        this.broadcastTxResponse = broadcastTxResponse;
        return this;
    }
}