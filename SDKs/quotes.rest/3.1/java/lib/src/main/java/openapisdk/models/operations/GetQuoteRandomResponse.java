package openapisdk.models.operations;



public class GetQuoteRandomResponse {
    public String contentType;
    public GetQuoteRandomResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object quoteResponse;
    public GetQuoteRandomResponse withQuoteResponse(Object quoteResponse) {
        this.quoteResponse = quoteResponse;
        return this;
    }
    public Long statusCode;
    public GetQuoteRandomResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}