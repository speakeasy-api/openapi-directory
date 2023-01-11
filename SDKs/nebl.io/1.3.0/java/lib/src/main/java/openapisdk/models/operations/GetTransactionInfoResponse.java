package openapisdk.models.operations;



public class GetTransactionInfoResponse {
    public String contentType;
    public GetTransactionInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTransactionInfoResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetTransactionInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTransactionInfoResponse getTransactionInfoResponse;
    public GetTransactionInfoResponse withGetTransactionInfoResponse(openapisdk.models.shared.GetTransactionInfoResponse getTransactionInfoResponse) {
        this.getTransactionInfoResponse = getTransactionInfoResponse;
        return this;
    }
}