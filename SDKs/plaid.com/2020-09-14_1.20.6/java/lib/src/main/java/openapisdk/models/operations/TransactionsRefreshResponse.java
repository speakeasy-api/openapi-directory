package openapisdk.models.operations;



public class TransactionsRefreshResponse {
    public String contentType;
    public TransactionsRefreshResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public TransactionsRefreshResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public TransactionsRefreshResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TransactionsRefreshResponse transactionsRefreshResponse;
    public TransactionsRefreshResponse withTransactionsRefreshResponse(openapisdk.models.shared.TransactionsRefreshResponse transactionsRefreshResponse) {
        this.transactionsRefreshResponse = transactionsRefreshResponse;
        return this;
    }
}