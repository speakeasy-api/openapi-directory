package openapisdk.models.operations;



public class PostTransactionsTransactionIdResponse {
    public byte[] body;
    public PostTransactionsTransactionIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostTransactionsTransactionIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTransactionsTransactionIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}