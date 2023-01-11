package openapisdk.models.operations;



public class SendTxResponse {
    public String contentType;
    public SendTxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public SendTxResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public SendTxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BroadcastTxResponse broadcastTxResponse;
    public SendTxResponse withBroadcastTxResponse(openapisdk.models.shared.BroadcastTxResponse broadcastTxResponse) {
        this.broadcastTxResponse = broadcastTxResponse;
        return this;
    }
}