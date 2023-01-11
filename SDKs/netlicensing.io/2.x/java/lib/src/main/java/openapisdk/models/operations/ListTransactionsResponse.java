package openapisdk.models.operations;



public class ListTransactionsResponse {
    public byte[] body;
    public ListTransactionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListTransactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListTransactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] netlicensings;
    public ListTransactionsResponse withNetlicensings(Object[] netlicensings) {
        this.netlicensings = netlicensings;
        return this;
    }
}