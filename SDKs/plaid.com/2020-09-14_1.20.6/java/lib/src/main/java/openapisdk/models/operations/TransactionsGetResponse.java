package openapisdk.models.operations;



public class TransactionsGetResponse {
    public String contentType;
    public TransactionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public TransactionsGetResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public TransactionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> transactionsGetResponse;
    public TransactionsGetResponse withTransactionsGetResponse(java.util.Map<String, Object> transactionsGetResponse) {
        this.transactionsGetResponse = transactionsGetResponse;
        return this;
    }
}