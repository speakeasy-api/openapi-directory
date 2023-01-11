package openapisdk.models.operations;



public class GetTransactionsIdResponse {
    public String contentType;
    public GetTransactionsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTransactionResponse getTransactionResponse;
    public GetTransactionsIdResponse withGetTransactionResponse(openapisdk.models.shared.GetTransactionResponse getTransactionResponse) {
        this.getTransactionResponse = getTransactionResponse;
        return this;
    }
    public Long statusCode;
    public GetTransactionsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}