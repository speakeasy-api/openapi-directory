package openapisdk.models.operations;



public class GetQuoteResponse {
    public String contentType;
    public GetQuoteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object quoteResponse;
    public GetQuoteResponse withQuoteResponse(Object quoteResponse) {
        this.quoteResponse = quoteResponse;
        return this;
    }
    public Long statusCode;
    public GetQuoteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}