package openapisdk.models.operations;



public class GetTransactionsResponse {
    public byte[] body;
    public GetTransactionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}